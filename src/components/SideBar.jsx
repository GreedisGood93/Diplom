import { AccountBox, DarkMode, Home, Message, PeopleAlt } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'

export const SideBar = () => {
    return (
        <Box flex={1} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Box position='fixed'>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href='#home'>
                            <ListItemIcon >
                                <Home fontSize='large' />
                            </ListItemIcon>
                            <ListItemText primary="Главная" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href='#home'>
                            <ListItemIcon >
                                <PeopleAlt fontSize='large' />
                            </ListItemIcon>
                            <ListItemText primary="Друзья" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href='#home'>
                            <ListItemIcon >
                                <Message fontSize='large' />
                            </ListItemIcon>
                            <ListItemText primary="Сообщения" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href='#home'>
                            <ListItemIcon >
                                <AccountBox fontSize='large' />
                            </ListItemIcon>
                            <ListItemText primary="Профиль" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href='#home'>
                            <ListItemIcon >
                                <DarkMode fontSize='large' />
                            </ListItemIcon>
                            <Switch />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box >
    )
}
