const express = require('express')
const path = require('path')

const app = express()

const PORT = process.env.PORT || 8400

app.get("/", (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html'))); //homepage route

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// template rendering
app.get("/", (req, res) => res.render("index")); //homepage route

// members api routes
app.use("/en-US/query", require("./api/query"));

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});