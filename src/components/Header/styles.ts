import styled from 'styled-components/native';
import { calculateHeaderStandardHeight } from '../../utils/calculateHeaderStandardHeight';

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;

    background-color: #fff;

    height: ${calculateHeaderStandardHeight('screen')}px;

`;

export const Picture = styled.Image`
    width: 130px;
    height: 130px;
`;