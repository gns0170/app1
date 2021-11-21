import React from "react";
import Styled from 'styled-components/native';

const Container = Styled.View`
`;


const StyleButton = Styled.TouchableOpacity`
/* Rectangle 3 */
position: relative;

/* Color Crochet */

background: #554944;
border-radius: 4px;
`;

const Label = Styled.Text`
/* input */


font-family: Open Sans;
font-style: normal;
font-weight: 600;
/* identical to box height */

display: flex;
align-items: center;
text-align: center;
text-transform: capitalize;

color: #FFFFFF;

/* 1 */

color: #FFFFFF;
`;


interface Props {
    label: string;
    style?: Object;
    color?: string;
    onPress?: () => void;
}

const Button = ({ label, style, color, onPress}: Props) => {
    return (
        <Container style = {style}>
            <StyleButton onPress={onPress}>
                <Label>{label}</Label>
            </StyleButton>
        </Container>
    );
};

export default Button;