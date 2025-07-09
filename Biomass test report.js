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