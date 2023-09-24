import './App.css'
import Header from './components/Header'
import MainBody from './components/MainBody'
import SideBar from './components/SideBar'

function App() {

  return (
    <div className='relative max-w-[1440px] bg-[#F9FAFF]'>
      <div className='flex justify-between items-start mr-20'>
      <SideBar/>
     <Header/>
      </div>
      <MainBody/>
    </div>
  )
}

export default App



