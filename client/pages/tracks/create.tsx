import { Box, Button, Grid } from '@material-ui/core';
import React, { useState } from 'react'
import MainLayout from '../../layouts/MainLayout';
import StepWrapper from '../../components/StepWrapper';
import { TextField } from '@material-ui/core';
import FileUpload from '../../components/FileUpload';
import { useInput } from '../../hooks/useInput';
import axios from 'axios';
import { useRouter } from 'next/dist/client/router';
import { baseUrl } from '../../components/baseURL';

function create() {
    const [activeStep, setActiveStep] = useState(0)
    const [image, setImage] = useState(null)
    const [audio, setAudio] = useState(null)
    const name = useInput('')
    const artist = useInput('')
    const text = useInput('')
    const router = useRouter()

    const next = () => {
        if (activeStep < 2) {
            setActiveStep(prev => prev + 1)
        } else {
            const formData = new FormData()
            formData.append('name', name.value)
            formData.append('text', text.value)
            formData.append('artist', artist.value)
            formData.append('image', image)
            formData.append('audio', audio)
            axios.post(`${baseUrl}/tracks`, formData)
                .then(res => router.push('/tracks'))
                .catch(err => console.error(err))
        }
    }
    const back = () => {
        setActiveStep(prev => prev - 1)
    }

    return (
        <div>
            <MainLayout title={'Bear Ear - Load Track'}>
                <StepWrapper activeStep={activeStep}>
                    {activeStep === 0 &&
                        <Grid direction='column' container style={{ padding: 15 }}>
                            <TextField
                                {...name}
                                variant='outlined'
                                style={{ marginBottom: 10 }}
                                label={'Track name'}
                            />
                            <TextField
                                {...artist}
                                variant='outlined'
                                style={{ marginBottom: 10 }}
                                label={'Artist'}
                            />
                            <TextField
                                {...text}
                                variant='outlined'
                                label={'Lyrics'}
                                multiline
                                rows={3}
                            />
                        </Grid>
                    }
                    {activeStep === 1 &&
                        <FileUpload setFile={setImage} accept='images/*'>
                            <Button>
                                Load Image
                            </Button>
                        </FileUpload>
                    }
                    {activeStep === 2 &&
                        <FileUpload setFile={setAudio} accept='audio/*'>
                            <Button>
                                Load track
                            </Button>
                        </FileUpload>
                    }
                </StepWrapper>
                <Grid container justifyContent='center'>
                    <Button onClick={back} disabled={activeStep < 1}>
                        Back
                    </Button>
                    <Button onClick={next}>
                        Next
                    </Button>
                </Grid>
            </MainLayout>
        </div >
    )
}

export default create
