import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "../src/pages/Home";
import Menu from "../src/pages/Menu";
import Contact from "../src/pages/Contact";
import About from "../src/pages/About";
import Blog from "./pages/blog/Blog";
import Order from "../src/pages/Order";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import BlogDetail from "./pages/blog/BlogDetail";
import ErrorPage from "./pages/Error";

const App = () => {
  return (
    <Provider store={store}>
      <div className='app'>
        <Router>
          <Header />
          <main className='container flex-grow-1'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/menu' element={<Menu />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/about' element={<About />} />
              <Route path='/blog' element={<Blog />} />
              <Route path='/blog/:id' element={<BlogDetail />} />
              <Route path='/order' element={<Order />} />
              <Route path='*' element={<ErrorPage />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </div>
    </Provider>
  );
};

export default App;
