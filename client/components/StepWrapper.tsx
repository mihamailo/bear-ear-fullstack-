
import React from 'react';
import { Card, Container, Grid, Step, StepLabel, Stepper } from "@material-ui/core";
import s from 'styles/StepWrapper.module.scss'
interface StepWrapperProps {
    activeStep: number;
    children: any;
}
const steps = ['Track info', 'Set label', 'Load track']

const StepWrapper: React.FC<StepWrapperProps> = ({ activeStep, children }) => {
    return (
        <Container>
            <Stepper activeStep={activeStep}>
                {steps.map((step, index) =>
                    <Step
                        key={index}
                        completed={activeStep > index}
                    >
                        <StepLabel>{step}</StepLabel>
                    </Step>
                )}
            </Stepper>
            <Grid className={s.step} container justifyContent="center">
                <Card className={s.stepCard}>
                    {children}
                </Card>
            </Grid>
        </Container>
    );
};

export default StepWrapper;