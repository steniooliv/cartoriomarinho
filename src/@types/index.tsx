export interface ModalProps{
  id: number,
  isOpen: boolean
  handleClose: () => void 
}

export interface ServicesCardProps {
  index: number
  icon: string,
  title: string,
  description: string
}