import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Header } from "./components";
import { ChatPage, ProfilePage, GistsPage } from "./pages";
import { CustomThemeProvider } from "./theme-context";
import { store, persistor } from "./store";
// import { store } from "./store/my-redux";
import "./global.css";
import "./palette.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <CustomThemeProvider>
          <BrowserRouter>
            <Header />

            <Routes>
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/chat/*" element={<ChatPage />} />
              <Route path="/" element={<h1>Home page</h1>} />
              <Route path="/gists" element={<GistsPage />} />
              <Route path="/*" element={<h1>404</h1>} />
            </Routes>
          </BrowserRouter>
        </CustomThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// const Test = ({ children }) => {
//   const [state, setState] = useState(0);

//   return (
//     <div>
//       <h1>Test component</h1>
//       <div>{children(state, setState)}</div>
//     </div>
//   );
// };
