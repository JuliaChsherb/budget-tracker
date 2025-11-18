import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import Welcome from './pages/Welcome'

function App() {
    const { user } = useSelector((state) => state.auth)

    return (
        <>
            <Router>
                <div className='container'>
                    <Header />
                    <Routes>
                        <Route path="/" element={user ? <Dashboard /> : <Welcome />} />
                        
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route 
                            path="/dashboard" 
                            element={user ? <Dashboard /> : <Login />} 
                        />
                    </Routes>
                </div>
            </Router>
            <ToastContainer />
        </>
    )
}

export default App;
