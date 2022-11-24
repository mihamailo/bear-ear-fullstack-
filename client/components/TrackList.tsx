import { ITrack } from 'types/track';
import { Grid } from '@material-ui/core';
import TrackItem from 'components/TrackItem';
import { useTypedSelector } from 'hooks/useTypedSelector';

const TrackList = () => {
    const { active, pause } = useTypedSelector(state => state.playerSliceReducer);
    const { tracks } = useTypedSelector(state => state.trackSliceReducer);

    return (
        <Grid style={{ marginTop: '30px' }}>
            {tracks && tracks.map(track => {

                return (<TrackItem
                    key={track._id}
                    track={track}
                    active={active?._id === track?._id}
                    pause={pause}
                />)
            }
            )}
        </Grid>
    )
}

export default TrackList;
