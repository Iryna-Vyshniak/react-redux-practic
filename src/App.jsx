import Footer from './components/Footer';

function App() {
  //const [count, setCount] = useState(0);

  const setCountPlus = () => {};
  const setCountMinus = () => {};

  return (
    <div className='flex flex-col min-h-screen'>
      <h1 className='font-semibold text-lg text-red-700 text-center mt-6'>Vite + React</h1>
      <main className='flex items-center justify-center flex-1'>
        <h3>{}</h3>
        <button
          className='items-center mt-6 mb-6 mr-2 px-1 py-1 max-w-[150px] w-full h-[44px] bg-red-700 text-white rounded-md shadow-lg transition duration-200 ease-in-out hover:bg-red-600 hover:shadow-md shadow-emerald-50 active:scale-0'
          onClick={setCountPlus}
        >
          Plus
        </button>
        <button
          className='items-center mt-6 mb-6 px-1 py-1 max-w-[150px] w-full h-[44px] bg-blue-700 text-white rounded-md shadow-lg transition duration-200 ease-in-out hover:bg-blue-600 hover:shadow-md shadow-emerald-50 active:scale-0'
          onClick={setCountMinus}
        >
          Minus
        </button>
      </main>
      <Footer />
    </div>
  );
}

export default App;
