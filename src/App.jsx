import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import TodoList from "./todos/TodoList/TodoList";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <div className="App">
          <TodoList />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
