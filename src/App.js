import { Route, Routes, BrowserRouter } from "react-router-dom";
import DasboardPage from "./pages/DasboardPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <>
        <BrowserRouter>
          <Routes>
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/" element={<DasboardPage />} />
          </Routes>
        </BrowserRouter>
      </>
    </>
  );
}

export default App;
