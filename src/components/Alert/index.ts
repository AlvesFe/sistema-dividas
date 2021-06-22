import { AlertProps } from 'libs/AlertRespository'
import Swal from 'sweetalert2';

export default function Alert({type, text}: AlertProps) {

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  })

  Toast.fire({
    icon: type,
    title: text
  })
}
