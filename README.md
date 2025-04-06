# Aqualinsights
A real-time water quality monitoring and issue reporting platform powered by MongoDB and Node.js.

# 🌊 Aqualinsights

**Aqualinsights** is a real-time water quality monitoring and issue reporting platform powered by **MongoDB** and **Node.js**. It helps track environmental parameters like pH, turbidity, and temperature across different Indian cities, while also enabling users to report sanitation-related issues.

---

## 🚀 Features

- 📡 Real-time monitoring of water quality
- 📍 Location-based water data tracking
- 📝 Issue reporting for water and sanitation problems
- 💾 Automatic insertion of sample/backup data
- ☁️ MongoDB Atlas support

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Tools**: dotenv, mongoose

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/SiddharthKumar241/Aqualinsights.git
cd Aqualinsights

Sample Data
On first run, if the database is empty, the app auto-inserts sample water data:

Location	pH	Turbidity	Temperature (°C)
Mumbai	7.2	3.1	28
New Delhi	6.8	2.8	30
Bangalore	7.5	3.0	26
Chennai	7.1	2.5	29
Kolkata	6.9	3.3	31


 Project Structure
bash
Copy
Edit
Aqualinsights/
├── models/
│   └── water.js          # Mongoose schemas and models
├── app.js                # Application entry point
├── .env                  # Environment config (ignored)
├── package.json
└── README.md

Install Dependencies
bash
Copy
Edit
npm install

Configure Environment Variables
Create a .env file in the root directory:

ini
Copy
Edit
MONGODB_URI=your_mongodb_connection_string

Run the Application
bash
Copy
Edit
node app.js

Contributions are welcome! To contribute:

Fork the repository 🍴

Create your feature branch (git checkout -b feature-name)

Commit your changes (git commit -m 'Add new feature')

Push to the branch (git push origin feature-name)

Open a pull request ✅

📬 Contact
Developer: Siddharth Kumar
📧 Email: kumarsiddharth166@gmail.com
🔗 GitHub: @SiddharthKumar241
