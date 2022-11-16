import {useEffect} from "react";
import useAuth from "@hooks/use-auth";
import {useNavigate} from "react-router-dom";
import useLayout from "@hooks/use-layout";

function Logout() {
  const navigate = useNavigate();
  const [,,clearAuth] = useAuth();
  const [,,disable] = useLayout();

  useEffect(() => {
    disable();
    setTimeout(() => {
      clearAuth();
      navigate('/login');
    }, 1500);
  }, []);
  return <div>در حال خروج...</div>
}

export default Logout