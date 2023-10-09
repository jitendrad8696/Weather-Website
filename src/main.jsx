import React from "react";
import ReactDOM from "react-dom/client";
import MyRoutes from "./routes/MyRoutes";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <MyRoutes />
    </Provider>
  </React.StrictMode>
);
