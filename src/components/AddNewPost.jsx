import { Add } from '@mui/icons-material'
import { Fab, Tooltip } from '@mui/material'
import React from 'react'

export const AddNewPost = () => {
    return (
        <>
            <Tooltip title="Добавить" >
                <Fab color="primary" aria-label="add">
                    <Add />
                </Fab>
            </Tooltip>
        </>
    )
}
