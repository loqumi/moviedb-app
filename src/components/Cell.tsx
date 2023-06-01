import {GridRenderCellParams, GridTreeNodeWithRender} from "@mui/x-data-grid";
import {Stack, StackProps, styled, Typography, TypographyProps} from "@mui/material";
import React, {useState} from "react";
import {Modal} from "./Modal";


const StyledCell = styled(Stack)({
    maxHeight: '300px',
    minHeight: '100px',
    width: '100%',
    justifyContent: 'center'
})

export const DefaultCell = ({children, ...props}: StackProps) => {
    return <StyledCell {...props}>{children}</StyledCell>
}

export const DefaultTextCell = ({children, ...props}: TypographyProps) => {
    return <DefaultCell><Typography sx={{textWrap: 'wrap'}} {...props}>{children}</Typography></DefaultCell>
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

export const OriginalTitleCell = styled(DefaultTextCell)({
    fontWeight: 'bold',
    fontFamily: "'Raleway', sans-serif",
})
export const OriginalLanguageCell = styled(DefaultTextCell)({
    textTransform: "uppercase",
})

export const OriginalDateCell = styled(DefaultTextCell)({
    fontFamily: "'Playfair Display', serif",
})

export const OriginalVoteCell = styled(DefaultTextCell)({
    color: 'red',
})


