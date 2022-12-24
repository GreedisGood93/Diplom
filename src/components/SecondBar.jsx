import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, ImageListItemBar, Typography } from '@mui/material'
import React from 'react'
const likedPublication = [
    {
        img: "https://s9.travelask.ru/uploads/post/000/028/951/main_image/full-ddb952e3d12b86c0777d1dca68a199e9.jpg",
        title: 'Food',
        author: 'Gadzhiev Aziz'
    },
    {
        img: "https://s9.travelask.ru/uploads/post/000/028/951/main_image/full-ddb952e3d12b86c0777d1dca68a199e9.jpg",
        title: 'Food',
        author: 'Gadzhiev Aziz'
    },
    {
        img: "https://s9.travelask.ru/uploads/post/000/028/951/main_image/full-ddb952e3d12b86c0777d1dca68a199e9.jpg",
        title: 'Food',
        author: 'Gadzhiev Aziz'
    },
    {
        img: "https://s9.travelask.ru/uploads/post/000/028/951/main_image/full-ddb952e3d12b86c0777d1dca68a199e9.jpg",
        title: 'Food',
        author: 'Gadzhiev Aziz'
    },
    {
        img: "https://s9.travelask.ru/uploads/post/000/028/951/main_image/full-ddb952e3d12b86c0777d1dca68a199e9.jpg",
        title: 'Food',
        author: 'Gadzhiev Aziz'
    },
    {
        img: "https://s9.travelask.ru/uploads/post/000/028/951/main_image/full-ddb952e3d12b86c0777d1dca68a199e9.jpg",
        title: 'Food',
        author: 'Gadzhiev Aziz'
    },
    {
        img: "https://s9.travelask.ru/uploads/post/000/028/951/main_image/full-ddb952e3d12b86c0777d1dca68a199e9.jpg",
        title: 'Food',
        author: 'Gadzhiev Aziz'
    },
]
export default function SecondBar() {
    return (
        <Box flex={2} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Box position='fixed'>
                <Typography variant='h4' fontWeight={300}>Друзья</Typography>
                <AvatarGroup max={7} sx={{ marginTop: 2 }}>
                    <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                    <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
                    <Avatar alt='Matvey Ulitskiy' src='' />
                    <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
                    <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/4.jpg" />
                    <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/5.jpg" />
                    <Avatar alt='Matvey Ulitskiy' src='' />
                    <Avatar alt='Matvey Ulitskiy' src='' />
                    <Avatar alt='Matvey Ulitskiy' src='' />
                </AvatarGroup>
                <Typography mt={3} variant='h4' fontWeight={300}>Понравившиеся</Typography>
                <Box mt={3}>
                    <ImageList sx={{ width: '100%', height: 450 }}>
                        {likedPublication.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                                <ImageListItemBar
                                    title={item.title}
                                    subtitle={<span>by: {item.author}</span>}
                                    position="below"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>
            </Box>
        </Box>
    )
}
