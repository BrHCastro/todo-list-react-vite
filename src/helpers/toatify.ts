import { ToastOptions } from "react-toastify";

export const toastOptions: ToastOptions = {
  className: "toast",
  position: "bottom-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
  style: {
    backgroundColor: "var(--shape)",
  },
}
