const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

// Set up end point for node mailer
const nodemailer = require("nodemailer");
let transporter;

app.post("/api/submit", async (req,res) => {
    console.log(req.body);
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    
    transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        service: "gmail",
        secure: true, // true for 465, false for other ports
        auth: {
            user: process.env.USERNAME, // generated ethereal user
            pass: process.env.PASSWORD, // generated ethereal password
         },
    })

    let info = await transporter.sendMail({
        from: "khoinguyen19971997@gmail.com",
        to: "khoinguyen19971997@gmail.com",
        subject: "Email from " + name + " and email address is " + email,
        text: message
    });

    return res.json({
        message: "Successful"
    })

});

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get("*", (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    });
}

app.listen(PORT, () => {
    console.log("connected");
})