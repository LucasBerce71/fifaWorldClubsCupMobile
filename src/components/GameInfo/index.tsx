import React, { useState, useEffect } from 'react';
import { IGame } from '../../models/IGame';
import { gameInfoResponse } from '../../services/api';

import {
    Container,
    Info
} from './styles';

const GameInfo: React.FC = () => {
    const [gameInfo, setGameInfo] = useState<IGame[]>();

    useEffect(() => {
        setGameInfo(gameInfoResponse);
    }, []);

    return (
        <Container>
            {gameInfo?.map((game: IGame) => (
                <>
                    <Info>{game.day} às {game.hour}</Info>
                    <Info>{game.stadium}</Info>
                </>
            ))}
        </Container>
    );
};

export default GameInfo;