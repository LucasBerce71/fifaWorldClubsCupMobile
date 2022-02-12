import React from 'react';

import Chelsea from '../../assets/chelsea.png';
import Palmeiras from '../../assets/palmeiras.png';

import { 
    Container, 
    Picture,
} from './styles';

const Header: React.FC = () => {
    return (
        <Container>
            <Picture source={Chelsea} />
            <Picture 
                source={Palmeiras} 
                style={{ width: 160, height: 160 }}
            />
        </Container>
    );
};

export default Header;