const mongoose = require("mongoose");
const db = require("../models");

// Connect to mongodb
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

const bookSeed = {
    authors: ["Suzanne Collins"],
    description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
    image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
    title: "The Hunger Games"
}

// Clear out the Books collection and inserts the seed data
db.Book.remove({}).then(() => {
    db.Book.collection.insertMany(bookSeed)
}).then(data => {
    console.log(data.result.n + " book(s) inserted!");
    process.exit(0);
}).catch(error => {
    console.log(error);
    process.exit(1);
});