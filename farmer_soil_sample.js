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


//SAMPLE DATA

//timestamp is auto-generated when the record is created (alias of createdAt).
//_id is the MongoDB object id
//_v is Mongoose internal version key
{
  "_id": "666f1c1a9f38a00123abcd45",
  "timestamp": "2025-06-23T09:23:00.000Z",
  "collectedOn": "2025-06-21T00:00:00.000Z",
  "farmerName": "Ramesh Kumar",
  "contactInformation": "9876543210",
  "farmingPractices": "Conventional farming with crop rotation",
  "fertiliserUsage": "NPK 10:26:26 used twice a year",
  "previousResidueManagement": "Burning crop residue",
  "plotSize": 2.5,
  "averageYield": 3.2,
  "farmerId": "FARM123456",
  "sampleId": "SAMPLE20250621A",
  "soc": 1.87,
  "heavyMetals": "Below detectable limit",
  "pH": 6.5,
  "bulkDensity": 1.3,
  "soilTexture": "Loamy",
  "ec": 0.7,
  "totalDissolvedSolvents": 1.1,
  "npk": "12-32-16",
  "yearMapping": 2025,
  "createdAt": "2025-06-23T09:23:00.000Z",
  "updatedAt": "2025-06-23T09:23:00.000Z",
  "__v": 0
}
