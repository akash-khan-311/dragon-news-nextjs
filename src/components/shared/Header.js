import { Box, Container } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import HeadingImage from '@/assets/The Dragon News.png'
const Header = () => {
    return (
        <Box>
            <Container>
                <Image width={400} height={400} src={HeadingImage} alt='The Dragon News'/>
            </Container>
        </Box>
    );
};

export default Header;