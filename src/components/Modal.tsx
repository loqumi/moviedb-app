import { IconButton, Modal as MUIModal, ModalProps, Paper, Stack, styled } from '@mui/material'
import React from 'react'
import { Close } from '@mui/icons-material'

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
}))

const StyledModal = styled(MUIModal)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
})

export const Modal = ({
    children,
    ...props
}: { children: React.ReactNode; onClose: () => void } & Omit<ModalProps, 'children' | 'onClose'>) => {
    const handleClick = () => props.onClose()

    return (
        <StyledModal {...props}>
            <StyledPaper>
                <Stack alignItems="flex-end" spacing={2}>
                    <IconButton onClick={handleClick}>
                        <Close />
                    </IconButton>
                    {children}
                </Stack>
            </StyledPaper>
        </StyledModal>
    )
}
