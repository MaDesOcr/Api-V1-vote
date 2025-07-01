const { getAllMembers, voteMember } = require('../models/member');

async function listMembers(req, res) {
  try {
    const members = await getAllMembers();
    res.json({ data: members });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function vote(req, res) {
  const id = parseInt(req.params.id, 10);
  try {
    await voteMember(id);
    res.json({ message: 'Vote recorded' });
  } catch (err) {
    console.error(err);
    const status = err.status || 500;
    res.status(status).json({ error: err.message || 'Internal error' });
  }
}

module.exports = { listMembers, vote };
