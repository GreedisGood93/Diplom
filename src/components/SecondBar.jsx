import { Box } from '@mui/material'
import { lightBlue, red } from '@mui/material/colors'
import React from 'react'

export default function SecondBar() {
    return (
        <Box flex={2} p={2} bgcolor='red' sx={{ display: { xs: 'none', sm: 'block' } }}>SecondBar</Box>
    )
}
