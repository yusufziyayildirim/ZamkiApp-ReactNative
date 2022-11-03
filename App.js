import { Provider } from "react-redux";
import AppRoute from "./src/navigation/AppRoute";
import { store } from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      <AppRoute />
    </Provider>
  );
}

