import { BrowserRouter, Route, Routes } from "react-router-dom";
import ComponentsTesting from "./components/ComponentsTesting";
import Editor from "./editor/Editor";
import OfflineComponents from "./offline/OfflineComponents";

function App() {
  return (
    <div className="leading-tight h-screen w-screen flex overflow-y-hidden overflow-x-auto dark">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<OfflineComponents />} />
            <Route path="debug">
              <Route path="components" element={<ComponentsTesting />} />
            </Route>
            <Route path="editor">
              <Route index element={<Editor />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
