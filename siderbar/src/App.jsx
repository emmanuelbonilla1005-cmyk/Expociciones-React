import './App.css'
import Siderbar from './Sidebar'
import Dashboard from './Dashboard'
function App() {

  return (
   <div className='d-flex'>
      <Siderbar></Siderbar>
      <Dashboard></Dashboard>
   </div>
  )
}

export default App
