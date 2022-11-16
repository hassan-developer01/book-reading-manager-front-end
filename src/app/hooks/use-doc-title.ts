import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import {APP_DEFAULT_TITLE, APP_TITLE_PREFIX} from "@service/constants/app.constant";
import pagesTitles from "@service/data/pages-titles";


function useDocTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    const title = pagesTitles[pathname];
    document.title = title ? (APP_TITLE_PREFIX + ' - ' + title) : APP_DEFAULT_TITLE;
  }, [pathname]);
}

export default useDocTitle