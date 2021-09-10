import { Container } from '@material-ui/core';
import React from 'react'
import Navbar from '../components/Navbar';
import Player from '../components/Player';
import Head from 'next/head'

interface MainLayoutProps {
    title?: string;
}

const MainLayout: React.FC<MainLayoutProps>
    = ({
        children,
        title
    }) => {
        return (
            <>
                <Head>
                    <title>{title || 'Bear Ear'}</title>
                </Head>
                <Navbar />
                <Container className='container'>
                    {children}
                </Container>
                <Player />
            </>
        )
    }

export default MainLayout