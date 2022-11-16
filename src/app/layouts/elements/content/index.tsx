import {PropsWithChildren} from "react";

function Content(props: PropsWithChildren) {
  return (
    <div id="pageContent">
      {props.children}
    </div>
  )
}

export default Content