import mongoose from 'mongoose';

const PositionSchema = new mongoose.Schema({
  vehicleId: { type: String, required: true },
  position: {
    lat: { type: Number, required: true },
    lon: { type: Number, required: true },
  },
  timestamp: { type: Date, default: Date.now },
}, { timestamps: true });

export default mongoose.model('Position', PositionSchema);
