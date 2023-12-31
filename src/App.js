import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store1 from "./utils/Store1";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import Watchpage from "./components/Watchpage";

const appRouter = createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[{
    path:"/",
    element:<MainContainer/>
  },
  {
    path:"watch",
    element:<Watchpage/>
  }
]
}]);

function App() {
  return (
    <Provider store = {store1}>
      <div>
        <Head/>
        <RouterProvider router={appRouter}/>
      </div>
    </Provider>
  );
}

export default App;
 