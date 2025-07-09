//as of we are not aware of exact SI unit of every Data points so  that can not lead to excacr data validation and assign 
//true false as required also add data types to each parameter


const FarmerSoilSampleSchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    default: Date.now
  },
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