const mongoose = require('mongoose');
const bcyrpt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isLoggedIn: {
    type: Boolean,
    default: false,
  },
  // You can add more fields e.g role, company, etc.
});

// Lets Hash the password before saving it to the database
userSchema.pre('save', async function (next) {
  try {
    const salt = await bcyrpt.genSalt(10);
    const hashedPassword = await bcyrpt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

//Compare the provided password with the stored hashed password
userSchema.methods.comparePassword = async function (password) {
  return bcyrpt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
