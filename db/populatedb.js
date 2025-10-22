#! /usr/bin/env node

const { Client } = require("pg");
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
username VARCHAR(255),
message VARCHAR(255),
date VARCHAR(255)
);


INSERT INTO messages (username, message, date) 
VALUES
  ('Danilo', 'i love to be here hehe', 'Wed Oct 22 2025');
`;

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}:5432/${PGDATABASE}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
