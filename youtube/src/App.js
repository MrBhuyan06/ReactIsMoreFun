import Body from "./components/Body.js";
import Header from "./components/Header.js";
import { Provider } from "react-redux";
import store from "./config/store.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer.js";
import WatchPage from "./components/WatchPage.js";

const App = () => {
  const appRoute = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "watch",
          element: <WatchPage />,
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <Header />
      <RouterProvider router={appRoute} />
    </Provider>
  );
};
export default App;
