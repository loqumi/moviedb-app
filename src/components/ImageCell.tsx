import React from "react";

export const ImageCell = ({src}: {src: string}) => {
    const handleClick = (event: React.MouseEvent) => {
        event.stopPropagation()
        console.log('click!')
    }
    return <img src={process.env.REACT_APP_API_IMG + src} alt="poster" height={300} onClick={handleClick} />
}