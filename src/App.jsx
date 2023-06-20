import UseRoutes from './components/Layout/UseRoutes';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <UseRoutes />
      <ToastContainer transition={Slide} draggablePercent={60} />
    </>
  );
}

export default App;
