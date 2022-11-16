import {Link} from "react-router-dom";
import React from "react";
import useAuth from "@hooks/use-auth";


function Header() {
  const [{ hasToken }] = useAuth();

  return (
    <header id="pageTopBar">
      <h1>عنوان وب اپ</h1>
      <nav>
        <ul>
          <li><Link to="/">خانه</Link></li>
          {
            !hasToken &&
            <>
              <li><Link to="/login">ورود</Link></li>
              <li><Link to="/register">ثبت نام</Link></li>
            </>
          }
          {
            hasToken &&
            <>
              <li>
                <Link to='/about-us' >درباره ما</Link>
              </li>
              <li>
                <Link to="/logout">خروج</Link>
              </li>
            </>
          }
        </ul>
      </nav>
    </header>
  )
}

export default Header