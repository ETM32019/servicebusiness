import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";
import ServicesScreen from "./screens/ServicesScreen";
import PricingScreen from "./screens/PricingScreen";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/about" component={AboutScreen} />
        <Route path="/contact" component={ContactScreen} />
        <Route path="/services" component={ServicesScreen} />
        <Route path="/pricing" component={PricingScreen} />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
