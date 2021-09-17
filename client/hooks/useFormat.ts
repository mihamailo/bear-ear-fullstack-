const useFormat = (value: number): string => {
    const hours = (Math.floor(value / 60 / 60));
    const minutes = (Math.floor(value / 60) - (hours * 60));
    const seconds = value % 60;

    const time = `${hours ? hours.toString().padStart(2, '0') + ':' : ''}${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    return time
}

export default useFormat