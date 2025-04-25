import Header from "./components/Header";
import "./styles/App.css"
import "./styles/Header.css"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Contacts from './components/Contacts'

function App(){
    return <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="*" element={<div>Page Not Found 404</div>} />
        </Routes>

    </Router>;
}

export default App;