import axios from "axios";
import {apiPath} from "@service/helper/api";
import {useEffect, useState} from "react";
import BookInterface from "@service/types/model/BookInterface";

let bookCache: {list: BookInterface[] | undefined} = {
  list: undefined
};

const useBooks: (immediateLoad?: boolean) => [BookInterface[], boolean, boolean, () => void] = (immediateLoad: boolean = true) => {
  const [resData, setResData] = useState<BookInterface[]>(bookCache.list || []);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(!!bookCache.list);

  useEffect(() => {
    if (immediateLoad && !done) {
      getAllBooks().catch(error => {
        console.error(error);
      });
    }
  }, [done]);

  useEffect(() => {
    bookCache.list = resData;
  }, [resData])

  const getAllBooks = async () => {
    if (!done) {
      setLoading(true);
      const res = await axios.get(apiPath('books'), {
        headers: {
          Authorization: "Bearer 2|Se7bkDZjRIyN7um9qIBQ8s6SYq96G28OPYa8PAlO"
        }
      });

      if (res.status === 200) {
        setResData(res.data.data);
        setLoading(false);
        if (!done) setDone(true);
      }
    }
  }

  return [resData, loading, done, () => {getAllBooks().then()}];
};

export default useBooks