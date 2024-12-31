import { Client } from "pg";

export async function POST(req) {
  const { usermail, password } = await req.json();

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

    let query; // Declare the query variable

    if (usermail.includes("@")) {
      query = {
        text: "SELECT * FROM auth_table WHERE email = $1 AND password = $2",
        values: [usermail, password],
      };
    } else {
      query = {
        text: "SELECT * FROM auth_table WHERE username = $1 AND password = $2",
        values: [usermail, password],
      };
    }

    const result = await client.query(query);
    console.log(result.rows[0]);

    return new Response(
      JSON.stringify({ success: true, data: result.rows[0] }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.error("ERROR", err.stack);
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  } finally {
    await client.end();
  }
}
