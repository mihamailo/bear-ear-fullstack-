import { Box, Grid } from '@material-ui/core';
import { Button } from '@material-ui/core'
import React from 'react'
import MainLayout from '../layouts/MainLayout';

export default function index() {
    return (
        <MainLayout>
            <div className="main-text">
                <Box className="title" style={{ fontSize: '36px' }}>
                    Напряги свои уши, расслабляя душу
                </Box>
                <Button>click me pls</Button>
            </div>
            <style jsx>
                {`
                    .main-text {
                        margin-top: 150px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                `}
            </style>
        </MainLayout>
    )
}
