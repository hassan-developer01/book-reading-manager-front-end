import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

function PrivateRedirect() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/books');
  }, []);

  return <></>

}

export default PrivateRedirect