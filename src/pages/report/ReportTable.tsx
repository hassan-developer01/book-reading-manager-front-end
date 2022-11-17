import React from 'react';
import {useNavigate} from "react-router-dom";
import ReportInterface from "@service/types/model/report-interface";

type ReportTablePropsType = { list: ReportInterface[];}

function ReportTable({list: reportList}: ReportTablePropsType) {
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
        <th scope="col">Start Date</th>
        <th scope="col">Stop Date</th>
        <th scope="col">To Page</th>
        <th scope="col">Description</th>
        <th scope="col">Action</th>
      </tr>
      </thead>
      <tbody>
      {
        reportList.reverse().map(({id, start_time, stop_time, description, to_page, finished}, index) => {
          return (
            <tr key={index}>
              <td>{++index}</td>
              <td>{start_time}</td>
              <td>{stop_time}</td>
              <td>{to_page}</td>
              <td>{description || '-'}</td>
              <td>
                {
                  !finished && <button className="btn btn-primary" onClick={reportsBtnClickHandler(id)}>Save</button>
                }
              </td>
            </tr>
          )
        })
      }
      </tbody>
    </table>
  );
}

export default ReportTable;