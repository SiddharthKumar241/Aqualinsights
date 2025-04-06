const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://.bqlr6.mongodb.net/waterDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("✅ MongoDB Connected");
    insertBackupData(); 
}).catch(err => console.error("❌ MongoDB Connection Error:", err));

const waterSchema = new mongoose.Schema({
    location: String,
    pH: Number,
    turbidity: Number,
    temperature: Number
});

const WaterData = mongoose.model("WaterData", waterSchema);

const issueSchema = new mongoose.Schema({
    location: String,
    issue: String,
    reportedAt: { type: Date, default: Date.now }
});

const Issue = mongoose.model("Issue", issueSchema);

async function insertBackupData() {
    try {
        const count = await WaterData.countDocuments();
        if (count === 0) {
            const sampleData = [
                { location: "Mumbai", pH: 7.2, turbidity: 3.1, temperature: 28 },
                { location: "New Delhi", pH: 6.8, turbidity: 2.8, temperature: 30 },
                { location: "Bangalore", pH: 7.5, turbidity: 3.0, temperature: 26 },
                { location: "Chennai", pH: 7.1, turbidity: 2.5, temperature: 29 },
                { location: "Kolkata", pH: 6.9, turbidity: 3.3, temperature: 31 }
            ];
            await WaterData.insertMany(sampleData);
            console.log("✅ Backup Data Inserted");
        }
    } catch (error) {
        console.error("❌ Error inserting backup data:", error);
    }
}

module.exports = { WaterData, Issue };
