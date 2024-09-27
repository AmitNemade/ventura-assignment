import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppliedIPOListing from "./screens/IPOList";
import IPODetails from "./screens/IPODetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppliedIPOListing />} />
        <Route path="/:id" element={<IPODetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
