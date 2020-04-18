const express = require('express');
const router = express.Router();
const { Client } = require('pg')






/* GET users listing. */
router.get('/', async (req, res, next) => {
  try {
    const client = new Client({
      connectionString: process.env.DATABASE_URL
    })
    await client.connect()
    let queryString = 'SELECT * from salesforce.case'
    if(req.query !== undefined && req.query.search !== undefined){
      queryString += ` WHERE title like '%${req.query.search}%'`
    }
    const result = await client.query(queryString)
    res.send(result.rows);
    client.end()
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
});

module.exports = router;
