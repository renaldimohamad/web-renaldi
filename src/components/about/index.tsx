import {Col, Container, Image, Row} from "react-bootstrap"
import "./about.css"
import {IoIosArrowForward} from "react-icons/io"
import {AboutPages} from "../../pages/about/about-pages"
import React from "react"
import {FooterPages} from "../footer"

const Index = () => {
   const aboutBioData = [
      {
         birthday: "20 Aug 1999",
         age: "25",
         location: "South Jakarta",
         phone: "+62 821 9559 7549",
         email: "renaldi77@gmail.com",
         freelance: "Available",
      },
   ]

   return (
      <>
         <div className="container fade-in">
            <div className="d-flex flex-column ">
               <div className="d-flex flex-column gap-2">
                  <h4>About</h4>
                  <p>
                     Experienced Web and Mobile Developer crafting responsive
                     websites and intuitive apps, combining creativity and
                     technical expertise to deliver solutions
                  </p>
               </div>
               <Container>
                  <Row className="d-flex">
                     <Col md={4} sm={12}>
                        <div
                           style={{
                              width: "100%",
                              height: "100%",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                           }}
                        >
                           <Image
                              src="/images/photos-bg.jpeg"
                              style={{
                                 width: "90%",
                                 height: "95%",
                                 borderRadius: "10px",
                                 boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                              }}
                           />
                        </div>
                     </Col>
                     <Col md={8} sm={12}>
                        <div className="d-flex flex-column gap-4">
                           <div
                              className="d-flex gap-2 "
                              style={{
                                 textAlign: "justify",
                              }}
                           >
                              <span className="fw-bold fs-6">
                                 Web Developer & Mobile Developer
                              </span>
                           </div>
                           <div className="d-flex">
                              <span
                                 style={{
                                    textAlign: "justify",
                                 }}
                              >
                                 I am an experienced Web and Mobile Developer,
                                 passionate about delivering cutting-edge
                                 solutions that combine functionality and
                                 design. My expertise lies in building
                                 user-centric applications that cater to diverse
                                 industries, leveraging the latest tools and
                                 technologies. I am committed to continuous
                                 improvement, ensuring that every project meets
                                 the highest standards of quality and
                                 innovation.
                              </span>
                           </div>
                           <Row className="d-flex align-items-center ">
                              {aboutBioData.map((data, index) => (
                                 <React.Fragment key={index}>
                                    <Col
                                       md={6}
                                       sm={12}
                                       className="d-flex row-about-bio"
                                    >
                                       <div className="d-flex flex-column gap-2">
                                          <div className="d-flex gap-2 align-items-center">
                                             <IoIosArrowForward
                                                style={{
                                                   color: "rgb(22, 194, 194)",
                                                }}
                                             />
                                             <span style={{fontWeight: "bold"}}>
                                                Birthday {""}:
                                             </span>
                                             <span>{data.birthday}</span>
                                          </div>

                                          <div className="d-flex gap-2 align-items-center">
                                             <IoIosArrowForward
                                                style={{
                                                   color: "rgb(22, 194, 194)",
                                                }}
                                             />
                                             <span style={{fontWeight: "bold"}}>
                                                Phone {""}:
                                             </span>
                                             <span>{data.phone}</span>
                                          </div>
                                          <div className="d-flex gap-2 align-items-center">
                                             <IoIosArrowForward
                                                style={{
                                                   color: "rgb(22, 194, 194)",
                                                }}
                                             />
                                             <span style={{fontWeight: "bold"}}>
                                                City {""}:
                                             </span>
                                             <span>{data.location}</span>
                                          </div>
                                       </div>
                                    </Col>
                                    <Col md={6} sm={12}>
                                       <div className="d-flex flex-column gap-2">
                                          <div className="d-flex gap-2 align-items-center">
                                             <IoIosArrowForward
                                                style={{
                                                   color: "rgb(22, 194, 194)",
                                                }}
                                             />
                                             <span style={{fontWeight: "bold"}}>
                                                Age {""}:
                                             </span>
                                             <span>{data.age}</span>
                                          </div>

                                          <div className="d-flex gap-2 align-items-center">
                                             <IoIosArrowForward
                                                style={{
                                                   color: "rgb(22, 194, 194)",
                                                }}
                                             />
                                             <span style={{fontWeight: "bold"}}>
                                                Email {""}:
                                             </span>
                                             <span>{data.email}</span>
                                          </div>
                                          <div className="d-flex gap-2 align-items-center">
                                             <IoIosArrowForward
                                                style={{
                                                   color: "rgb(22, 194, 194)",
                                                }}
                                             />
                                             <span style={{fontWeight: "bold"}}>
                                                Freelance {""}:
                                             </span>
                                             <span>{data.freelance}</span>
                                          </div>
                                       </div>
                                    </Col>
                                 </React.Fragment>
                              ))}
                           </Row>

                           <div className="d-flex mt-2">
                              <p
                                 style={{
                                    textAlign: "justify",
                                 }}
                              >
                                 As a dedicated and passionate Web and Mobile
                                 Developer, I specialize in creating innovative
                                 and user-friendly applications that bridge the
                                 gap between technology and everyday needs. With
                                 a strong foundation in modern development
                                 frameworks like aim to deliver solutions that
                                 are both functional and visually appealing. My
                                 journey in software development is driven by a
                                 curiosity to solve complex problems and provide
                                 seamless digital experiences. Whether it's
                                 crafting responsive web designs or developing
                                 intuitive mobile interfaces, I am committed to
                                 achieving excellence in every project. I
                                 believe in continuous learning and adapting to
                                 emerging technologies to stay ahead in this
                                 ever-evolving industry. Collaboration and
                                 communication are at the core of my work ethic,
                                 ensuring that every project aligns perfectly
                                 with client expectations and user needs. My
                                 ultimate goal is to contribute to meaningful
                                 projects that make a difference in people’s
                                 lives.
                              </p>
                           </div>
                        </div>
                     </Col>
                  </Row>
               </Container>
               <div className="about-pages">
                  <AboutPages />
               </div>
               <div className="container-footer">
                  <FooterPages />
               </div>
            </div>
         </div>
      </>
   )
}

export default Index
