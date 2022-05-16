import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import FallbackUI from "./CommonComponents/Fallback/FallbackUI";

const App = React.lazy(() => import('./App'));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<FallbackUI/>}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
