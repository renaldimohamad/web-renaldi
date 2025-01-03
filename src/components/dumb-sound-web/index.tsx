import {Carousel, Col, Container, Row} from "react-bootstrap"
import {FooterPages} from "../footer"
import {useState} from "react"

const Index = () => {
   const [isExpanded, setIsExpanded] = useState(false)

   const toggleDescription = () => {
      setIsExpanded(!isExpanded)
   }

   return (
      <Container>
         <div className="fade-in">
            <div className="d-flex flex-column gap-3">
               <h5>Portfolio Details</h5>
               <p>
                  Welcome to the DumbSound project details page! DumbSound is a
                  modern web application designed to provide users with an
                  intuitive and enjoyable music listening experience. With a
                  responsive interface and attractive features, users can browse
                  music collections, create playlists, and enjoy various music
                  genres with ease. On this page, you will find more information
                  about this project, including category, project date, and a
                  complete description of the features offered.
               </p>
            </div>
            <div className="className">
               <Container>
                  <Row>
                     <Col
                        md={7}
                        style={{
                           marginBottom: "2rem",
                        }}
                     >
                        <div className="container-portfolio-details">
                           <Carousel
                              controls={false}
                              style={{
                                 boxShadow:
                                    "0px  12px 45px 0px  rgba(0, 0, 0, 0.5)",
                              }}
                           >
                              <Carousel.Item>
                                 <img
                                    src="/images/dumb-sound2.png"
                                    alt="DumbSound"
                                    className="img-portfolio-details"
                                 />
                              </Carousel.Item>
                              <Carousel.Item>
                                 <img
                                    src="/images/dumb-sound.png"
                                    alt="DumbSound"
                                    className="img-portfolio-details"
                                 />
                              </Carousel.Item>
                              <Carousel.Item>
                                 <img
                                    src="/images/dumb-sound1.png"
                                    alt="DumbSound"
                                    className="img-portfolio-details"
                                 />
                              </Carousel.Item>
                           </Carousel>
                        </div>
                     </Col>
                     <Col md={5}>
                        <div className="d-flex justify-content-center flex-column gap-4">
                           <div
                              style={{
                                 border: "0px solid #1f2122",
                                 borderRadius: "6px",
                                 height: "100%",
                                 padding: "2rem",
                                 boxShadow:
                                    "0px  12px 45px 0px  rgba(0, 0, 0, 0.5)",
                              }}
                           >
                              <h5 style={{textAlign: "justify"}}>
                                 Project information
                              </h5>
                              <hr />
                              <div className="d-flex gap-2">
                                 <h6>Category :</h6>
                                 <p>DumbSound App</p>
                              </div>

                              <div className="d-flex gap-2">
                                 <h6>Project date :</h6>
                                 <p>2024</p>
                              </div>
                              <div className="d-flex gap-2">
                                 <h6>Project URL :</h6>
                                 <a
                                    href="https://github.com/renaldimohamad/DumbSound-web"
                                    target="_blank"
                                    style={{textDecoration: "none"}}
                                 >
                                    <p
                                       style={{
                                          color: "rgb(28, 129, 129)",
                                          fontWeight: "bold",
                                       }}
                                    >
                                       www.DumbSoundApp.com
                                    </p>
                                 </a>
                              </div>
                           </div>

                           <div
                              style={{
                                 display: "flex",
                                 justifyContent: "center",
                                 width: "100%",
                              }}
                           >
                              <div
                                 style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                 }}
                              >
                                 <h5 style={{textAlign: "justify"}}>
                                    Description
                                 </h5>
                                 <p style={{textAlign: "justify"}}>
                                    {isExpanded
                                       ? "DumbSound is an innovative music application designed to provide an unmatched music listening experience. The app allows users to register and log in as a regular user or admin, with each role having different access and functions. Users can explore a vast music collection, create personal playlists, and enjoy live music streaming. As an admin, you have the ability to manage music content, including adding, editing, and removing songs and albums from your collection. Additionally, DumbSound features a secure payment system, allowing users to purchase a premium subscription and enjoy a variety of additional benefits, such as ad-free access and the ability to download music to enjoy offline. With a responsive interface and interesting features, DumbSound aims to be a complete solution for music lovers."
                                       : "DumbSound is an innovative music application designed to provide an unmatched music listening experience. Users can explore a vast music collection and create personal playlists..."}{" "}
                                    {""}
                                    <span
                                       style={{
                                          color: "rgb(28, 129, 129)",
                                          cursor: "pointer",
                                          fontWeight: "bold",
                                       }}
                                       onClick={toggleDescription}
                                    >
                                       {isExpanded ? "Reed Less" : "Read More"}
                                    </span>
                                 </p>
                              </div>
                           </div>
                        </div>
                     </Col>
                  </Row>
               </Container>
            </div>
         </div>
         <Container>
            <div className="container-footer">
               <FooterPages />
            </div>
         </Container>
      </Container>
   )
}

export default Index
