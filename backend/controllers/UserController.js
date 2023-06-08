const User = require('../models/User');

exports.createUser = async (req, res) => {
  const { email } = req.body;

  try {
    const user = new User({ email });
    await user.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
