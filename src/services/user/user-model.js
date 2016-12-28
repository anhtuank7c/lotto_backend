'use strict';

// user-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  facebookId: { type: String },
  facebook: { type: Schema.Types.Mixed },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },

  fullName: { type: String },
  birthday: { type: Date },
  phone: { type: String, minLength: 10, maxLength: 15 },
  registered: { type: Date, 'default': Date.now },
  deactivated: { type: Date },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;