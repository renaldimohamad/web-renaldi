import {Link} from "react-router-dom"
import {CustomButton} from "../../assets/common/custom-button"
import "./home.css"
import TypingEffect from "./typing/typing-effect"
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa"

const Index = () => {
   return (
      <>
         <div className="container-home-pages">
            <div className="container-home fade-in">
               <div className="d-flex flex-column ">
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
                  className="custom-button fade-in"
                  customtext="About Me"
                  path="/about"
               />
            </div>
            <div className="lorem-container">
               <div className="d-flex flex-column gap-1">
                  <div className="d-flex align-items-center justify-content-center gap-1">
                     <span
                        style={{
                           fontSize: "8px",
                           fontWeight: "bold",
                           color: "#ffffff",
                        }}
                     >
                        Copyright{" "}
                     </span>
                     <span
                        style={{
                           fontSize: "12px",
                           color: "#ffffff",
                        }}
                     >
                        {" "}
                        &copy;
                     </span>
                     <span
                        className="fw-bold"
                        style={{
                           fontSize: "8px",
                           color: "#ffffff",
                        }}
                     >
                        Aldy Mohamad
                     </span>
                  </div>
                  <div className="d-flex gap-3 align-items-center justify-content-center ">
                     <Link
                        to="https://www.instagram.com/aldybalagtown/"
                        target="_blank"
                        className="link-social"
                     >
                        <FaInstagram
                           fontSize={20}
                           className="custom-icons-social-footer"
                        />
                     </Link>

                     <Link
                        to="https://www.facebook.com/renaldi.gtown/"
                        target="_blank"
                        className="link-social"
                     >
                        <FaFacebook
                           fontSize={20}
                           className="custom-icons-social-footer"
                        />
                     </Link>

                     <Link
                        to="https://github.com/renaldimohamad"
                        target="_blank"
                        className="link-social"
                     >
                        <FaGithub
                           fontSize={20}
                           className="custom-icons-social-footer"
                        />
                     </Link>
                     <Link
                        to="https://www.linkedin.com/in/renaldimohamad/"
                        target="_blank"
                        className="link-social"
                     >
                        <FaLinkedin
                           fontSize={20}
                           className="custom-icons-social-footer"
                        />
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Index
