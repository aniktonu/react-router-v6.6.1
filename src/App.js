import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Homepage from './components/homepage/Homepage';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";


const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/about",
        element: <Homepage />
      },
      {
        path: "/about/:id",
        element: <Homepage />
      }
    ],

  },
]);



function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
