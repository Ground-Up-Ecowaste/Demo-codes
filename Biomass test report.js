//add mongoose
const mongoose=require('mongoose')

const BiomassTestReportSchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    default: Date.now
  },
  sampleCollectionDate: {
    type: Date,
    required: true //do not use date.now
  },
  sampleType: {
    type: String,
    required: true //drop down
  },
  sampleSize: {
    type: Number, 
    required: true
  },
  depotCode: {
    type: char, 
    required: true
  },
  additionalRemark: {
    type: String,
    default: ""  //makes sense
  },
  sampleNumberFTD: {
    type: String,
    required: true, //maybe integer value
    unique: true
  },
  sampleId: {
    type: String, //it is made up of depot code
    required: true,
    unique: true
  },
  carbonPercent: {
    type: Number, // C% abbrevation
    required: true
  },
  moisturePercent: {
    type: Number, // Moisture% abbrevation
    required: true
  },
  gcv: {
    type: Number, // Gross Calorific Value
    required: true
  },
  heavyMetals: {
    type: String, 
    required: false
  }
},{timestamp:true});
module.exports = mongoose.model('BiomassTestReport', BiomassTestReportSchema);


//Sample data added

{
  "_id": "6670312312cabc001234abcd",
  "timestamp": "2025-06-23T11:30:00.000Z",
  "sampleCollectionDate": "2025-06-20T00:00:00.000Z",
  "sampleType": "Dry Biomass",
  "sampleSize": 500,
  "depotCode": "D12",
  "additionalRemark": "Sample looks consistent with prior batch",
  "sampleNumberFTD": "FTD-20250620-015",
  "sampleId": "D12-FTD-015",
  "carbonPercent": 38.4,
  "moisturePercent": 7.9,
  "gcv": 4260,
  "heavyMetals": "Not detected",
  "createdAt": "2025-06-23T11:30:00.000Z",
  "updatedAt": "2025-06-23T11:30:00.000Z",
  "__v": 0
}
