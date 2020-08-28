const initState = {
    seconds: 0,
    isRunning: false
}

const Timer = (state = initState, action) => {
    switch (action.type) {
        case 'RUN_TIMER':
            return {
                seconds: action.payload,
                toggleRun: !state.isRunning
            };
        default:
            return state;
    }
}

export default Timer;