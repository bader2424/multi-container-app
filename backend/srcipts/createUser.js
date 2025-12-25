const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

mongoose.connect(process.env.MONGO_URI);

async function createUser() {
  const hashedPassword = await bcrypt.hash('admin123', 10);

  const user = new User({
    username: 'admin',
    password: hashedPassword,
  });

  await user.save();
  console.log('User created');
  process.exit();
}

createUser();
