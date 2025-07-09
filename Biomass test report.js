//add mongoose

const BiomassTestReportSchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    default: Date.now
  },
  sampleCollectionDate: {
    type: Date,
    required: true
  },
  sampleType: {
    type: String,
    required: true
  },
  sampleSize: {
    type: Number, // in grams or kilograms — clarify in frontend
    required: true
  },
  depotCode: {
    type: String,
    required: true
  },
  additionalRemark: {
    type: String,
    default: ""
  },
  sampleNumberFTD: {
    type: String,
    required: true,
    unique: true
  },
  sampleId: {
    type: String,
    required: true,
    unique: true
  },
  carbonPercent: {
    type: Number, // C%
    required: true
  },
  moisturePercent: {
    type: Number, // Moisture%
    required: true
  },
  gcv: {
    type: Number, // Gross Calorific Value
    required: true
  },
  heavyMetals: {
    type: String, // or Array/Object if multiple values with details
    required: false
  }
});