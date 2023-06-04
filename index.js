const express = require('express')
const app = express()
const Timeout = setTimeout(Heartbeat, 120000);
const port = 9000
var auth
const db = new sqlite3.Database();


app.listen(port, () => {
    console.log("Server started on port " + port)
})

app.get("/", (req, res) => {
    console.log("Get request on /")
    res.status(200)
    res.sendFile(__dirname + '/public/index.html')
})

app.get("revive", (req, res) => {
    console.log("Reviving a auth code")
})

function Heartbeat() {

}
/*
db.serialize(() => {
    db.run("CREATE TABLE lorem (info TEXT)");

    const stmt = db.prepare("INSERT INTO lorem VALUES (?)");
    for (let i = 0; i < 10; i++) {
        stmt.run("Ipsum " + i);
    }
    stmt.finalize();

    db.each("SELECT rowid AS id, info FROM lorem", (err, row) => {
        console.log(row.id + ": " + row.info);
    });
});
*/
//dont forget that shit