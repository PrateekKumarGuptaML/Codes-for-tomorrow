import './App.css'
import List from './components/List'
import Pages from './components/Pages'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <>
     <div className='main_container'>
        <div className="sidebar_main_container">
          <Sidebar />
        </div>
        <div className="list_main_container">
          <List />
          <Pages />
        </div>
     </div>
    </>
  )
}

export default App
