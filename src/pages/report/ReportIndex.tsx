import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import useGetReports from "@hooks/api/report-api/use-get-reports";
import ReportTable from "@/pages/report/ReportTable";

function ReportIndex() {
  const {bookId} = useParams();
  const {reports, fetchReports} = useGetReports();

  useEffect(() => {
    fetchReports(bookId || '');
  }, []);

  return (
    <div>
      <h2>Reports index</h2>
      <ReportTable list={reports}/>
    </div>
  );
}

export default ReportIndex;