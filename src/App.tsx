import './App.css'
import Header from './components/Header'
import Containers from './components/containers'
import Side from './components/side'

function App() {

  return (
    <div className='relative max-w-[1440px] bg-[#F9FAFF]'>
      <div className='flex justify-between items-start mr-20'>
      <Side/>
     <Header/>
      </div>
      <Containers/>
    </div>
  )
}

export default App



