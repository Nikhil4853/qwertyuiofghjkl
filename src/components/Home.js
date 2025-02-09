import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mt-5 text-center">
      {/* Hero Section */}
      <div className="jumbotron p-5 bg-light rounded">
        <h1 className="display-4">📚 Welcome to the Book Library</h1>
        <p className="lead">
          Explore a vast collection of books and enhance your reading experience.
        </p>
        <hr className="my-4" />
        <p>Start exploring our collection now!</p>
        <Link to="/books" className="btn btn-primary btn-lg m-2">
          Browse Books
        </Link>
      </div>

      {/* Featured Books Section */}
      <h2 className="mt-5">📖 Featured Books</h2>
      <div className="row mt-4">
        {[
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
        ].map((book) => (
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

export default Home;
