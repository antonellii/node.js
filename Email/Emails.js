var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'josegustavocostaantonelli@gmail.com',
    pass: 'ebsnmgykuikufmdc'
  }
});

var mailOptions = {
  from: 'josegustavocostaantonelli@gmail.com@gmail.com',
  to: 'joseeduardopereiraantoneli@yahoo.com',
  subject: 'S',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 