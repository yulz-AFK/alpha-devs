// src/database/db.ts
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const database = open({
  filename: './database.sqlite',
  driver: sqlite3.Database,
});

export async function initializeDatabase() {
  const db = await database;
  await db.exec(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
  )`);
  console.log("Database initialized.");
}
