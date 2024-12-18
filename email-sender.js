var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: 'smtp.exemple.com',
    port: 465,
    secure: false,
  auth: {
    user: 'nesrine.rabaaoui@gmail.com',
    pass: 'R@baaoui1953$@**'
  }
});

var mailOptions = {
  from: 'nesrine.rabaaoui@gmail.com',
  to: 'dabbekramzi1994@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});