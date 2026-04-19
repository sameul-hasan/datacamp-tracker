import { useState, useCallback, useEffect, useMemo } from 'react';
import { WEEKS, CERTIFICATIONS, COURSES } from '../data/curriculum';

const STORAGE_KEY = 'dc-tracker-v3';

const TOTAL_DAYS = 168;
const TOTAL_COURSES = COURSES.length;
const TOTAL_CERTS = CERTIFICATIONS.length;

const BADGES = [
  { id:'first_step', name:'First Step', icon:'🌱', desc:'Complete your first day', xp:50, check: s => Object.values(s.completedDays).filter(Boolean).length >= 1 },
  { id:'week_warrior', name:'Week Warrior', icon:'⚔️', desc:'Complete a full week', xp:200, check: s => { 
    return WEEKS.some(w => w.days.every(d => s.completedDays[d.day])); 
  }},
  { id:'streak_3', name:'On Fire', icon:'🔥', desc:'3-day streak', xp:100, check: (s,t) => t.streak >= 3 },
  { id:'streak_7', name:'Unstoppable', icon:'💫', desc:'7-day streak', xp:300, check: (s,t) => t.streak >= 7 },
  { id:'streak_14', name:'Legend', icon:'🏆', desc:'14-day streak', xp:500, check: (s,t) => t.streak >= 14 },
  { id:'course_all', name:'Course Collector', icon:'📚', desc:'Complete all courses', xp:500, check: s => Object.values(s.completedCourses).filter(Boolean).length >= TOTAL_COURSES },
  { id:'cert_1', name:'Certified!', icon:'📜', desc:'Earn first certification', xp:500, check: s => Object.values(s.certifications).filter(Boolean).length >= 1 },
  { id:'cert_all', name:'Quad Certified', icon:'💎', desc:'Earn all 4 certifications', xp:2000, check: s => Object.values(s.certifications).filter(Boolean).length >= 4 },
  { id:'half_way', name:'Halfway There', icon:'🚀', desc:'Complete 84 days (50%)', xp:400, check: s => Object.values(s.completedDays).filter(Boolean).length >= 84 },
  { id:'month_1', name:'Part I Done', icon:'🗓️', desc:'Complete first 28 days', xp:300, check: s => { for(let i=1;i<=28;i++) if(!s.completedDays[i]) return false; return true; }},
  { id:'python_start', name:'Pythonista', icon:'🐍', desc:'Complete 10 days', xp:150, check: s => Object.values(s.completedDays).filter(Boolean).length >= 10 },
  { id:'ml_master', name:'ML Master', icon:'🤖', desc:'Complete Part II (56 days)', xp:400, check: s => { for(let i=29;i<=56;i++) if(!s.completedDays[i]) return false; return true; }},
  { id:'deep_diver', name:'Deep Diver', icon:'🧠', desc:'Complete Part III (84 days)', xp:400, check: s => { for(let i=57;i<=84;i++) if(!s.completedDays[i]) return false; return true; }},
  { id:'finish', name:'Job Ready', icon:'🎯', desc:'Complete all 168 days', xp:5000, check: s => Object.values(s.completedDays).filter(Boolean).length >= TOTAL_DAYS },
];

const LEVELS = [
  { level:1, title:'Curious Beginner', minXP:0, color:'#52647d' },
  { level:2, title:'Code Learner', minXP:100, color:'#05c3de' },
  { level:3, title:'Data Explorer', minXP:350, color:'#05c3de' },
  { level:4, title:'Python Builder', minXP:700, color:'#9b6dff' },
  { level:5, title:'ML Apprentice', minXP:1200, color:'#9b6dff' },
  { level:6, title:'Model Trainer', minXP:1800, color:'#f4b942' },
  { level:7, title:'Deep Learner', minXP:2500, color:'#f4b942' },
  { level:8, title:'AI Engineer', minXP:3500, color:'#ff5577' },
  { level:9, title:'ML Scientist', minXP:5000, color:'#ff5577' },
  { level:10, title:'🏆 Job Ready', minXP:7000, color:'#22d87a' },
];

const XP_PER_DAY = 20;
const XP_PER_COURSE = 50;
const XP_PER_CERT = 200;

const defaultState = {
  completedDays: {},
  completedCourses: {},
  certifications: {},
  startDate: null,
  seenBadges: {},
};

export { BADGES, LEVELS };

