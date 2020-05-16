const initState = {
    seconds: 0,
    isRunning: false
    // secondsEgg2: 20
}

const Timer = (state=initState, action) => {
    console.log(action)
    // console.log(action.payload)
    console.log(state)
    switch(action.type) {
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