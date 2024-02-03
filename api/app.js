const express = require('express');
const app = express();
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'db',
  database: 'notesdb',
  password: 'secret',
  port: 5432,
});

app.get('/api', async (req, res) => {
  const result = await pool.query('SELECT $1::text as message', ['Hello world from the server!']);
  res.send(result.rows[0].message);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

