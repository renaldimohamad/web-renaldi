import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./components/home/index.tsx"
import About from "./components/about/index.tsx"
import Resume from "./components/resume/index.tsx"
import Contact from "./components/contact/index.tsx"
import Navigation from "./assets/common/navigation/navigation.tsx"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
   return (
      <>
         <Router>
            <Navigation />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
               <Route path="/resume" element={<Resume />} />
               <Route path="/contact" element={<Contact />} />
            </Routes>
         </Router>
      </>
   )
}

export default App
