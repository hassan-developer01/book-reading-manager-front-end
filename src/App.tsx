import React, { Suspense } from "react";
import Pages from "./pages";
import RoutesWrapper from "@app/routes/RoutesWrapper";
import NavigateLoader from "@component/loaders/navigate-loader";

const LazyContainer = React.lazy(() => import('./app/layouts/containers/LazyContainer'));

function App() {
  return (
      <RoutesWrapper>
        <Suspense fallback={<NavigateLoader/>}>
          <LazyContainer>
            <Pages/>
          </LazyContainer>
        </Suspense>
      </RoutesWrapper>
  )
}

export default App
