//add mongoose

const BiomassInwardSchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    default: Date.now
  },