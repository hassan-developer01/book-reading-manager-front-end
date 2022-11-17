import React, {useEffect} from 'react';
import useBooks from "@hooks/api/book-api/get-books";
import BookTable from "@/pages/book/BookTable";
import useToggle from "@hooks/use-toggle";

const BooksIndex = () => {
  const [books, loading, done, fetchBooks] = useBooks(false);
  const [init, toggleInit] = useToggle(true);

  useEffect(() => {
    if (init) {
      fetchBooks();
      toggleInit();
    }
  }, [init]);

  return (
    <div>
      <h2>Books</h2>
      <div>
        {loading && <p>Loading...</p>}
        {
          done && <BookTable list={books} />
        }
      </div>
    </div>
  );
}

export default BooksIndex;