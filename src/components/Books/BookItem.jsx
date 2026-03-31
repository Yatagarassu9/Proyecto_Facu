const BookItem = ({ book }) => {
  return (
    <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
      <h3>{book.title}</h3>
      <p>Autor: {book.author}</p>
      <p>Páginas: {book.pageCount}</p>
      <p>Rating: {book.rating}</p>
      <img src={book.imageUrl} alt={book.title} width="150" />
    </div>
  );
};

export default BookItem;