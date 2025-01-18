import { Client } from "pg";

export async function POST(req) {
  const { username, password } = await req.json();

  const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "invis_users",
    password: "3258",
    port: 5432,
  });

  try {
    await client.connect();

    const query = username.includes("@")
      ? {
          text: "SELECT username FROM auth_table WHERE email = $1 AND password = $2",
          values: [username, password],
        }
      : {
          text: "SELECT username FROM auth_table WHERE username = $1 AND password = $2",
          values: [username, password],
        };

    const result = await client.query(query);

    if (result.rows.length === 0) {
      return new Response(
        JSON.stringify({ success: false, message: "Invalid username or password" }),
        {
          status: 401,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const user = result.rows[0].username; // Extract username
    return new Response(
      JSON.stringify({ success: true, username: user }), // Include username in response
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.error("ERROR", err.stack);
    return new Response(
      JSON.stringify({ success: false, error: "Server error. Try again later." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  } finally {
    await client.end();
  }
}
