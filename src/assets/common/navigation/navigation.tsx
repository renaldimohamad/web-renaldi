import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Offcanvas from "react-bootstrap/Offcanvas"
import "./custom-navigation-pages.css"
import {IoIosContact, IoMdInformationCircle} from "react-icons/io"
import {IoClose, IoHome} from "react-icons/io5"
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa"
import {CustomButton} from "../custom-button"
import {Link, useLocation} from "react-router-dom"
import {RxHamburgerMenu, RxResume} from "react-icons/rx"
import photos from "../../../../public/images/photos-nav.jpg"
import {Image} from "react-bootstrap"
import {useState} from "react"

const Index = () => {
   const location = useLocation()
   const [show, setShow] = useState(false)

   const handleToggle = () => setShow((prev) => !prev)

   return (
      <div className="container-nav">
         {["sm"].map((expand) => (
            <Navbar
               key={expand}
               expand={expand}
               className="mb-3 shadow-lg"
               style={{
                  backgroundColor: "#e9e8e6",
               }}
            >
               <div className="container-navbar">
                  <Container fluid>
                     <Navbar.Brand href="#">
                        <div>
                           <Image
                              src={photos}
                              alt="logo"
                              style={{borderRadius: "50%"}}
                              width={50}
                              height={50}
                           />
                        </div>
                     </Navbar.Brand>
                     <div
                        onClick={handleToggle}
                        style={{cursor: "pointer"}}
                        className="d-lg-none d-md-none d-sm-block"
                     >
                        <RxHamburgerMenu fontSize={26} color="gray" />
                     </div>
                     <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                        show={show}
                        onHide={() => setShow(false)}
                        className="nav-custom"
                     >
                        <Offcanvas.Header className="nav-header">
                           <Offcanvas.Title
                              id={`offcanvasNavbarLabel-expand-${expand}`}
                           >
                              <Image
                                 src={photos}
                                 alt="logo"
                                 style={{borderRadius: "50%"}}
                                 width={50}
                                 height={50}
                              />
                           </Offcanvas.Title>
                           <IoClose
                              onClick={() => setShow(false)}
                              style={{
                                 cursor: "pointer",
                                 fontSize: 30,
                                 color: "gray",
                              }}
                           />
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                           <Nav className="justify-content-end flex-grow-1 pe-3">
                              <div className="nav-list">
                                 <div className="d-flex align-items-center gap-2">
                                    <IoHome className="icon-info" />
                                    <CustomButton
                                       path="/"
                                       customtext="Home"
                                       className={`custom-button-link ${
                                          location.pathname === "/"
                                             ? "active"
                                             : ""
                                       }`}
                                    />
                                 </div>

                                 <div className="d-flex align-items-center gap-2">
                                    <IoMdInformationCircle className="icon-info" />
                                    <CustomButton
                                       path="/about"
                                       customtext="About"
                                       className={`custom-button-link ${
                                          location.pathname === "/about"
                                             ? "active"
                                             : ""
                                       }`}
                                    />
                                 </div>

                                 <div className="d-flex align-items-center gap-2 container-info">
                                    <RxResume className="icon-info" />
                                    <CustomButton
                                       path="/portfolio"
                                       customtext="Portfolio"
                                       className={`custom-button-link ${
                                          location.pathname === "/portfolio"
                                             ? "active"
                                             : ""
                                       }`}
                                    />
                                 </div>
                                 <div className="d-flex align-items-center gap-2">
                                    <IoIosContact className="icon-info" />
                                    <CustomButton
                                       path="/contact"
                                       customtext="Contact"
                                       className={`custom-button-link ${
                                          location.pathname === "/contact"
                                             ? "active"
                                             : ""
                                       }`}
                                    />
                                 </div>
                              </div>
                              <div className="d-flex align-items-center gap-3 container-icons-social">
                                 <Link
                                    to="https://www.instagram.com/aldybalagtown/"
                                    target="_blank"
                                    className="link-social"
                                 >
                                    <FaInstagram
                                       fontSize={20}
                                       className="custom-icons-social"
                                    />
                                 </Link>
                                 <Link
                                    to="https://www.facebook.com/renaldi.gtown/"
                                    target="_blank"
                                    className="link-social"
                                 >
                                    <FaFacebook
                                       fontSize={20}
                                       className="custom-icons-social"
                                    />
                                 </Link>
                                 <Link
                                    to="https://github.com/renaldimohamad"
                                    target="_blank"
                                    className="link-social"
                                 >
                                    <FaGithub
                                       fontSize={20}
                                       className="custom-icons-social"
                                    />
                                 </Link>
                                 <Link
                                    to="https://www.linkedin.com/in/renaldimohamad/"
                                    target="_blank"
                                    className="link-social"
                                 >
                                    <FaLinkedin
                                       fontSize={20}
                                       className="custom-icons-social"
                                    />
                                 </Link>
                              </div>
                           </Nav>
                        </Offcanvas.Body>
                     </Navbar.Offcanvas>
                  </Container>
               </div>
            </Navbar>
         ))}
      </div>
   )
}

export default Index
