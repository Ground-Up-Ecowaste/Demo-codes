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

//Sample data added

{
  "_id": "667024a9f38a12a456bc123d",
  "biomassId": "b8d4d6a2-4c1b-490b-bcc9-21a0a4f32a67",
  "timestamp": "2025-06-23T10:42:00.000Z",
  "inwardDateOfCollection": "2025-06-21T00:00:00.000Z",
  "inwardInTime": "10:15",
  "vehicleNumber": "UP16 AB 1234",
  "invoiceSerialNumber": "INV-20250621-045",
  "outTimeAtFacility": "13:45",
  "depotNumber": "D05",
  "netWeight": 920.5,
  "tareWeight": 120.5,
  "grossWeight": 1041.0,
  "createdAt": "2025-06-23T10:42:00.000Z",
  "updatedAt": "2025-06-23T10:42:00.000Z",
  "__v": 0
}
