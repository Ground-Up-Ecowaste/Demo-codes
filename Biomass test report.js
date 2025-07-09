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