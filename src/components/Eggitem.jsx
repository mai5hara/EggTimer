import React, { useState, useEffect } from 'react';
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

const EggItem = ({ location }) => {

    const { seconds } = location.state;

    const [timeLeft, setTimeLeft] = useState(seconds);
    const [isRunning, setIsRunning] = useState(location.toggleRun);

    const now = Date.now();
    const then = now + seconds * 1000;

    const displayTimeLeft = (seconds) => {
        let minutesLeft = Math.floor(seconds / 60);
        let secondsLeft = seconds % 60;

        minutesLeft = minutesLeft.toString().length === 1 ? '0' + minutesLeft : minutesLeft;
        secondsLeft = secondsLeft.toString().length === 1 ? '0' + secondsLeft : secondsLeft;

        return `${minutesLeft}:${secondsLeft}`;
    }

    const resetIime = () => {
        setTimeLeft(displayTimeLeft(seconds));
    }

    useEffect(() => {
        !isRunning && setTimeLeft(displayTimeLeft(seconds))

    }, [seconds])

    useEffect(() => {
        if (isRunning) {

            const countDown = setInterval(() => {
                const secondsLeft = Math.round((then - Date.now()) / 1000);
                if (secondsLeft < 0) {
                    clearInterval(countDown);
                    console.log('done');
                    return;
                }
                setTimeLeft(displayTimeLeft(secondsLeft));
            }, 1000);
            return () => clearInterval(countDown)
        }
        return undefined;
    }, [isRunning]);

    const showTitle = (path) => {
        switch (path) {
            case '/SuperSoftBoiledEgg':
                return <h1>Super Soft Boiled Egg</h1>;
            case '/SoftBoiledEgg':
                return <h1>Soft Boiled Egg</h1>;
            case '/SuperHardBoiledEgg':
                return <h1>Super Hard Boiled Egg</h1>;
            case '/HardBoiledEgg':
                return <h1>Hard Boiled Egg</h1>;
            default:
                return <h1>Egg Timer</h1>;
        }
    }

    const showImage = (path) => {
        switch (path) {
            case '/SuperSoftBoiledEgg':
                return <img width="auto" height="30%" src={SuperSoftBoiledEggNoshadow} alt="SuperSoftBoiledEggNoshadow" />;
            case '/SoftBoiledEgg':
                return <img width="auto" height="30%" src={SoftBoiledEggNoshadow} alt="SoftBoiledEggNoshadow" />;
            case '/SuperHardBoiledEgg':
                return <img width="auto" height="30%" src={SuperHardBoiledEggNoshadow} alt="SuperHardBoiledEggNoshadow" />;
            case '/HardBoiledEgg':
                return <img width="auto" height="30%" src={HardBoiledEggNoshadow} alt="HardBoiledEggNoshadow" />;
            default:
                return <h1>Egg Timer</h1>;
        }
    }

    return (
        <Container>
            <H1>{showTitle(location.pathname)}</H1>
            {showImage(location.pathname)}
            <TimeLeft>{timeLeft}</TimeLeft>
            <ButtonWrap>
                <Button onClick={() => { resetIime() }} disabled={isRunning}>
                    <img width="50%" height="auto" src={Restartbtn} alt="Restartbtn" />
                </Button>
                {isRunning ? (
                    <Button onClick={() => { setIsRunning(false) }}>
                        <img width="70%" height="auto" src={Pausebtn} alt="Pausebtn" />
                    </Button>
                ) : (
                        <Button onClick={() => { setIsRunning(true) }}>
                            <img width="70%" height="auto" src={Startbtn} alt="Startbtn" />
                        </Button>
                    )}
                <Link to="/">
                    <Button>
                        <img width="50%" height="auto" src={Cancelbtn} alt="Cancelbtn" />
                    </Button></Link>
            </ButtonWrap>
        </Container>
    )
};

export default EggItem;