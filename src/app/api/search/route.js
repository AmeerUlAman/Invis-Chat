import { Client } from "pg";

export async function POST(req){
    const {searching } = await req.json(); 
    const client = new Client({
user:"postgres",
host:"localhost",
database:"invis_users",
password:"3258",
port:5432

    });
try{
await client.connect();
console.log("SUCCESS");

const query= {
    text: "SELECT * FROM auth_table WHERE username ILIKE $1 ORDER BY username ASC",
    values: [`%${searching}%`],
}

const result = await client.query(query);
console.log(result.rows)   


 
return new Response(
    JSON.stringify({
     success: true,
      data: result.rows, 
     }),
      {
  status: 200,
  headers: { 'Content-Type': 'application/json' },
});
 
} catch (error) {
console.error("ERROR", error);
return new Response(
    JSON.stringify({
         success: false, 
         error: "Internal server error"
         }),
          { status: 500, headers: { 'Content-Type': 'application/json' },
});
} finally { 
await client.end();
}
}
