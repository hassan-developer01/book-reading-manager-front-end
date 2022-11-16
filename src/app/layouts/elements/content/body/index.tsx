import {PropsWithChildren} from "react";
import Content from "../index";
import Footer from "../footer";
import Header from "../header";

interface BodyProps extends PropsWithChildren {
  status: boolean
}

function Body(props: BodyProps) {
  return (
    <main id="pageMain" style={{width: "100%"}}>
      {props.status && <Header/>}
      <Content {...props}/>
      {props.status && <Footer/>}
    </main>
  )
}

export default Body