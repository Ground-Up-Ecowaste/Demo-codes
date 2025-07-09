//add mongoose

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
});
module.exports = mongoose.model('BiomassTestReport', BiomassTestReportSchema);
