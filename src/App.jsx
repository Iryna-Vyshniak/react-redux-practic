import UserRoutes from './components/Layout/UserRoutes';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Navbar from './components/Layout/Navbar';

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <UserRoutes />
      <ToastContainer transition={Slide} draggablePercent={60} />
    </>
  );
}

export default App;
