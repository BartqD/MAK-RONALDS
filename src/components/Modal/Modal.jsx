import { useEffect, useRef } from 'react'
import classes from './Modal.module.css'
import { createPortal } from 'react-dom'

const Modal = ({children, open, className='', onClose}) => {
const dialogRef = useRef(open)

useEffect(() => {
	const modal = dialogRef.current
	if (open) {
		modal.showModal()
	} 
	return () =>  modal.close() ;
  },[open])

	return (
		createPortal(<dialog ref={dialogRef} className={`${classes.modal} ${className} `} onClose={onClose} >{children}</dialog>, document.getElementById('modal'))
	)
}

export default Modal
