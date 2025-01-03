import {forwardRef} from "react"
import {FormControl, FormControlProps} from "react-bootstrap"
import classNames from "classnames" // Gunakan classNames untuk kelas dinamis

interface InputProps extends FormControlProps {
   placeholderTextColor?: string // Prop untuk warna teks placeholder
}

const CustomInput = forwardRef<HTMLInputElement, InputProps>(
   ({placeholderTextColor = "gray", className, ...rest}, ref) => {
      // Buat kelas dinamis berdasarkan warna placeholder
      const placeholderClass = `placeholder-${placeholderTextColor}`

      return (
         <FormControl
            {...rest}
            ref={ref}
            className={classNames(className, placeholderClass)} // Gabungkan kelas
            style={{
               width: "100%",
               height: "3rem",
            }}
         />
      )
   }
)

export default CustomInput
