import React, {useState} from "react";
import {Modal} from "./Modal";

export const ImageCell = ({src}: {src: string}) => {
    const [isOpen, setIsOpen] = useState(false)
    const handleClose = () => setIsOpen(false)

    const handleClick = (event: React.MouseEvent) => {
        event.stopPropagation()
        setIsOpen(true)
    }
    return <>
        <img src={process.env.REACT_APP_API_IMG + src} alt="poster" height={300} onClick={handleClick} />

        <Modal open={isOpen} onClose={handleClose}>
            <img src={process.env.REACT_APP_API_IMG + src} alt="poster" height={500} />
        </Modal>
    </>
}