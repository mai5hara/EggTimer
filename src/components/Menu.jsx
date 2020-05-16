import React, {useState, useEffect} from 'react';
import { runTimer } from './store/actions/timerActions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { device } from '../components/layout/device';
import styled from 'styled-components';
import SuperSoftBoiledEgg from '../img/super_soft_boiled_egg.svg';
import SoftBoiledEgg from '../img/soft_boiled_egg.svg';
import SuperHardBoiledEgg from '../img/super_hard_boiled_egg.svg';
import HardBoiledEgg from '../img/hard_boiled_egg.svg';
import egg from '../img/egg.svg';


const Menu = () => {

    return (
        <Container>
            <H1>Egg Timer</H1>
            <EggImage><img width="45%" height="auto" src={egg} alt="egg"/></EggImage>
            <Wrap>
                <Link to={{
                    pathname: '/SurperSoftBiledEgg',
                    state: {
                        seconds: 300
                    }
                }} className="link_color">
                    <Egg>
                        <img width="auto" height="auto" src={SuperSoftBoiledEgg} alt="SuperSoftBoiledEgg"/>
                        <EggType>Super Soft Biled Egg</EggType>
                    </Egg>
                </Link>
                <Link to={{
                    pathname: '/SoftBiledEgg',
                    state: {
                        seconds: 480
                    }
                }} className="link_color">
                    <Egg>
                        <img width="auto" height="auto" src={SoftBoiledEgg} alt="SoftBoiledEgg"/>
                        <EggType>Soft Biled Egg</EggType>
                    </Egg>
                </Link>
                <Link to={{
                    pathname: '/HardBiledEgg',
                    state: {
                        seconds: 600
                    }
                }} className="link_color">
                    <Egg>
                        <img width="auto" height="auto" src={HardBoiledEgg} alt="HardBoiledEgg"/>
                        <EggType>Hard Biled Egg</EggType>
                    </Egg>
                </Link>
                <Link to={{
                    pathname: '/SurperHardBiledEgg',
                    state: {
                        seconds: 720
                    }
                }} className="link_color">
                    <Egg>
                        <img width="auto" height="auto" src={SuperHardBoiledEgg} alt="SuperHardBoiledEgg"/>
                        <EggType>Super Hard Biled Egg</EggType>
                    </Egg>
                </Link>
            </Wrap>
        </Container>
    )
};

const mapStateToProps = state => {
    return {
        seconds: state.seconds,
        toggleRun: state.toggleRun
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        runTimer: (seconds) => dispatch(runTimer(seconds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

const H1 = styled.h1`
    text-align: center;
    color:#fff;
    font-size: 2.5rem;
`;

const EggImage = styled.div`
    margin: 1.5rem auto 2.5rem auto;
    width: 100%;

    @media ${device.mobileL} {
        width: 40%;
    }
    @media ${device.laptop} {
        width: 30%;
    }
`;

const Container = styled.div`
    width: 100%;
    height: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #FFB356;

    @media ${device.mobileM} {
        height: 100vh;
        padding: 1.5rem 0;
    }

    @media ${device.mobileL} {
        height: 100vh;
        padding: 0;
    }
`;

const Wrap = styled.div`
    margin: 0 auto;
    width:95%;
    display:flex;
    justify-content: center;
    flex-wrap: wrap;

    @media ${device.laptop} {
        width: 80%;
        flex-wrap: nowrap;
    }

    @media ${device.mobileS} {
        height: auto;
        margin-bottom:1.5rem;
    }
`; 

const Egg = styled.div`
    display:flex;
    height: auto;
    width:100%;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
    padding: 1rem 0.5rem;
    margin: 0.5rem 0.4rem;
    border-radius: 10px;
    text-align: center;

    &:hover {
        background-color: #FFC3B4;
    }
`;

const EggType = styled.p`
    margin-top: 0.5rem;
    font-size: 0.9rem;
`;