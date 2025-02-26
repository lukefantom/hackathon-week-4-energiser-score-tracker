const { query } = require("../index");

/////////////////////// TOTAL

const sqlStatementTotal = `
SELECT *, mind + gartic + scavenger_hunt + scattergories + movie_game AS total
FROM energiser_scoresheet
ORDER BY total desc
`;


async function getTotal() {
  const result = await query(sqlStatementTotal);
  console.log(result.rows);
  return result.rows;
}

/////////////////////// MIND

const sqlStatementMind = `
SELECT id, name, mind
FROM energiser_scoresheet
ORDER BY mind desc
`;

async function getMind() {
  const result = await query(sqlStatementMind);
  console.log(result.rows);
  return result.rows;
}

const sqlStatement = `
    UPDATE energiser_scoresheet
    SET mind = 4, scattergories = 2, gartic = 8
    WHERE id = 5
    `;

async function updateTable() {
  const result = await query(sqlStatement);
  console.log(result);
}



module.exports = { getTotal, getMind };
