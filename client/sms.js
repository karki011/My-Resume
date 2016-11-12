
var client = require('twilio')(
  process.env.TWILIO_AC80cba73db000f40f30c024907ee75ca0,
  process.env.TWILIO_9b0ab5e3c1d668cb1979ce153438d17d
);

client.messages.create({
  from: process.env.TWILIO_2563611185,
  to: process.env.CELL_2564266622,
  body: "You just sent an SMS from Node.js using Twilio!"
}, function(err, message) {
  if(err) {
    console.error(err.message);
  }
});