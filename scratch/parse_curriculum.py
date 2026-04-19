import re
import json

lines = open('pdf_content.txt').read().splitlines()

weeks = []
current_week = None
current_month = 0

for line in lines:
    line = line.strip()
    if not line:
        continue
    
    if line.startswith("🧮 PART I"):
        current_month = 1
    elif line.startswith("🤖 PART II"):
        current_month = 2
    elif line.startswith("🧠 PART III"):
        current_month = 3
    elif line.startswith("🚀 PART IV"):
        current_month = 4
        
    week_match = re.match(r'^Week (\d+):\s*(.*)', line)
    if week_match:
        w_num = int(week_match.group(1))
        title = week_match.group(2)
        current_week = {"id": f"w{w_num}", "title": title, "month": current_month, "days": []}
        weeks.append(current_week)
    
    day_match = re.match(r'^(?:🏆 |🎬 |🏁 )?Day (\d+)\s*(.*)', line)
    if day_match and current_week:
        d_num = int(day_match.group(1))
        desc = day_match.group(2)
        
        # Calculate global day number
        w_num = int(current_week['id'][1:])
        global_day = (w_num - 1) * 7 + d_num
        
        current_week["days"].append({
            "day": global_day,
            "title": f"Day {d_num}",
            "desc": desc,
            "theory": "Focus on implementation and deep understanding."
        })

print(json.dumps(weeks, indent=2))
