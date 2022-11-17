import {Route} from "react-router-dom";
import PublicRoutes from "@app/routes/PublicRoutes";
import PrivateRoutes from "@app/routes/PrivateRoutes";
import PublicRedirect from "./public-redirect";
import PrivateRedirect from "./private-redirect";
import useDocTitle from "@hooks/use-doc-title";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Logout from "./auth/Logout";
import AboutUs from "./about-us";
import Layouts from "@app/layouts/index";
import BooksIndex from "@/pages/book/BooksIndex";
import useLayout from "@hooks/use-layout";
import {useEffect} from "react";
import useAuth from "@hooks/use-auth";
import ReportIndex from "@/pages/report/ReportIndex";

function Pages() {
  useDocTitle();
  const [{ hasToken }] = useAuth();
  const [, enable, disable] = useLayout();

  useEffect(() => {
    if (hasToken)
      enable();
    else
      disable();
  }, [hasToken]);

  return (
      <Layouts>
        <PublicRoutes>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="*" element={<PublicRedirect/>} />
        </PublicRoutes>
        <PrivateRoutes>
          <Route path="/books" element={<BooksIndex/>}/>
          <Route path="/books/:bookId/reports" element={<ReportIndex/>} />
          <Route path="/about-us" element={<AboutUs/>} />
          <Route path="/logout" element={<Logout/>} />
          <Route path="*" element={<PrivateRedirect/>} />
        </PrivateRoutes>
      </Layouts>
  )
}

export default Pages