import {useForm} from "react-hook-form"
import * as yup from "yup"
import {IContactUs} from "../types/contact-us"
import {yupResolver} from "@hookform/resolvers/yup"

export const useContactValidation = () => {
   const schema = yup.object().shape({
      yourName: yup
         .string()
         .required("Name is required")
         .min(3, "Name must be at least 3 characters long"),
      yourEmail: yup
         .string()
         .required("Email is required")
         .email("Invalid email format"),
      subject: yup.string().required("Subject is required"),
      message: yup
         .string()
         .required("Message is required")
         .min(10, "Message must be at least 10 characters long"),
   })

   return useForm<IContactUs>({
      resolver: yupResolver(schema),
      defaultValues: {
         yourName: "",
         yourEmail: "",
         subject: "",
         message: "",
      },
      reValidateMode: "onSubmit",
      mode: "all",
   })
}
