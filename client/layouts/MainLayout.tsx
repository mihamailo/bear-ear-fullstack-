import { Container } from '@material-ui/core';
import React from 'react'
import Navbar from '../components/Navbar';

const MainLayout: React.FC = ({ children }) => {
    return (
        <>
            <Navbar />
            <Container className='container'>
                {children}
            </Container>
        </>
    )
}

export default MainLayout