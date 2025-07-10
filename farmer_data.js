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


//sample data
//created and updated at auto by mongoose via timestamp:true
//farmer id is unique

{
  "_id": "6670123456abcdef12345678",
  "timestamp": "2025-06-23T09:30:00.000Z",
  "farmerName": "Suresh Yadav",
  "contactInformation": {
    "phone": "9876543210",
    "email": "suresh.yadav@example.com",
    "address": "Village Rampur, Block X, District Y, Uttar Pradesh"
  },
  "farmingPractices": "Mixed cropping and reduced tillage",
  "fertiliserUsage": "NPK-based with occasional organic compost",
  "previousResidueManagement": "Ploughing residue back into soil",
  "plotSize": 4,  // hectares
  "averageYield": 2.8,  // tons/hectare
  "farmerId": "FARM-UP-2025-0023",
  "createdAt": "2025-06-23T09:30:00.000Z",
  "updatedAt": "2025-06-23T09:30:00.000Z",
  "__v": 0
}
