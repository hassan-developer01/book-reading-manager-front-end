import {PropsWithChildren} from "react";
import LayoutsContainer from "./containers/LayoutsContainer";

function Layouts(props: PropsWithChildren) {
  return (
    <LayoutsContainer>
          {props.children}
    </LayoutsContainer>
  )
}

export default Layouts