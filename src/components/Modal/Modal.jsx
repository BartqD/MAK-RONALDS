import { useEffect, useRef } from 'react'
import classes from './Modal.module.css'
import { createPortal } from 'react-dom'
import ReactDOM from 'react-dom'


const overlays = document.getElementById('overlays')

const Modal = ({children, open, className=''}) => {
const dialogRef = useRef(open)



useEffect(() => {
	if (open) {
		dialogRef.current.showModal()
	}

  },[open])

	return (
		createPortal(<dialog ref={dialogRef} className={`${classes.modal} ${className} `} >{children}</dialog>, documentGetElementById('modal'))
	)
}

export default Modal
