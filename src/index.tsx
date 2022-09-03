import React from "react";
import { createRoot } from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo/client";
// import { Provider } from 'react-redux';
// import { store } from './app/store';
import App from "./App";
import "./styles/global.scss";
import "@fontsource/mulish/300.css";
import "@fontsource/mulish/400.css";
import "@fontsource/mulish/500.css";
import "@fontsource/mulish/700.css";
import "@fontsource/rubik/300.css";
import "@fontsource/rubik/400.css";
import "@fontsource/rubik/500.css";
import "@fontsource/rubik/700.css";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      {/* <Provider store={store}> */}
      <App />
      {/* </Provider> */}
    </ApolloProvider>
  </React.StrictMode>
);
