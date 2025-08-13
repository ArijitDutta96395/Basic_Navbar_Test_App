const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve static files from the "public" directory (for CSS, images, JS, etc.)
app.use(express.static(path.join(__dirname, "public")));

// Route to serve the HTML file
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/about", (req, res) => {
    res.send("<h1>Welcome to the About Us page of our website!</h1>");// here send is used no routing in b/n pages
});

// Contact Us Route
app.get("/contact", (req, res) => {
    res.send("This is the Contact Us page. Reach us at contact@company.com");
});

// Products Route
app.get("/products", (req, res) => {
    res.send("Here are our available products: Laptop, Phone, Tablet.");
});


app.listen(PORT, ()=>{
    console.log('Server is running at http://localhost:3000/');
});