export function useTracker() {
  const [state, setState] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return { ...defaultState, ...JSON.parse(raw) };
    } catch {
      // Ignore parse errors
    }
    return { ...defaultState, startDate: new Date().toISOString().split('T')[0] };
  });

  const [newBadge, setNewBadge] = useState(null);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch { /* Ignore write errors */ }
  }, [state]);

  const totalDays = TOTAL_DAYS;
  const daysComplete = Object.values(state.completedDays).filter(Boolean).length;
  const totalCourses = TOTAL_COURSES;
  const coursesComplete = Object.values(state.completedCourses).filter(Boolean).length;
  const totalCerts = TOTAL_CERTS;
  const certsComplete = Object.values(state.certifications).filter(Boolean).length;

  const streak = (() => {
    let s = 0;
    for (let d = totalDays; d >= 1; d--) {
      if (state.completedDays[d]) s++;
      else if (s > 0) break;
    }
    return s;
  })();

  const derived = useMemo(() => ({ streak, daysComplete, coursesComplete, certsComplete }), [streak, daysComplete, coursesComplete, certsComplete]);

  // XP calculation
  const xp = (() => {
    let total = daysComplete * XP_PER_DAY;
    total += coursesComplete * XP_PER_COURSE;
    total += certsComplete * XP_PER_CERT;
    BADGES.forEach(b => { if (b.check(state, derived)) total += b.xp; });
    return total;
  })();

  const currentLevel = [...LEVELS].reverse().find(l => xp >= l.minXP) || LEVELS[0];
  const nextLevel = LEVELS.find(l => l.minXP > xp);
  const levelProgress = nextLevel ? ((xp - currentLevel.minXP) / (nextLevel.minXP - currentLevel.minXP)) * 100 : 100;

  const earnedBadges = BADGES.filter(b => b.check(state, derived));
  const lockedBadges = BADGES.filter(b => !b.check(state, derived));

  // Badge notification
  const checkNewBadges = useCallback((prevState) => {
    const prevDerived = {
      streak: (() => { let s=0; for(let d=TOTAL_DAYS;d>=1;d--){if(prevState.completedDays[d])s++;else if(s>0)break;} return s; })(),
      daysComplete: Object.values(prevState.completedDays).filter(Boolean).length,
      coursesComplete: Object.values(prevState.completedCourses).filter(Boolean).length,
      certsComplete: Object.values(prevState.certifications).filter(Boolean).length,
    };
    for (const b of BADGES) {
      if (b.check(state, derived) && !b.check(prevState, prevDerived) && !state.seenBadges[b.id]) {
        setNewBadge(b);
        setState(prev => ({...prev, seenBadges: {...prev.seenBadges, [b.id]: true}}));
        setTimeout(() => setNewBadge(null), 4000);
        break;
      }
    }
  }, [state, derived]);

  const toggleDay = useCallback((dayNum) => {
    setState(prev => {
      const next = { ...prev, completedDays: { ...prev.completedDays } };
      next.completedDays[dayNum] = !next.completedDays[dayNum];
      setTimeout(() => checkNewBadges(prev), 100);
      return next;
    });
  }, [checkNewBadges]);

  const toggleCourse = useCallback((courseId) => {
    setState(prev => {
      const next = { ...prev, completedCourses: { ...prev.completedCourses } };
      next.completedCourses[courseId] = !next.completedCourses[courseId];
      setTimeout(() => checkNewBadges(prev), 100);
      return next;
    });
  }, [checkNewBadges]);

  const toggleCert = useCallback((certId) => {
    setState(prev => {
      const next = { ...prev, certifications: { ...prev.certifications } };
      next.certifications[certId] = !next.certifications[certId];
      setTimeout(() => checkNewBadges(prev), 100);
      return next;
    });
  }, [checkNewBadges]);

  const toggleWeek = useCallback((weekId) => {
    setState(prev => {
      const week = WEEKS.find(w => w.id === weekId);
      if (!week) return prev;
      const allDone = week.days.every(d => prev.completedDays[d.day]);
      const next = { ...prev, completedDays: { ...prev.completedDays } };
      week.days.forEach(d => { next.completedDays[d.day] = !allDone; });
      setTimeout(() => checkNewBadges(prev), 100);
      return next;
    });
  }, [checkNewBadges]);

  const resetAll = useCallback(() => {
    setState({ ...defaultState, startDate: new Date().toISOString().split('T')[0] });
  }, []);

  const weekProgress = (weekId) => {
    const week = WEEKS.find(w => w.id === weekId);
    if (!week) return 0;
    const done = week.days.filter(d => state.completedDays[d.day]).length;
    return Math.round((done / week.days.length) * 100);
  };

  const isCertUnlocked = (certId) => {
    const cert = CERTIFICATIONS.find(c => c.id === certId);
    if (!cert) return false;
    return daysComplete >= cert.reqDays;
  };

  const nextDay = (() => {
    for (let d = 1; d <= totalDays; d++) {
      if (!state.completedDays[d]) return d;
    }
    return null;
  })();

  // Motivational messages
  const motivation = (() => {
    if (daysComplete === 0) return "Ready to start your AI/ML journey? 🚀 Click the circle next to Day 1!";
    if (daysComplete < 7) return "Great start! Keep building daily habits. Every day counts! 💪";
    if (daysComplete < 28) return "Month 1 — building the mathematical bedrock. Foundations matter! 🧱";
    if (daysComplete < 56) return "Month 2 — Statistics & EDA. You're thinking like a data scientist! 📊";
    if (daysComplete < 84) return "Month 3 — Machine Learning. The algorithms are clicking! 🤖";
    if (daysComplete < 112) return "Month 4 — Deep Learning & PyTorch. Neural nets are your new superpower! 🧠";
    if (daysComplete < 140) return "Month 5 — GenAI & LangChain. Building the cool stuff! ⚙️";
    if (daysComplete < 168) return "Month 6 — MLOps & Job Hunt. The final sprint to the finish line! 🏁";
    return "🎉 You've completed the entire 6-month challenge! You are JOB READY! 🎉";
  })();

  return {
    state, toggleDay, toggleCourse, toggleCert, toggleWeek, resetAll,
    daysComplete, totalDays, coursesComplete, totalCourses,
    certsComplete, totalCerts, weekProgress, isCertUnlocked, streak, nextDay,
    xp, currentLevel, nextLevel, levelProgress, earnedBadges, lockedBadges,
    newBadge, setNewBadge, motivation,
  };
}
