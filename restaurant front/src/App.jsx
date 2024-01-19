import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayouts/MainLayout";
import Home from "./pages/Home/Home";
import AddPage from "./pages/Add/AddPage";
import Wishlist from "./pages/Wishlist/Wishlist";
import DetailPage from "./pages/Detail/DetailPage";
import Basket from "./pages/Basket/Basket";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/add" element={<AddPage />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/basket" element={<Basket />} />

            <Route path="/detail/:id" element={<DetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
