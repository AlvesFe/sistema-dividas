import { AlertProps } from 'libs/AlertRespository'
import Swal from 'sweetalert2';

export default function Alert({type, title, text}: AlertProps) {
  Swal.fire({
    icon: type,
    title,
    text,
    confirmButtonColor: "#3E82FC"
  })
}
