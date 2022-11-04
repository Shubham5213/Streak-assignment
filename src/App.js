import { Route, Routes, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </>
    </>
  );
}

export default App;
