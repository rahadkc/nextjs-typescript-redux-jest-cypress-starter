import toast, { ToastOptions, ToastType, Toaster } from 'react-hot-toast'

const showToast = ({
  type,
  message,
  options,
}: {
  type: ToastType
  message: string
  options?: ToastOptions
}) => {
  //@ts-ignore
  toast[type](message, options)
}

export { toast, Toaster, showToast }
