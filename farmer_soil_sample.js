//as of we are not aware of exact SI unit of every Data points so  that can not lead to excacr data validation and assign 
//true false as required also add data types to each parameter

//add mongoose
const mongoose=require('mongoose')
const FarmerSoilSampleSchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    default: Date.now   //calling function to take current time   //change to created at
  },
  collectedOn{
    type: Date
  }, // i will add
  farmerName: {
    type: String,
    required: true
  },
  contactInformation: {
    type: String,
    required: true
  },
  farmingPractices: {
    type: String,
    required: true
  },
  fertiliserUsage: {
    type: String,
    required: true
  },
   previousResidueManagement: {
    type: String,
    required: true
  },
  plotSize: {
    type: Number, // in acres or hectares or any SI unit we need
    required: true
  },
  averageYield: {
    type: Number, // i am using number here but can be float also
    required: true
  },
  farmerId: {
    type: String, //AS OF NOW FROM KIRAN WE WILL GENERATE THIS 
    required: true,
    unique: true
  },
  sampleId: {
    type: String,  //AS OF NOW FROM KIRAN WE WILL GENERATE THIS
    required: true,
    unique: true
  },
  soc: {
    type: Number, // Soil Organic Carbon
    required: true
  },
  heavyMetals: {
    type: String, // or Array if multiple values
    required: false
  },
  pH: {
    type: Number,
    required: true
  },
  bulkDensity: {
    type: Number,
    required: true
  },
  soilTexture: {
    type: String,
    required: true
  },
  ec: {
    type: Number, // Electrical Conductivity
    required: true
  },
  totalDissolvedSolvents: {
    type: Number,
    required: true
  },
  npk: {
    type: String,  // find about format
    required: true
  },
  yearMapping: {
    type: Number, // e.g., 2024, 2025
    required: true
  }
},{ timestamps: true });

module.exports = mongoose.model('FarmerSoilSample', FarmerSoilSampleSchema);