import ReportInterface from "@service/types/model/report-interface";
import {useEffect, useState} from "react";
import axios from "axios";
import {apiPath} from "@service/helper/api";
import useTokenHeader from "@hooks/use-token-header";
import BookInterface from "@service/types/model/BookInterface";

const reportCache: {list: ReportInterface[] | undefined} = {
  list: undefined
}

type UseGetReportType = {
  book: BookInterface|undefined,
  reports: ReportInterface[],
  loading: boolean,
  done: boolean,
  fetchReports: (bookId: string) => void
};

function useGetReport(): UseGetReportType {
  const [book, setBook] = useState<BookInterface>();
  const [resData, setResData] = useState<ReportInterface[]>(reportCache.list || []);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(!!reportCache.list);
  const tokenHeader = useTokenHeader();

  useEffect(() => {
    reportCache.list = resData;
  }, [resData])

  const fetchReports = async (bookId: string) => {
    if (!done) {
      setLoading(true);
      const res = await axios.get(apiPath(`reports/book/${bookId}`), {
        headers: tokenHeader
      });

      if (res.status === 200) {
        const book = res.data.data;
        setResData(book.reports.reverse());
        setBook(book);
        setLoading(false);
        if (!done) setDone(true);
      }
    }
  }

  return {
    book,
    reports: resData,
    loading,
    done,
    fetchReports: (bookId: string) => {fetchReports(bookId).then()}
  }
}

export default useGetReport