import { useRef, useState } from 'react';

export default function Settings() {
  const fileInputRef = useRef(null);
  const [msg, setMsg] = useState('');

  const handleExport = () => {
    const data = localStorage.getItem('datacamp-tracker');
    if (!data) {
      setMsg('No progress data found to export.');
      return;
    }
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `datacamp-tracker-save-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setMsg('Progress exported successfully!');
  };

  const handleImport = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target.result);
        if (json && typeof json === 'object' && 'completedDays' in json) {
          localStorage.setItem('datacamp-tracker', JSON.stringify(json));
          setMsg('Progress imported successfully! Reloading...');
          setTimeout(() => window.location.reload(), 1500);
        } else {
          setMsg('Error: Invalid save file format.');
        }
      } catch (err) {
        setMsg('Error reading file. Is it a valid JSON?');
      }
    };
    reader.readAsText(file);
    e.target.value = null; // reset
  };

  return (
    <section className="fade-in">
      <h2 className="section-head">// Data Management & Settings</h2>
      <div className="tip-box"><span className="tip-icon">💾</span><div><strong>Never lose your progress!</strong> Export your data to save a backup, or import a previous backup if you switch devices or clear your browser cache.</div></div>
      
      <div className="cards-grid">
        <div className="info-card">
          <div style={{position:'absolute',top:0,left:0,right:0,height:3,background:'var(--green)'}} />
          <div className="card-title">📤 Export Progress</div>
          <div className="card-desc">Download your current progress as a JSON file. Store this file safely as a backup.</div>
          <button className="btn" style={{marginTop:12}} onClick={handleExport}>Download Backup</button>
        </div>

        <div className="info-card">
          <div style={{position:'absolute',top:0,left:0,right:0,height:3,background:'var(--accent)'}} />
          <div className="card-title">📥 Import Progress</div>
          <div className="card-desc">Upload a previously exported JSON backup to restore your progress on this device.</div>
          <input type="file" accept=".json" style={{display:'none'}} ref={fileInputRef} onChange={handleImport} />
          <button className="btn" style={{marginTop:12}} onClick={() => fileInputRef.current?.click()}>Upload Backup</button>
        </div>
      </div>
      
      {msg && <div style={{marginTop:20, padding:12, background:'var(--bg2)', borderRadius:8, color:'var(--accent)', fontFamily:'JetBrains Mono', fontSize:12, textAlign:'center'}}>{msg}</div>}
    </section>
  );
}
