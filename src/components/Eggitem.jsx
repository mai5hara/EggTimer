import React, {useState, useEffect} from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Startbtn from '../img/startbtn.svg';
import Pausebtn from '../img/pausebtn.svg';
import Restartbtn from '../img/restartbtn.svg';
import Cancelbtn from '../img/cancelbtn.svg';
import SuperSoftBoiledEggNoshadow from '../img/super_soft_boiled_egg_noshadow.svg';
import SoftBoiledEggNoshadow from '../img/soft_boiled_egg_noshadow.svg';
import SuperHardBoiledEggNoshadow from '../img/super_hard_boiled_egg_noshadow.svg';
import HardBoiledEggNoshadow from '../img/hard_boiled_egg_noshadow.svg';

const EggItem = ({location}) => {
    console.log(location)

    const {seconds} = location.state;

    const [timeLeft, setTimeLeft] = useState(seconds);
    const [isRunning, setIsRunning] = useState(location.toggleRun);

    console.log(seconds)
    console.log(timeLeft)
    console.log(isRunning)

    const now = Date.now();
    const then = now + seconds * 1000;           

    const displayTimeLeft = (seconds) => {
        let minutesLeft = Math.floor(seconds / 60);
        let secondsLeft = seconds % 60;
    
        minutesLeft = minutesLeft.toString().length === 1 ? '0' + minutesLeft : minutesLeft;
        secondsLeft = secondsLeft.toString().length === 1 ? '0' + secondsLeft : secondsLeft;
        console.log(minutesLeft)
        console.log(secondsLeft)
        return `${minutesLeft}:${secondsLeft}`;
    }

    const resetIime = () => {
        setTimeLeft(displayTimeLeft(seconds));
    }

    useEffect(() => {
        !isRunning && setTimeLeft(displayTimeLeft(seconds))

    },[seconds])

    useEffect(() => {
        console.log(isRunning)
        if(isRunning) {
            
            const countDown = setInterval(() => {
                const secondsLeft = Math.round((then - Date.now()) / 1000);
                console.log(secondsLeft)
                if(secondsLeft < 0) {
                    clearInterval(countDown);
                    console.log('done');
                    return;
                }
                setTimeLeft(displayTimeLeft(secondsLeft));
            },1000);
            return () => clearInterval(countDown)
        }
        return undefined;
    }, [isRunning]);

    const showTitle = (path) => {
        switch (path) {
            case '/SurperSoftBiledEgg':
                return <h1>Super Soft Biled Egg</h1>;
            case '/SoftBiledEgg':
                return <h1>Soft Biled Egg</h1>;
            case '/SurperHardBiledEgg':
                return <h1>Super Hard Biled Egg</h1>;
            case '/HardBiledEgg':
                return <h1>Hard Biled Egg</h1>;
            default:
                return <h1>Egg Timer</h1>;
        }
    }

    const showImage = (path) => {
        switch (path) {
            case '/SurperSoftBiledEgg':
                return <img width="auto" height="30%" src={SuperSoftBoiledEggNoshadow} alt="SuperSoftBoiledEggNoshadow"/>;
            case '/SoftBiledEgg':
                return <img width="auto" height="30%" src={SoftBoiledEggNoshadow} alt="SoftBoiledEggNoshadow"/>;
            case '/SurperHardBiledEgg':
                return <img width="auto" height="30%" src={SuperHardBoiledEggNoshadow} alt="SuperHardBoiledEggNoshadow"/>;
            case '/HardBiledEgg':
                return <img width="auto" height="30%" src={HardBoiledEggNoshadow} alt="HardBoiledEggNoshadow"/>;
            default:
                return <h1>Egg Timer</h1>;
        }
    }

    console.log(timeLeft)

    return (
        <Container>
            <H1>{showTitle(location.pathname)}</H1>
            {showImage(location.pathname)}
            <TimeLeft>{timeLeft}</TimeLeft>
            <ButtonWrap>
                <Button onClick={() => {resetIime()}} disabled={isRunning}>
                    <img width="50%" height="auto" src={Restartbtn} alt="Restartbtn"/>
                </Button>
                { isRunning ? (
                    <Button onClick={() => {setIsRunning(false)}}>
                        <img width="70%" height="auto" src={Pausebtn} alt="Pausebtn"/>
                    </Button>
                ) : (
                    <Button onClick={() => {setIsRunning(true)}}>
                        <img width="70%" height="auto" src={Startbtn} alt="Startbtn"/>
                    </Button>
                )}
                <Link to="/">
                <Button>
                    <img width="50%" height="auto" src={Cancelbtn} alt="Cancelbtn"/>
                </Button></Link>
            </ButtonWrap>
        </Container>
    )
};

// const mapStateToProps = state => {
//     return {
//         seconds: state.seconds,
//         toggleRun: state.toggleRun
//     }
// }

export default EggItem;

const H1 = styled.h1`
    text-align: center;
    font-size: 1rem;
    margin-boottom: 2rem;
`;

const TimeLeft = styled.p`
    font-size: 3.3rem;
    margin-top:1.5rem;
`;

const Button = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    appearance: none;
`;

const ButtonWrap = styled.div`
    display: flex;
    margin: 1.5rem auto;
    align-items: center;
`;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    color:#fff;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #FFB356;
`;

const Egg = styled.div`
    width: 40%;
    background-color: #FFF0D1;
    padding: 1rem 0;
    margin: 0.5rem auto;
    border-radius: 10px;
    text-align: center;

    &:hover {
        background-color: #FFC3B4;
    }
`;