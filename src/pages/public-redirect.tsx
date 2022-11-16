import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

function PublicRedirect() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/login');
  }, []);

  return <></>

}

export default PublicRedirect