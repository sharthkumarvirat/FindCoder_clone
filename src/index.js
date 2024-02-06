import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter  } from "react-router-dom";

createRoot(document.getElementById("root")).render(
<BrowserRouter basename ='/FindCoder_clone'>
  <App />
</BrowserRouter>);