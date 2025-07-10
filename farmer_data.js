// models/Farmer.js

const mongoose = require('mongoose');

const FarmerSchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    required: true,
  },
  farmerName: {
    type: String,
    required: true,
  },
  contactInformation: {
    phone: { type: String },
    email: { type: String },
    address: { type: String }
  },
  farmingPractices: {
    type: String, 
    required: false
  },
  fertiliserUsage: {
    type: String, 
    required: false
  },
  previousResidueManagement: {
    type: String,
    required: false
  },
  plotSize: {
    type: Number, // in acres or hectares INTEGER
    required: true
  },
  averageYield: {
    type: Number, // units like tons per hectare maybe float sometimes
    required: false
  },
  farmerId: {
    type: String, //we will be generating
    required: true,
    unique: true
  }
}, { timestamps: true }); // This auto-generates createdAt & updatedAt

module.exports = mongoose.model('Farmer', FarmerSchema);
