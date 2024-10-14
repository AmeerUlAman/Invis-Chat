import { Client } from 'pg';

export async function POST(req) {
  const { username,email,password,phone } = await req.json(); // Use req.json() to parse the incoming JSON body

  const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "invis_users",
    password: "3258",
    port: 5432,
  });

  try {
    await client.connect();
    console.log("SUCCESS");

    const query = {
      text: "INSERT INTO auth_table(username,email,password,phone) VALUES ($1,$2,$3,$4) RETURNING *",
      values: [ username,email,password,phone],
    };

    const result = await client.query(query);
    console.log(result.rows[0]);

    // Return the successful response directly
    return new Response(JSON.stringify({ success: true, data: result.rows[0] }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (err) {
    console.error("ERROR", err.stack);
    return new Response(JSON.stringify({ success: false, error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  } finally {
    // Ensure the client connection is closed
    await client.end();
  }
}
