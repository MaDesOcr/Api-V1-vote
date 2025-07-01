const { getDb } = require('./db');

async function getAllMembers() {
  const db = getDb();
  return db.all(
    'SELECT id, first_name, last_name, birth_date, has_voted FROM members ORDER BY last_name, first_name'
  );
}

async function voteMember(id) {
  const db = getDb();
  const member = await db.get('SELECT has_voted FROM members WHERE id = ?', id);
  if (!member) {
    const err = new Error('Member not found');
    err.status = 404;
    throw err;
  }
  if (member.has_voted) {
    const err = new Error('Member already voted');
    err.status = 400;
    throw err;
  }
  await db.run(
    'UPDATE members SET has_voted = 1, voted_at = CURRENT_TIMESTAMP WHERE id = ?', id
  );
}

module.exports = { getAllMembers, voteMember };
