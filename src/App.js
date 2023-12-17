import React from "react";
import Weather from "./Components/Weather.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";

function App() {
  return(
      <Provider store={store}>
      <div>
           <Weather/>
      </div>
      </Provider>
  )

}

export default App;
