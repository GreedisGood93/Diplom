import { Favorite, FavoriteBorder, MoreVert } from '@mui/icons-material'
import { Box } from '@mui/material'
import React from 'react'
import { Post } from './Post'

export const NewsFeed = () => {
    return (
        <Box flex={4} p={2}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </Box>
    )
}
