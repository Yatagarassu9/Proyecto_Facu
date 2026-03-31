import BookItem from "./BookItem";

const Books = ({ items }) => {
  return (
    <div>
      {items.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
};

export default Books;