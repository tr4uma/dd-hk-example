const express = require('express');
const router = express.Router();
const { Client } = require('pg')

const client = new Client({
  connectionString: process.env.DATABASE_URL
})



/* GET users listing. */
router.get('/', async (req, res, next) => {
  try {
    await client.connect()
    const result = await client.query('SELECT * from salesforce.case')
    client.end()
    res.send(result.rows);
  } catch (err) {
    console.log(err)
    console.log('wa')
    res.sendStatus(500)
  }
});

module.exports = router;
