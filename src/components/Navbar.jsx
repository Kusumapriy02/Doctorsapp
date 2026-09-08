import { useNavigate } from 'react-router-dom'
function Navbar() {
  let  navigate = useNavigate()
  return (
    <header>
        <h1>Doctor App</h1>
        <div>
            <button onClick={() => navigate('/')}>Home</button>
            <button onClick={() => navigate('/addnewdoctor')}>Add Doctor</button>
        </div>
    </header>
  )
}

export default Navbar