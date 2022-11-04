import { useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom"
import useVH from "react-viewport-height";
import Footer from "./layouts/Footer";
import Page from "./layouts/Page"
import Login from "./pages/Login";

const App = () => {
  useVH();

  const user = useSelector((state) => state.user);

  return (
    <Router>
      <main>
        {user.name !== '' ? <Page/> : <Login />}
      </main>
      <Footer/>
    </Router>
  );
};

export default App;