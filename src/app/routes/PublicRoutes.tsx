import {PropsWithChildren, useEffect} from "react";
import { Routes } from "react-router-dom";
import useAuth from "@hooks/use-auth";
import useLayout from "@hooks/use-layout";

function PublicRoutes(props: PropsWithChildren) {
  const [{ hasToken }] = useAuth();
  const [,, disable] = useLayout();

  useEffect(() => {
    setTimeout(() => disable());
  }, []);

  return !hasToken ? <Routes>{props.children}</Routes> : <></>
}

export default PublicRoutes