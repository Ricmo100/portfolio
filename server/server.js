const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');

dotenv.config();
const app = express();

app.use(helmet());

console.log('✅ Starting server...');

// ✅ Logging middleware for request tracking
app.use((req, res, next) => {
    console.log(`📩 ${req.method} request received on ${req.url}`);
    next();
  });

// Middleware
app.use(cors({
    origin: [
      'http://localhost:3000',
      'https://myfolio-da439bn45-myfolio-portfolio.vercel.app',
      'https://myfolio.vercel.app', // Add any other custom domain if applicable
    ],
    methods: ['GET', 'POST', 'OPTIONS'],
    credentials: true,
}));

// ✅ Preflight request handler
app.options('*', cors());
  
app.use(express.json());

console.log('✅ Registering routes...');

app.get('/test', (req, res) => {
    res.send('✅ Test route works');
});  

// Routes
const contactRoutes = require('./routes/contactRoutes');
app.use('/api', contactRoutes); // 

// 404 Not Found Handler
app.use((req, res) => {
    res.status(404).json({ success: false, message: 'Route not found' });
});
  
app.use((err, req, res, next) => {
    console.error('🔥 Error:', err.stack);
    res.status(err.status || 500).json({ success: false, message: err.message || 'Server error' });
});

  // DB + Server
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log('✅ MongoDB connected');
  app.listen(process.env.PORT || 5050, () =>
    console.log(`🚀 Server running on port ${process.env.PORT || 5050}`)
  );
})
.catch(err => console.error('❌ MongoDB connection error:', err));