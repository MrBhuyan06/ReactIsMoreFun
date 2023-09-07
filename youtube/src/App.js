import "./index.css";
import Main from "./components/Main.js";
import Header from "./components/Header.js";
import WatchPage from "./components/WatchPage.js";
import { Provider } from "react-redux";
import store from "./contant/store.js";
// import { Provider } from "react";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Main />
    </Provider>
  );
}

export default App;
