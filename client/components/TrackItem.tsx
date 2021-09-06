import React from 'react';
import { ITrack } from '../types/track';
import s from '../styles/TrackItem.module.scss';
import IconButton from '@material-ui/core/IconButton';
import { Card } from '@material-ui/core';
import { Pause, PlayArrow } from '@material-ui/icons';

interface TrackItemProps {
    track: ITrack;
    active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({ track, active = false }) => {

    return (
        <Card className={s.track}>
            <IconButton>
                {active
                    ? <PlayArrow />
                    : <Pause />
                }
            </IconButton>
        </Card>
    )
}



export default TrackItem;
