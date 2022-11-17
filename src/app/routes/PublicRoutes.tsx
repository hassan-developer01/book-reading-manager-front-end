import {PropsWithChildren, useEffect} from "react";
import { Routes } from "react-router-dom";
import useAuth from "@hooks/use-auth";

function PublicRoutes(props: PropsWithChildren) {
  const [{ hasToken }] = useAuth();

  return !hasToken ? <Routes>{props.children}</Routes> : <></>
}

export default PublicRoutes