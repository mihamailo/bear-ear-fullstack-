import React from 'react'

interface TrackProgressProps {
    left: number;
    right: number;
    onChange: (e) => void;
    isTime: boolean;
}

const formatted = (value: number): string => {
    const hours = (Math.floor(value / 60 / 60));
    const minutes = (Math.floor(value / 60) - (hours * 60));
    const seconds = value % 60;

    const time = `${hours ? hours.toString().padStart(2, '0') + ':' : ''}${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    return time
}

const TrackProgress: React.FC<TrackProgressProps> = ({
    left, right, onChange, isTime
}) => {
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ whiteSpace: 'nowrap', width: '50px', textAlign: 'center' }}>
                {isTime ? formatted(left) : left}
            </div>
            <input
                type="range"
                min={0} max={right} value={left} onChange={onChange}
            />
            <div style={{ whiteSpace: 'nowrap', width: '50px', textAlign: 'center' }}>
                {isTime ? formatted(right) : right}
            </div>
        </div>
    )
}

export default TrackProgress