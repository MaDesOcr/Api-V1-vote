const express = require('express');
const { initDb } = require('./models/db');
const membersRoutes = require('./routes/members');
const cors = require('cors');

async function startServer() {
  await initDb();


  const app = express();
  app.use(express.json());
  app.use(cors());
  // API prefix
  app.use('/api/v1/members', membersRoutes);
  app.get('/api/v1/health', (req, res) => res.json({ status: 'ok' }));

  const PORT = process.env.API_PORT || 3000;
  app.listen(PORT, () => console.log(`API v1 listening on port ${PORT}`));
}

startServer().catch(err => {
  console.error('Failed to start server:', err);
  process.exit(1);
});

