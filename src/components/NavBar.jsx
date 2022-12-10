import { Mail, Notifications, Spoke } from '@mui/icons-material'
import { AppBar, Box, Toolbar, Typography, styled, InputBase, Badge, Avatar } from '@mui/material'
import React from 'react'
const MyToolBar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
})
const SearchInp = styled('div')(({ theme }) => ({
    backgroundColor: 'white',
    padding: '0 10px',
    borderRadius: theme.shape.borderRadius,
    width: '40%'
}))
const IconsBar = styled(Box)(({ theme }) => ({
    display: 'none', gap: '20px', alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
        display: 'flex'
    }
}))
const IconsBarSmall = styled(Box)(({ theme }) => ({
    display: 'flex', gap: '10px', alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
        display: 'none'
    }
}))

export const NavBar = () => {
    return (
        <AppBar position='sticky'>
            <MyToolBar>
                <Typography variant='h4' sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <Spoke fontSize='large' />
                    Social network</Typography>
                <Spoke sx={{ display: { xs: 'block', sm: 'none' } }} />
                <SearchInp>
                    <InputBase placeholder='Поиск...' />
                </SearchInp>
                <IconsBar>
                    <Badge badgeContent={3} color='error'>
                        <Mail fontSize='large' />
                    </Badge>
                    <Badge badgeContent={2} color='error' >
                        <Notifications fontSize='large' />
                    </Badge>
                    <Badge>
                        <Avatar sx={{ width: 30, height: 30 }}>AG</Avatar>
                    </Badge>
                </IconsBar>
                <IconsBarSmall>
                    <Typography>Aziz Gadzhiev</Typography>
                </IconsBarSmall>
            </MyToolBar>
        </AppBar>
    )
}
