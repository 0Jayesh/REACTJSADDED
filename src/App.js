import React, { createContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import BackToTop from "./components/commonComponent/BactToTop/BackToTop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage/ProductPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import ProductDetailsPage from "./pages/ProductDetails/ProductDetailsPage";
import { totalQuantity } from "./Utilis/GetTotalQuantity";
import CartPage from "./pages/CartPage/CartPage";
import { newsData } from "./components/Data/newsData";
import NotFind from "src/added/pages/NotFound/NotFind.js"
import Faq from "src/added/pages/FaqPage/Faq.js"
import Register from "src/added/pages/Account/Register.js"
import Login from "src/added/pages/Account/Login.js"
import Services from "src/added/pages/Services/Services";
import About from "src/added/pages/AboutUS/About"
import SingleNewsPage from "src/added/pages/NewsPage/SingleNewsPage";
import Gallery from "src/added/pages/Gallery/Gallery.js"


export const CardContext = createContext();

function App() {
  const quantity = totalQuantity();
  const [cardProductLength, setcardproductLength] = useState(quantity);
  return (
    <CardContext.Provider value={[cardProductLength, setcardproductLength]}>
      <Router>
        <div className="app">
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/products" exact>
              <ProductPage />
            </Route>
            <Route path="/products/:id">
              <ProductDetailsPage />
            </Route>
            <Route path="/news">
              <NewsPage />
            </Route>
            <Route path="/news/:title" exact>
             <SingleNewsPage newsData={newsData} />
            </Route>
            <Route path="/check-out">
              <CheckoutPage />
            </Route>
            <Route path="/cart">
              <CartPage />
            </Route>
            <Route path="/pages/faq">
            <Faq />
           </Route>
           <Route path="/account/register">
              <Register />
            </Route>
            <Route path="/account/login">
              <Login />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            <Route path="/aboutus">
              <About />
            </Route>
            <Route path="/gallery">
              <Gallery />
            </Route>
            <Route>
            <NotFind />
           </Route>
            <Footer />
          </Switch>
          <BackToTop />
        </div>
        <Footer />
      </Router>
    </CardContext.Provider>
  );
}

export default App;
