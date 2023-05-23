import { toast } from 'react-hot-toast'

export const alertSucces = (message) => toast.success(message)
export const alertError = (message) => toast.error(message)
