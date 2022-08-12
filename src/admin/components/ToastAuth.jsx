import { Toast } from 'primereact/toast';

export const ToastAuth = ({ severity }) => {

  const toast = useRef(null);

  const showSuccess = () => {
    toast.current.show({severity:'success', summary: 'Success Message', detail:'Message Content', life: 3000});
}

  return (
    <div>
      <Toast ref={toast} />

      {
        severity === 'success'

      }

      ToastAuth
    </div>
  )
}
