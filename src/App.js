import './App.css';
import Header from './compenents/layout/Public/Header';
import Footer from './compenents/layout/Public/Footer';
import Code from './pages/Public/Homepage/Code';
import Posts from './pages/Public/Homepage/Posts';

function App() {
  
  return (
    <div>
       <Header/>
        <main className='container mx-auto px-2 sm:px-4 pt-12'>
              <div className='flex flex-col lg:flex-row justify-between gap-x-8 mb-20'>
              <Code/>
              <Posts/>
              </div>
        </main>
        <hr class="container mx-auto mb-4 border-b border-dark"></hr>
       <Footer/>
  
    </div>
  );
}

export default App;
