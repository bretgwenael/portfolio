import { Outlet } from 'react-router-dom'
import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'
import './main.scss';

function App() {
  

  return (
    <div className='app-container'>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
