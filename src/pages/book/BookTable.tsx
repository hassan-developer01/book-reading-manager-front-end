import React from 'react';
import BookInterface from "@service/types/model/BookInterface";
import {useNavigate} from "react-router-dom";

type BookTablePropsType = { list: BookInterface[];}

function BookTable({list: bookList}: BookTablePropsType) {
  const navigate = useNavigate();

  function reportsBtnClickHandler(bookId: number) {
    return () => {
      navigate(`/books/${bookId}/reports`);
    }
  }

  return (
    <table className="table">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Title</th>
        <th scope="col">Number of Pages</th>
        <th scope="col">Description</th>
        <th scope="col">Action</th>
      </tr>
      </thead>
      <tbody>
      {
        bookList.map(({id, title, number_of_pages, description, ref_url}, index) => {
          return (
            <tr key={index}>
              <td>{++index}</td>
              <td><a href={ref_url} target="_blank">{title}</a></td>
              <td>{number_of_pages}</td>
              <td>{description || '-'}</td>
              <td>
                <button className="btn btn-primary" onClick={reportsBtnClickHandler(id)}>Go To Reports</button>
              </td>
            </tr>
          )
        })
      }
      </tbody>
    </table>
  );
}

export default BookTable;