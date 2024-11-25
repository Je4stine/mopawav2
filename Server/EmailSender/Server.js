require("dotenv").config();

const express = require("express");
const cors = require("cors");
const PORT = 8081;
const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

const visitorFile = path.join(__dirname, "visitorCount.json");

if (!fs.existsSync(visitorFile)) {
  fs.writeFileSync(visitorFile, JSON.stringify({ count: 0 }));
}

app.get("/visitors", (req, res) => {
  fs.readFile(visitorFile, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Failed to read visitor count." });
    }

    const visitorData = JSON.parse(data);
    visitorData.count += 1;

    fs.writeFile(visitorFile, JSON.stringify(visitorData), (err) => {
      if (err) {
        return res
          .status(500)
          .json({ error: "Failed to update visitor count." });
      }

      res.json({ count: visitorData.count });
    });
  });
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mopawake@gmail.com",
    pass: "lebe npvb chtr egux",
  },
});

const sendRequest = (name, message, email, phone, country) => {
  const mailOptions = {
    from: "mopawake@gmail.com",
    to: "info@mopawa.co.ke",
    subject: "👋 Customer Inquiry🚀 - From website mail sender",
    text: `Hello there, a potential client ${name} from ${country} has sent a message: \n "${message}" \n \n The contact details are phone: ${phone} and Email: ${email}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("❌ Error:", error.message);
    } else {
      console.log("✅ Email sent:", info.response);
    }
  });
};

app.post("/sendRequest", (req, res) => {
  const { name, message, email, phone, country } = req.body;
  sendRequest(name, message, email, phone, country);
  res.send("Email request sent.");
});

app.get("/", (req, res) => {
  res.send("App running sucessfully");
});

app.listen(PORT, () => {
  console.log(`App running in ${PORT}`);
});
