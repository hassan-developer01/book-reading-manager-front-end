import {PropsWithChildren} from "react";
import {BrowserRouter} from "react-router-dom";

function RoutesWrapper(props: PropsWithChildren) {
  return <BrowserRouter>{props.children}</BrowserRouter>
}

export default RoutesWrapper