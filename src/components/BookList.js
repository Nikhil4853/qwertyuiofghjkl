import React from "react";

const books = [
  {
    id: 1,
    title: "The Alchemist",
    writer: "Paulo Coelho",
    image: "https://images.unsplash.com/photo-1524578271613-d550eacf6093",
  },
  {
    id: 2,
    title: "Atomic Habits",
    writer: "James Clear",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  },
  {
    id: 3,
    title: "Rich Dad Poor Dad",
    writer: "Robert Kiyosaki",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0ea",
  },
  {
    id: 4,
    title: "The Alchemist",
    writer: "Paulo Coelho",
    image: "https://images.unsplash.com/photo-1524578271613-d550eacf6093",
  },
  {
    id: 5,
    title: "Atomic Habits",
    writer: "James Clear",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  },
  {
    id: 6,
    title: "Rich Dad Poor Dad",
    writer: "Robert Kiyosaki",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0ea",
  },
];

const BookList = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">📚 Book List</h2>
      <div className="row">
        {books.map((book) => (
          <div key={book.id} className="col-md-4">
            <div className="card shadow-sm mb-4">
              <img
                src={book.image}
                alt={book.title}
                className="card-img-top"
                style={{ height: "250px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text text-muted">✍️ {book.writer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
