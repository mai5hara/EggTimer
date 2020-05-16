export const runTimer = (seconds) => {
    return {
        type: 'RUN_TIMER',
        payload: seconds
    }
}