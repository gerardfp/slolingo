import { neon } from '@neondatabase/serverless';


async function getData() {

  // const sql = neon(process.env.DATABASE_URL);

  // const response = await sql`SELECT * FROM lessons`;

  // return response;

  return '{ "name": "Okey" } ';
}


export const GET = async function Page() {

  const data = await getData();

  return Response.json(data);
}