import { Cart, ProductCatalog, ThemesChanger } from "@/components";
import { useContext } from "react";
import { ThemeContext } from "@/context";
import CreateProduct from "@/components/CreateProduct/CreateProduct";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className="container" data-bs-theme={theme}>
        <div className="row">
          <div className="col-9">
            <CreateProduct />
          </div>
          <div className="col-3">
            <ThemesChanger />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <ProductCatalog />
            <hr />
            <Cart />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
