import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import http from 'http';
import { Server } from 'socket.io';
import authRoutes from './routes/auth.js';
import positionRoutes from './routes/positions.js';
import VehicleSimulator from './utils/VehicleSimulator.js';

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/positions', positionRoutes);

// Connexion à MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Simulation des véhicules
const simulator = new VehicleSimulator();
simulator.on('position', (data) => {
  io.emit('position', data);
});
simulator.on('alert', (data) => {
  io.emit('alert', data);
});
simulator.start();

// Lancement du serveur
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
