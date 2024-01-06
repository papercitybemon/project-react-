import './App.css';
import Content from './components/content';
import Footer from './components/Footer';
import Header from './components/Header/index.js';
import { TodoProvider } from './context/TodoContext';

function App() {
  return (
    <TodoProvider>
    <section className='todoapp'>
      <Header/>
      <Content/>
    </section>
    <Footer/>
    </TodoProvider>
  );
}

export default App;
