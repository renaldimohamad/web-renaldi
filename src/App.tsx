import {HashRouter as Router, Route, Routes} from "react-router-dom"
import Navigation from "./assets/common/navigation/navigation.tsx"
import Home from "./components/home/index.tsx"
import About from "./components/about/index.tsx"
import Portfolio from "./components/portfolio/index.tsx"
import Contact from "./components/contact/index.tsx"
import TodoApp from "./components/todo-app/index.tsx"
import SatuKlinik from "./components/satu-klinik/index.tsx"
import DumbSound from "./components/dumb-sound-web/index.tsx"
import Circle from "./components/circle-app/index.tsx"
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
               <Route path="/portfolio" element={<Portfolio />} />
               <Route path="/contact" element={<Contact />} />
               <Route path="/todoapp-details" element={<TodoApp />} />
               <Route path="/satu-klinik-details" element={<SatuKlinik />} />
               <Route path="/dumb-sound-details" element={<DumbSound />} />
               <Route path="/circle-details" element={<Circle />} />
            </Routes>
         </Router>
      </>
   )
}

export default App
