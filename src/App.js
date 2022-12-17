import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Home from './components/Home/Home';
import Footer from './components/Layout/Footer';
import Contact from './components/Contact/contact';
import Cart from './components/Cart/Cart';
import Shipping from './components/Cart/Shipping';
import ConfirmOrder from './components/Cart/ConfirmOrder';
import PaymentSuccess from './components/Cart/PaymentSuccess';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import MyOrders from './components/MyOrders/MyOrders';
import OrderDetails from './components/MyOrders/OrderDetails';
import Dashboard from './components/Admin/Dashboard';
import Orders from './components/Admin/Orders';
import Users from './components/Admin/Users';
import About from './components/About/About';
import NotFound from './components/Layout/NotFound';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from './redux/actions/userAction';
import toast, { Toaster } from 'react-hot-toast'
import { ProtectedRoute } from 'protected-route-react';
import Register from './components/Register/Register';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import ResetPassword from './components/ResetPassword/ResetPassword';


import './styles/App.scss';
import './styles/header.scss';
import './styles/home.scss';
import './styles/founder.scss';
import './styles/menu.scss';
import './styles/footer.scss';
import './styles/contact.scss';
import './styles/cart.scss';
import './styles/shipping.scss';
import './styles/confirmOrder.scss';
import './styles/paymentsuccess.scss';
import './styles/profile.scss';
import './styles/table.scss';
import './styles/orderDetails.scss';
import './styles/dashboard.scss';
import './styles/about.scss';


function App() {
  const dispatch = useDispatch();
  const { message, isAuthenticated, user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({
        type: "clearMessage",
      });
    }

  }, [dispatch, message]);


  return (
    <Router>
      <Header isAuthentication={isAuthenticated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/register" element={isAuthenticated ? <Home/> : <Register />} />
        <Route path="/forgot/password" element={isAuthenticated ? <Home/> : <ForgotPassword />} />
        <Route path="/password/reset/:token" element={isAuthenticated ? <Home/> : <ResetPassword/>} />
        <Route
          path="/login"
          element={
            <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/profile">
              <Login />
            </ProtectedRoute>
          }
        />

        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/confirmorder" element={<ConfirmOrder />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/order/:id" element={<OrderDetails />} />
        </Route>

        <Route
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              adminRoute={true}
              isAdmin={user && user.role === "admin"}
              redirectAdmin="/profile"
            />
          }
        >
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/orders" element={<Orders />} />
        </Route>
        
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Toaster />
    </Router>
  );
}

export default App;
