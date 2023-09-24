import './App.css'
import Dropdown from './components/Dropdown'
import Header from './components/Header'
import MainBody from './components/Mainbody'
import SideBar from './components/Sidebar'

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



