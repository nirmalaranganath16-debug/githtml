const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/library")
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

// Book schema
const Book = mongoose.model("Book", {
    title: String,
    author: String,
    price: Number
});

// POST - Add book
app.post("/books", async (req, res) => {
    const book = new Book(req.body);
    await book.save();

    res.json({
        message: "Book added successfully",
        data: book
    });
});

// GET - Get all books
app.get("/books", async (req, res) => {
    const books = await Book.find();
    res.json(books);
});

// PUT - Update book
app.put("/books/:id", async (req, res) => {
    const book = await Book.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.json({
        message: "Book updated successfully",
        data: book
    });
});

// DELETE - Delete book
app.delete("/books/:id", async (req, res) => {
    await Book.findByIdAndDelete(req.params.id);

    res.json({
        message: "Book deleted successfully"
    });
});

// HEAD - Check books endpoint
app.head("/books", (req, res) => {
    res.status(200).end();
});

// OPTIONS - Show allowed methods
app.options("/books", (req, res) => {
    res.set("Allow", "GET,POST,PUT,DELETE,HEAD,OPTIONS");
    res.status(200).send();
});

// Server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});