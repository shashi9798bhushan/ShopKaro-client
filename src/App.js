import {Routes, Route} from 'react-router-dom'
import About from './pages/About';
import Register from './pages/Auth/Register';
import Contact from './pages/Contact';
import HomePage from './pages/HomePage';
import Pagenotfound from './pages/Pagenotfound';
import Policy from './pages/Policy';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Auth/Login';
import PrivateRoute from './components/Routes/Private';
import Dashboard from "./pages/user/Dashboard";
import ForgotPassword from './pages/Auth/ForgotPassword';
import AdminRoute from './components/Routes/AdminRoute';
import AdminDashboard from './pages/admin/AdminDashboard';
import { CreateCategory } from './pages/admin/CreateCategory';
import CreateProduct from './pages/admin/CreateProduct';
import Users from './pages/admin/Users';
import Orders from './pages/user/Orders'
import Profile from './pages/user/Profile';
import Products from './pages/admin/Products';
import UpdateProduct from './pages/admin/UpdateProduct';
import Search from './pages/Search';
import ProductDetails from './pages/ProductDetails';
import Categories from './pages/Categories';
import CategoryProduct from './pages/CategoryProduct';
import CartPage from './pages/CartPage';
import { AdminMenu } from './components/layout/AdminMenu';
import AdminOrders from './pages/AdminOrders';



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/product/:slug' element={<ProductDetails/>} />
        <Route path='/categories' element={<Categories/>} />
        <Route path='/cart' element={<CartPage/>} />
        <Route path='/category/:slug' element={<CategoryProduct/>} />
        <Route path='/search' element={<Search/>} />
        <Route path="/dashboard" element={<PrivateRoute/>}>
          <Route path="user" element={<Dashboard/>} />
          <Route path="user/orders" element={<Orders/>} />
          <Route path="user/profile" element={<Profile/>} />
        </Route> 
        <Route path="/dashboard" element={<AdminRoute/>}>
          <Route path="admin" element={<AdminDashboard/>} />
          <Route path="admin/create-category" element={<CreateCategory/>} />
          <Route path="admin/create-product" element={<CreateProduct/>} />
          <Route path="admin/product/:slug" element={<UpdateProduct/>} />
          <Route path="admin/products" element={<Products/>} />
          <Route path="admin/users" element={<Users/>} />
          <Route path="admin/orders" element={<AdminOrders/>} />
        </Route> 
        <Route path='/register' element={<Register/>} />
        <Route path='/forgot-password' element={<ForgotPassword/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/policy' element={<Policy/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='*' element={<Pagenotfound/>} />
      </Routes>
    </>
  );
}

export default App;
