import UserRoutes from './components/Layout/UserRoutes';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <UserRoutes />
      <ToastContainer transition={Slide} draggablePercent={60} />
    </>
  );
}

export default App;
