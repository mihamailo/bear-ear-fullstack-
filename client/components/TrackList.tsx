import { ITrack } from 'types/track';
import { Grid } from '@material-ui/core';
import TrackItem from 'components/TrackItem';
import { useTypedSelector } from 'hooks/useTypedSelector';

interface TrackListProps {
    tracks: ITrack[],
}


const TrackList: React.FC<TrackListProps> = ({ tracks }) => {
    const { active, pause } = useTypedSelector(state => state.player)

    return (
        <Grid style={{ marginTop: '30px' }}>
            {tracks.map(track => {

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
