const { sql } = require('@vercel/postgres');

(async function (){
await sql`DROP TABLE IF EXISTS users`
await sql`CREATE TABLE users(user_id serial PRIMARY KEY, nickname text, name text, picture text, email text UNIQUE)`;

await sql`DROP TABLE IF EXISTS posts`
await sql`CREATE TABLE posts(post_id serial PRIMARY KEY, content text, user_id INT)`;


await sql`INSERT INTO posts(content) VALUES ('la mare que va'),('adios'),('que tal')`
})()