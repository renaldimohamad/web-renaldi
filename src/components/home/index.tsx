import {CustomButton} from "../../assets/common/custom-button"
import "./home.css"
import TypingEffect from "./typing/typing-effect"

const Index = () => {
   return (
      <>
         <div className="className">
            <div className="container-home-pages">
               <div className="container-home">
                  <div className="d-flex flex-column">
                     <h5 className="fw-bold text-white">Aldy Mohamad</h5>
                     <div className="d-flex gap-2">
                        <p className="text-white fw-bold">I'm</p>
                        <TypingEffect
                           text="Fullstack Developer"
                           speed={100}
                           className="custom-typing-effect"
                        />
                     </div>
                  </div>
                  <CustomButton
                     className="custom-button"
                     customtext="About Me"
                  />
               </div>
            </div>
         </div>
      </>
   )
}

export default Index
