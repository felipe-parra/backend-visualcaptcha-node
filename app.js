const express = require("express");

const session = require('express-session')


const { visualCaptchaRoutes } = require("./routes/visualCaptcha");

const app = express();

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))
  
app.use("/", visualCaptchaRoutes);

app.listen(5050, () => {
  console.log("Listening");
});
