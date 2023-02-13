const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.post("/checkPassword", (req, res) => {
  const password = req.body.password;

  if (!password) {
    return res.status(400).send({
      success: false,
      message: "Password is required.",
    });
  }

  let score = 0;

  // Check password length
  if (password.length >= 8) {
    score++;
  }

  // Check if password contains at least one lowercase letter
  if (/[a-z]/.test(password)) {
    score++;
  }

  // Check if password contains at least one uppercase letter
  if (/[A-Z]/.test(password)) {
    score++;
  }

  // Check if password contains at least one number
  if (/[0-9]/.test(password)) {
    score++;
  }

  // Check if password contains at least one special character
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    score++;
  }

  let message;
  if (score <= 2) {
    message = "Password is weak";
  } else if (score <= 4) {
    message = "Password is moderate";
  } else {
    message = "Password is strong";
  }

  return res.status(200).send({
    success: true,
    message,
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Password checker API is running on port ${port}`);
});
