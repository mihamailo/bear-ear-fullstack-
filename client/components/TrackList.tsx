import { ITrack } from '../types/track';
import { Grid } from '@material-ui/core';
import TrackItem from './TrackItem';

interface TrackListProps {
    tracks: ITrack[],
}

const TrackList: React.FC<TrackListProps> = ({ tracks }) => {
    return (
        <Grid style={{ marginTop: '30px' }}>
            {tracks.map(track =>
                <TrackItem
                    key={track._id}
                    track={track} />
            )}
        </Grid>
    )
}

export default TrackList;
