import { Route, Routes } from 'react-router-dom';
import AddItem from './Pages/AddItem/AddItem';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home/Home';
import Inventory from './Pages/Inventory/Inventory';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ManageInventory from './Pages/ManageInventory/ManageInventory/ManageInventory';
import MyItems from './Pages/MyItems/MyItems';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/inventory/:id" element={
          <RequireAuth>
            <Inventory />
          </RequireAuth>
        }
        />
        <Route path="/inventory" element={<ManageInventory />} />
        <Route path="/addItem" element={
          <RequireAuth>
            <AddItem />
          </RequireAuth>
        }
        />
        <Route path="/myItem" element={
          <RequireAuth>
            <MyItems />
          </RequireAuth>
        }
        />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
