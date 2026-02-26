**🌤 Delhi Weather Checker**

A simple React-based weather data viewer that allows users to search historical Delhi weather records by date and optional time using a CSV dataset.

**🚀 Features**

📅 Search weather by date**

⏰ Optional time-based filtering

📊 Displays temperature, humidity, pressure, and condition

🧹 Clear filters button

⚡ Fast CSV parsing using PapaParse

📱 Responsive table UI

**🛠 Tech Stack**

--> React (Hooks)

--> PapaParse – CSV parsing

--> CSS – Styling

--> JavaScript (ES6)

**📂 Project Structure**
project-root/
│
├── public/
│ └── testset.csv
│
├── src/
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
│
└── package.json

**📥 Installation & Setup**

1️⃣ Clone the repository
git clone https://github.com/your-username/delhi-weather-checker.git
cd delhi-weather-checker
2️⃣ Install dependencies
npm install
3️⃣ Install PapaParse (if not installed)
npm install papaparse
4️⃣ Run the project
npm run dev

App will run at:

http://localhost:5173

**🔍 How It Works**

The app fetches the CSV file from the public folder

PapaParse converts CSV → JSON

User selects date/time

Data is filtered using datetime_utc

Matching records are displayed in a table

**📝 Input Format**

The CSV must contain columns like:

datetime_utc

_conds

_tempm

_hum

_pressurem

**Example datetime format:**

20130101-00:00

**Output:**
<img width="1900" height="1114" alt="Screenshot 2026-02-26 100722" src="https://github.com/user-attachments/assets/9d6f93f5-cadc-4585-ba49-307137802578" />

<img width="1903" height="1107" alt="image" src="https://github.com/user-attachments/assets/77dce3db-2f27-4fbb-bd4c-61545cc5e61d" />
