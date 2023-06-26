import './App.css';
import Header from './compenents/layout/Header';
import Footer from './compenents/layout/Footer';
import Code from './compenents/section-code/Code';
import Posts from './compenents/section-posts/Posts';

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
