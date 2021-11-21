import React from "react";
import Styled from 'styled-components/native';


const BigContainer = Styled.View`
`;

const Container = Styled.View`
position: relative;
width: 100%;
height: 60px;

`;

const InputField = Styled.TextInput`
/* box */
position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;

background: rgba(85, 73, 68, 0.3);
border-radius: 4px;

/* placeholder */
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 32px;
line-height: 44px;
/* identical to box height */

display: flex;
align-items: center;
text-transform: capitalize;
`;

const placeholdertype = Styled.Text`
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 32px;
line-height: 44px;
/* identical to box height */

display: flex;
align-items: center;
text-transform: capitalize;

/* 1 */

color: #343947;
`

interface Props {
    placeholder?: string;
    keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
    secureTextEntry?: boolean;
    style?: Object;
    clearMode?: boolean;
    onChangeText?: (text: string) => void;
}

const Input = ({
    placeholder,
    keyboardType,
    secureTextEntry,
    style,
    clearMode,
    onChangeText,
}: Props) => {
    return (
        <BigContainer style={style}>
            <Container>
                <InputField
                    selectionColor="#343947"
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType ? keyboardType : 'default'}
                    autoCapitalize="none"
                    autoCorrect={false}
                    allowFontScaling={false}
                    placeholder={placeholder}
                    clearButtonMode={clearMode ? 'while-editing' : 'never'}
                    onChangeText={onChangeText}
                />
            </Container>
        </BigContainer>
    );
};

export default Input;
