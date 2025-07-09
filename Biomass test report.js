//add mongoose

const BiomassTestReportSchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    default: Date.now
  },