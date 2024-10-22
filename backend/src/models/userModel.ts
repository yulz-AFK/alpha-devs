// src/models/userModel.ts
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

const database = open({
  filename: './database.sqlite',
  driver: sqlite3.Database,
});

export async function createUser(name: string, email: string, password: string) {
  const db = await database;
  await db.run('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password]);
}

export async function findUserByEmail(email: string) {
  const db = await database;
  return db.get('SELECT * FROM users WHERE email = ?', [email]);
}
