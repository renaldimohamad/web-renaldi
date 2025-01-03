import {FaFacebook, FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa"
import {Link} from "react-router-dom"

export const FooterPages = () => {
   return (
      <>
         <div className="d-flex flex-column gap-1">
            <div className="d-flex align-items-center justify-content-center gap-1">
               <span
                  style={{
                     fontSize: "8px",
                     fontWeight: "bold",
                  }}
               >
                  Copyright{" "}
               </span>
               <span
                  style={{
                     fontSize: "12px",
                  }}
               >
                  {" "}
                  &copy;
               </span>
               <span
                  className="fw-bold"
                  style={{
                     fontSize: "8px",
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
      </>
   )
}
