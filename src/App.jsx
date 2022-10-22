import { BrowserRouter as Router } from "react-router-dom"
import Footer from "./layouts/Footer";
import Page from "./layouts/Page"

const App = () => {
  return (
    <Router>
      <main>
        {<Page/>}
      </main>
      <Footer/>
    </Router>
  );
};

export default App;