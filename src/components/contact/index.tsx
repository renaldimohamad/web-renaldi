import {
   Alert,
   Col,
   Container,
   FormControl,
   FormText,
   Row,
} from "react-bootstrap"
import CustomInput from "../../assets/common/custom-input"
import {CustomButton} from "../../assets/common/custom-button"
import {IoLocationOutline} from "react-icons/io5"
import {LuPhone} from "react-icons/lu"
import {TfiEmail} from "react-icons/tfi"
import {FooterPages} from "../footer"
import {useContactValidation} from "../../services/use-contact-validation"
import {IContactUs} from "../../types/contact-us"
import {Controller} from "react-hook-form"
import emailjs from "emailjs-com"
import {useState} from "react"
import "./contact.css"

const Index = () => {
   const {
      control,
      handleSubmit,
      reset,
      formState: {errors},
   } = useContactValidation()
   const [alert, setAlert] = useState({
      show: false,
      message: "",
      type: "",
   })

   const onSubmit = (data: IContactUs) => {
      const templateParams = {
         to_name: "Renaldi Mohamad",
         from_name: data.yourName,
         from_email: data.yourEmail,
         subject: data.subject,
         message: data.message,
      }

      emailjs
         .send(
            "service_hkn968x",
            "template_xwurrdi",
            templateParams,
            "EZUSTtzLsu7yWYdOP"
         )
         .then(
            (result) => {
               result.text

               setAlert({
                  show: true,
                  message: "Email sent successfully",
                  type: "success",
               })

               const timer = setTimeout(() => {
                  setAlert({...alert, show: false})
               }, 3000)

               return () => clearTimeout(timer)
            },
            (error) => {
               setAlert({
                  show: true,
                  message: "Error sending email",
                  type: "danger",
               })

               throw error
            }
         )

      reset()
   }
   return (
      <>
         <form onSubmit={handleSubmit(onSubmit)}>
            <div className="container fade-in">
               <div className="className">
                  <div className="d-flex flex-column gap-3">
                     <h4 className="">Contact</h4>

                     <p className="">
                        Thank you for visiting my portfolio! If you have
                        questions, project ideas, or want to discuss further
                        about collaboration, don't hesitate to contact me. I
                        will be happy to answer your message as quickly as
                        possible.
                     </p>
                  </div>
                  <Container>
                     <Row
                        className="d-flex"
                        style={{
                           width: "100%",
                        }}
                     >
                        <Col
                           md={5}
                           sm={12}
                           style={{
                              marginBottom: "2rem",
                           }}
                        >
                           <div
                              style={{
                                 border: "0px solid #1f2122",
                                 borderRadius: "6px",
                                 height: "100%",
                                 padding: "2rem",
                                 boxShadow: "0px 12px 40px rgba(0, 0, 0, 0.5)",
                              }}
                           >
                              <div className="d-flex flex-column gap-4">
                                 <div className="d-flex gap-3">
                                    <div className="icons-contact">
                                       <IoLocationOutline fontSize={25} />
                                    </div>
                                    <div className="d-flex flex-column">
                                       <span
                                          className=""
                                          style={{
                                             textAlign: "justify",
                                          }}
                                       >
                                          Address
                                       </span>
                                       <span
                                          className=""
                                          style={{
                                             fontSize: "12px",
                                          }}
                                       >
                                          Jakarta, Indonesia
                                       </span>
                                    </div>
                                 </div>

                                 <div className="d-flex gap-3">
                                    <a
                                       href="https://wa.me/6282195597549?text=Halo%20Renaldi,%20saya%20ingin%20berdiskusi."
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       style={{
                                          textDecoration: "none",
                                          color: "inherit",
                                       }}
                                    >
                                       <div className="icons-contact">
                                          <LuPhone fontSize={25} />
                                       </div>
                                    </a>
                                    <div className="d-flex flex-column">
                                       <span
                                          style={{
                                             textAlign: "justify",
                                          }}
                                       >
                                          Call Me
                                       </span>
                                       <span
                                          style={{
                                             fontSize: "12px",
                                          }}
                                       >
                                          +62 821 9559 7549
                                       </span>
                                    </div>
                                 </div>

                                 <div className="d-flex gap-3">
                                    <a
                                       href="mailto:renaldi77@gmail.com?subject=Halo%20Renaldi&body=Saya%20ingin%20berdiskusi%20lebih%20lanjut."
                                       target="_blank"
                                       style={{
                                          textDecoration: "none",
                                          color: "inherit",
                                       }}
                                    >
                                       <div className="icons-contact">
                                          <TfiEmail fontSize={25} />
                                       </div>
                                    </a>
                                    <div className="d-flex flex-column">
                                       <span
                                          style={{
                                             textAlign: "justify",
                                          }}
                                       >
                                          Email
                                       </span>
                                       <span
                                          style={{
                                             fontSize: "12px",
                                          }}
                                       >
                                          renaldi77@gmail.com
                                       </span>
                                    </div>
                                 </div>

                                 <div
                                    className="map-container"
                                    style={{
                                       borderRadius: "5px",
                                       overflow: "hidden",
                                    }}
                                 >
                                    <iframe
                                       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31730.430148994853!2d106.7325766!3d-6.3013588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1202c227c7f%3A0x55b285547291a43f!2sDumbWays%20Indonesia%20(Bintaro)!5e0!3m2!1sid!2sid!4v1696083640801!5m2!1sid!2sid"
                                       width="100%"
                                       height="300"
                                       style={{border: 0}}
                                       loading="lazy"
                                       referrerPolicy="no-referrer-when-downgrade"
                                       title="Google Maps"
                                    ></iframe>
                                 </div>
                              </div>
                           </div>
                        </Col>
                        <Col
                           md={7}
                           sm={12}
                           style={{
                              marginBottom: "2rem",
                           }}
                        >
                           {alert.show && (
                              <div
                                 style={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                 }}
                              >
                                 <Alert
                                    variant={alert.type}
                                    onClose={() =>
                                       setAlert({...alert, show: false})
                                    }
                                    dismissible
                                 >
                                    {alert.message}
                                 </Alert>
                              </div>
                           )}
                           <div
                              style={{
                                 border: "0px solid #1f2122",
                                 borderRadius: "6px",
                                 height: "100%",
                                 padding: "2rem",
                                 boxShadow: "0px 12px 40px rgba(0, 0, 0, 0.5)",
                              }}
                           >
                              <div className="d-flex flex-column gap-5">
                                 <Row className="d-flex">
                                    <Col md={6} sm={12}>
                                       <Controller
                                          name="yourName"
                                          control={control}
                                          render={({field}) => (
                                             <>
                                                <CustomInput
                                                   className="form-control-name"
                                                   placeholder="Your Name"
                                                   type="text"
                                                   {...field}
                                                />
                                                {errors.yourName && (
                                                   <FormText
                                                      className="text-danger mt-2"
                                                      style={{
                                                         textAlign: "justify",
                                                      }}
                                                   >
                                                      {errors.yourName.message}
                                                   </FormText>
                                                )}
                                             </>
                                          )}
                                       />
                                    </Col>
                                    <Col md={6} sm={12}>
                                       <Controller
                                          control={control}
                                          name="yourEmail"
                                          render={({field}) => (
                                             <>
                                                <CustomInput
                                                   placeholder="Your Email"
                                                   type="email"
                                                   {...field}
                                                />
                                                {errors.yourEmail && (
                                                   <FormText
                                                      className="text-danger mt-2"
                                                      style={{
                                                         textAlign: "justify",
                                                      }}
                                                   >
                                                      {errors.yourEmail.message}
                                                   </FormText>
                                                )}
                                             </>
                                          )}
                                       />
                                    </Col>
                                 </Row>
                                 <div className="d-flex flex-column gap-2">
                                    <Controller
                                       control={control}
                                       name="subject"
                                       render={({field}) => (
                                          <>
                                             <CustomInput
                                                placeholder="Subject"
                                                {...field}
                                             />
                                             {errors.subject && (
                                                <FormText
                                                   className="text-danger"
                                                   style={{
                                                      textAlign: "justify",
                                                   }}
                                                >
                                                   {errors.subject.message}
                                                </FormText>
                                             )}
                                          </>
                                       )}
                                    />
                                 </div>

                                 <div className="d-flex flex-column gap-2">
                                    <Controller
                                       control={control}
                                       name="message"
                                       render={({field}) => (
                                          <>
                                             <FormControl
                                                as="textarea"
                                                placeholder="Message"
                                                style={{height: "200px"}}
                                                {...field}
                                             />
                                             {errors.message && (
                                                <FormText
                                                   className="text-danger"
                                                   style={{
                                                      textAlign: "justify",
                                                      marginTop: "0",
                                                   }}
                                                >
                                                   {errors.message.message}
                                                </FormText>
                                             )}
                                          </>
                                       )}
                                    />
                                 </div>

                                 <div className="d-flex justify-content-center">
                                    <CustomButton
                                       className="custom-button-message"
                                       customtext="Send Message"
                                       type="submit"
                                    />
                                 </div>
                              </div>
                           </div>
                        </Col>
                     </Row>
                  </Container>
               </div>
               <div className="container-footer">
                  <FooterPages />
               </div>
            </div>
         </form>
      </>
   )
}

export default Index
