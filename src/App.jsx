import { useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom"
import useVH from "react-viewport-height";
import useWindowWidth from "./hooks/useWindowWidth";
import Footer from "./layouts/Footer";
import Page from "./layouts/Page"
import Login from "./pages/Login";
import PCPage from "./PC/layouts/PCPage";

const App = () => {
  useVH();

  const user = useSelector((state) => state.user);
  const windowWidth = useWindowWidth().width;

  if(windowWidth > 700){
    return (
      <Router>
      <main>
        {/* {user.name !== '' ? <PCPage/> : <Login />} */}
        <PCPage />
      </main>
      <Footer/>
    </Router>
    )
  }else{
    return (
      <Router>
        <main>
          {user.name !== '' ? <Page/> : <Login />}
        </main>
        <Footer/>
      </Router>
    );
  }
};

export default App;