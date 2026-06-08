const express = require("express");
const cors = require("cors");
const db = require("./db");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.get("/projects", (req, res) => {
  db.query("SELECT * FROM projects", (err, result) => {
    if (err) {
      return res.send(err);
    }

    res.json(result);
  });
});

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  db.query(
    "INSERT INTO contacts(name,email,message) VALUES(?,?,?)",
    [name, email, message],
    async (err) => {
      if (err) {
        return res.status(500).json(err);
      }

      try {
        await transporter.sendMail({
          from: "yourgmail@gmail.com",
          to: "yourgmail@gmail.com",
          subject: "New Portfolio Contact",
          html: `
                        <h2>New Contact Message</h2>

                        <p><b>Name:</b> ${name}</p>

                        <p><b>Email:</b> ${email}</p>

                        <p><b>Message:</b></p>

                        <p>${message}</p>
                    `,
        });

        res.json({
          success: true,
          message: "Message Sent Successfully",
        });
      } catch (mailError) {
        res.status(500).json({
          error: mailError.message,
        });
      }
    },
  );
});

app.listen(5000, () => {
  console.log("Server Running");
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "shubiisha23@gmail.com",
    pass: "jayani30",
  },
});
