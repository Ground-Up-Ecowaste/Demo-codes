//add mongoose

const BiomassInwardSchema = new mongoose.Schema({
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
    type: Number, // in kg or tons (confirm)
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
});