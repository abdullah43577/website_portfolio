import Swal from "sweetalert2";

interface ToastProps {
  icon: "success" | "error" | "warning" | "info" | "question";
  title: string;
}

export const Toast = (props: ToastProps) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  Toast.fire({
    icon: props.icon,
    title: props.title,
  });
};
