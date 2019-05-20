const User = require('../models/user.model');

//Simple version, without validation or sanitation
// exports.login = function (req, res) {
//     res.send('Greetings from the Login controller!');
// };

exports.login = async function (req, res) {
  console.log('Login', req.body.firstName); 
  const existingUser = await User.find({ email: req.body.email });
  if(existingUser.length > 0) {
    res.send({ status: 200, response: existingUser[0]});
  } else {
    let userProps = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      imageUrl: req.body.imageUrl,
      googleId: req.body.googleId,
      lastLoginAt: new Date()
    };
    let user = new User(userProps);

    user.save(function (err) {
      if (err) {
          return next(err);
      }
      res.send({ status: 200, response: { ...userProps, firstTimeLogin: true }})
    })
  }
};