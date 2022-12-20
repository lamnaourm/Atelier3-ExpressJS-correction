const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

var livres = [
  {
    id: 1,
    titre: "Reminders of Him: A Novel",
    prix: 90.97,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/617uZq23IPL._AC_UL210_SR195,210_.jpg",
  },
  {
    id: 2,
    titre: "Ugly Love: A Novel",
    prix: 90.97,
    image:
    "https://images-na.ssl-images-amazon.com/images/I/61QR7qoEYVL._AC_UL210_SR195,210_.jpg",
  },
  {
    id: 3,
    titre: "Where the Crawdads Sing",
    prix: 90.97,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81O1oy0y9eL._AC_UL210_SR195,210_.jpg",
  },
  {
    id: 4,
    titre: "November 9: A Novel",
    prix: 90.97,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61xkvfPVupL._AC_UL210_SR195,210_.jpg",
  },
  {
    id: 5,
    titre: "The Return of the Gods",
    prix: 90.97,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61uiYWcEQGL._AC_UL210_SR195,210_.jpg",
  },
  {
    id: 6,
    titre: "I Love You to the Moon and Back",
    prix: 90.97,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL210_SR195,210_.jpg",
  },
  {
    id: 7,
    titre: "All Good People Here: A Novel",
    prix: 90.97,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81XQ1+piiiL._AC_UL210_SR195,210_.jpg",
  },
  {
    id: 8,
    titre: "The Great Reset: And the War for the World",
    prix: 90.97,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61clZgj1xZL._AC_UL210_SR195,210_.jpg",
  },
  {
    id: 9,
    titre: "Good Inside: A Guide to Becoming the Parent You Want to Be",
    prix: 90.97,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71RIWM0sv6L._AC_UL210_SR195,210_.jpg",
  },
  {
    id: 10,
    titre: "The Butcher and The Wren: A Novel",
    prix: 90.97,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81ZjXQY0+sL._AC_UL210_SR195,210_.jpg",
  },
];


app.get('/catalogue', (req, res) => {
    res.status(207).json(livres);
}); 

app.get('/livres/:id', (req, res) => {
    const id = req.params.id;
    const livre = livres.filter(item => item.id === parseInt(id));
    if(livre.length===0)
        res.status(504).json({message: "id incorrect"})
    else 
        res.status(207).json(livre[0]);

});

app.post('/livre', (req, res) => {
  const livre = req.body; 
  livres.push(livre)
  res.sendStatus(201);
})


app.put('/livre', (req, res) => {
  const livre = req.body; 
  livres = livres.map(item => item.id === livre.id ? livre: item);
  res.sendStatus(202);
})


app.listen(3000, (error) => {
  console.log("Serveur lance au port 3000");
});
