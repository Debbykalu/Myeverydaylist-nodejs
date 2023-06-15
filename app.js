const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

let items = ["Pray", "Go to school", "Read"]

app.get("/", function(req, res) {
  const today = new Date();
  let options = {
    weekday: 'long',
    day: "numeric",
    month: "long",
  };
  const day = today.toLocaleDateString('en-US', options);

  res.render('todolist', { kindOfDay: day, newListItems: items });
});

app.post("/", function(req, res) {
  const item = req.body.newItem; 
  items.push(item);
  res.redirect("/");
});

app.listen(3000, function() {
  console.log('Server is running on port 3000');
});
