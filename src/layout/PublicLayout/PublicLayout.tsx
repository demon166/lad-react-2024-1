import { Outlet } from "react-router-dom";
import { Footer, Header } from "@/layout";

const PublicLayout = () => {
  if (true) {
    throw new Error();
  }
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1 container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
