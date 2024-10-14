const {Client} = require ('pg');

const client = new Client({
user:"postgres",
host:"localhost",
database:"invis_users",
password:"3258",
port:5432,
});

client.connect()
.then(()=>console.log("Connection Successfully"))
.catch(err=>console.error("connection errror!",err.stack))

const data = {
username:"tekst1",
email:"kaua@gmail.com",
password:"teksttest",
phone:"0000",
}

const query = {
text:"INSERT INTO auth_table(username,email,password,phone) VALUES ($1,$2,$3,$4)",
values:[data.username,data.email,data.password,data.password]
}

client.query(query);