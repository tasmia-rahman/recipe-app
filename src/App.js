import Category from "./components/Category";
import Pages from "./pages/Pages";
import { BrowserRouter, Link } from "react-router-dom";
import Search from "./components/Search";
import { GiKnifeFork } from "react-icons/gi";

function App() {
  return (
    <main>
      <BrowserRouter>
        <div>
          <GiKnifeFork className="title-svg" />
          <Link to={"/"} className="title-text">
            deliciousss
          </Link>
        </div>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </main>
  );
}

export default App;
