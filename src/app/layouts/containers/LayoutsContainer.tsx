import Body from "@elm/content/body/index";
import Sidebar from "@elm/sidebar/index";
import VerticalOverlay from "@elm/vertical-overlay/index";
import useLayout from "@hooks/use-layout";

function LayoutsContainer(props: any) {
  const [status] = useLayout();

  return (
    <div id="layoutWrapper" className="d-flex">
      <VerticalOverlay/>
      {/*{status && <Sidebar/>}*/}
      <Body status={status}>{props.children}</Body>
    </div>
  )
}

export default LayoutsContainer