import {GridRenderCellParams, GridTreeNodeWithRender} from "@mui/x-data-grid";
import {Stack, StackProps, styled} from "@mui/material";
import React, {useState} from "react";
import {Modal} from "./Modal";


const StyledCell = styled(Stack)({
    minHeight: '99px',
    maxHeight: '300px',
    justifyContent: 'center'
})

export const DefaultCell = ({children, ...props}: StackProps) => {
    return <StyledCell {...props}>{children}</StyledCell>
}

export const Cell = (data:  GridRenderCellParams<any, any, any, GridTreeNodeWithRender>) => {
    return <DefaultCell>{data.value}</DefaultCell>
}

const StyledImg = styled('img')({
    cursor: 'pointer',
})

export const ImageCell = ({src}: {src: string}) => {
    const [isOpen, setIsOpen] = useState(false)
    const handleClose = () => setIsOpen(false)

    const handleClick = (event: React.MouseEvent) => {
        event.stopPropagation()
        setIsOpen(true)
    }
    return <>
        <StyledImg src={process.env.REACT_APP_API_IMG + src} alt="poster" height={300} onClick={handleClick} />

        <Modal open={isOpen} onClose={handleClose}>
            <img src={process.env.REACT_APP_API_IMG + src} alt="poster" height={500} />
        </Modal>
    </>
}

export const OriginalIdCell = styled(DefaultCell)(({theme}) => ({
    fontWeight: 'bold',
    color: theme.palette.primary.main,
}))

export const OriginalTitleCell = styled(DefaultCell)({
    fontWeight: 'bold',
    fontFamily: "'Raleway', sans-serif",
})
export const OriginalLanguageCell = styled(DefaultCell)({
    textTransform: "uppercase",
})

export const OriginalDateCell = styled(DefaultCell)({
    fontFamily: "'Playfair Display', serif",
})

export const OriginalVoteCell = styled(DefaultCell)({
    color: 'red',
})


