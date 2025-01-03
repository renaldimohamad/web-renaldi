import {Carousel, Col, Container, Row} from "react-bootstrap"
import {FooterPages} from "../footer"
import {useState} from "react"

const Index = () => {
   const [isExpanded, setIsExpanded] = useState(false)

   const toggleDescription = () => {
      setIsExpanded(!isExpanded)
   }

   return (
      <>
         <Container>
            <div className="fade-in">
               <div className="d-flex flex-column gap-4">
                  <h4>Portfolio Details</h4>
                  <p>
                     Welcome to Satu Klinik Mobile project details page! This
                     project is a mobile application designed to make access to
                     health services easier for users. With an intuitive
                     interface and complete features, Satu Klinik Mobile aims to
                     provide optimal user experience in managing their health
                     needs. On this page, you will find more information about
                     this project, including category, project date, and a
                     complete description of the features offered.
                  </p>
               </div>
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
                                    src="/images/satuklinik.png"
                                    alt="Todo App "
                                    className="img-portfolio-details"
                                 />
                              </Carousel.Item>
                              <Carousel.Item>
                                 <img
                                    src="/images/satuKlinik1.png"
                                    alt="Todo App "
                                    className="img-portfolio-details"
                                 />
                              </Carousel.Item>
                              <Carousel.Item>
                                 <img
                                    src="/images/satuKlinik2.png"
                                    alt="Todo App "
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
                              <h5
                                 style={{
                                    textAlign: "justify",
                                 }}
                              >
                                 Project information
                              </h5>

                              <hr />
                              <div className="d-flex gap-2">
                                 <h6>Category :</h6>
                                 <p>Satu Klinik Mobile</p>
                              </div>

                              <div className="d-flex gap-2">
                                 <h6>Project date :</h6>
                                 <p>2024</p>
                              </div>
                              <div className="d-flex gap-2">
                                 <h6>Project URl :</h6>
                                 <a
                                    href="https://github.com/satuklinik-team/satu-klinik-mobile"
                                    target="_blank"
                                    style={{
                                       textDecoration: "none",
                                    }}
                                 >
                                    <p
                                       style={{
                                          color: "rgb(28, 129, 129)",
                                          fontWeight: "bold",
                                       }}
                                    >
                                       www.satuklinik.com
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
                                 <h5
                                    style={{
                                       textAlign: "justify",
                                    }}
                                 >
                                    Description
                                 </h5>
                                 <p
                                    style={{
                                       textAlign: "justify",
                                    }}
                                 >
                                    {isExpanded
                                       ? `Satu Mobile Clinic is a mobile application
                                    designed to provide users with easy access
                                    to health services. The app has an intuitive
                                    interface and full features, allowing users
                                    to manage their health needs with ease. One
                                    of the main advantages of One Clinic is the
                                    login system that supports multi-roles.
                                    Users can log in as Admin, Doctor, or Clinic
                                    Owner, each with different access and
                                    functionality according to their role.
                                    Admins have the ability to manage user data
                                    and manage available services. Doctors can
                                    access patient information, make diagnoses,
                                    and prescribe medications. Meanwhile, the
                                    Clinic Owner can oversee all clinic
                                    operations and monitor performance. With
                                    this approach, One Mobile Clinic aims to
                                    provide an optimal experience for all users
                                    and increase efficiency in managing health
                                    services.`
                                       : `Satu Mobile Clinic is a mobile application
                                    designed to provide users with easy access
                                    to health services. The app has an intuitive
                                    interface and full features, allowing users
                                    to manage their health needs with ease.`}{" "}
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
            <Container>
               <div className="container-footer">
                  <FooterPages />
               </div>
            </Container>
         </Container>
      </>
   )
}

export default Index
