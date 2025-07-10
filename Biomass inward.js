//add mongoose

const mongoose=require('mongoose')


const BiomassInwardSchema = new mongoose.Schema({
  biomassId//add auto generate
  timestamp: {
    type: Date,
    default: Date.now // function
  },
  inwardDateOfCollection: {
    type: Date,
    required: true //will look for some date fucntion
  },
  inwardInTime: {
    type: String, // Format: "HH:mm" 
    required: true
  },
  vehicleNumber: {
    type: String,
    required: true
  },
  invoiceSerialNumber: { // here time and data both
    type: String,
    required: true,
    unique: true
  },
  outTimeAtFacility: {
    type: String, // Format: "HH:mm" both time and date
    required: true
  },
  depotNumber: {
    type: char,
    required: true
  },
  netWeight: {
    type: Number, // in kg or tons (confirm) have to use typecasting to convert float to number 23.00 to 23.
    required: true
  },
  tareWeight: {
    type: Number,
    required: true
  },
  grossWeight: {
    type: Number,
    required: true
  }
},{timestamp: true});
module.exports = mongoose.model('BiomassInward', BiomassInwardSchema);
// according to kiran sheet vehicle sheet was repeating so putting here only one time . we can also validat time input
//on frontend using Moment.js and day.js

