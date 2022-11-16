import {PropsWithChildren, useEffect} from "react";
import { Routes } from "react-router-dom";
import useAuth from "@hooks/use-auth";
import useLayout from "@hooks/use-layout";

function PrivateRoutes(props: PropsWithChildren) {
  const [{ hasToken }] = useAuth();
  const [, enable] = useLayout();

  useEffect(() => {
    setTimeout(() => enable());
  }, []);

  return hasToken ? <Routes>{props.children}</Routes> : <></>
}

export default PrivateRoutes