var express = require("express");
var app = express();
const cors = require("cors");
const bodyParser = require("body-parser");


const mailer = require("@sendgrid/mail");
let data = [
  "sushil.saffrontech@gmail.com",
  "rohitbansal11110000@gmail.com",
  "rohitbansal11118888@gmail.com",
  "saffron.amit@gmail.com",
  "saffron.dupanshu@gmail.com",
  "shaandaar.karamjeet@gmail.com",
  "shaandaar.hardik@gmail.com",
  "shaandaar.simran@gmail.com",
  "shaandaar.sourabh@gmail.com",
  "shaandaar.vibhanshu@gmail.com",
  "shaandaar.pratigya@gmail.com",
  "shaandaar.hiteshi@gmail.com",
  "shaandaar.gurjot@gmail.com",
  "shaandar.komal@gmail.com",
  "bhardwajsaurav885@gmail.com",
];
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.get("/", function (req, res) {
  mailer.setApiKey(
    "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"
  );

  // Setting configurations
  const msg = {
    to: data,
    from: "rohitbansal.saffron@gmail.com",
    subject: "Message sent for demo purpose",
    html: `<h1>New message from Geeksforgeeks</h1> 
           <p>Some demo text from geeksforgeeks.</p>`,
  };

  // Sending mail
  mailer.send(msg, function (err, json) {
    if (err) {
      console.log(err);

      // Writing error message
      res.send("Can't send message sent");
    } else {
      // Writing success message
      res.send("Message sent");
    }
  });
});

app.listen(2000, function () {
  console.log("Example app listening on port 2000!");
});
