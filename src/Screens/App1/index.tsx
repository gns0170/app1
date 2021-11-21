import React from "react";
import Styled from "styled-components/native";
import {Linking} from "react-native";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

//import { library, icon } from '@fortawesome/fontawesome-svg-core'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';



const Container = Styled.View`
    width: 100%;
    height: 100%;
    background: #C9BFB2;
`;
// Header
const Header = Styled.View`
    height: 60px;
    background: #554944;
`;

const AppName = Styled.Text`
    left: 15px;
    top: 15px;

    font-family: PT Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 31px;
    color: #FFFFFF;
`;
const BackBtn = Styled.Text`
    position: absolute;
    right: 16px;
    top: 16px;

    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 28px;
    background: #00000050;
    border-radius: 2px;
`;


//Main
const Label = Styled.Text`
    position: absolute;
    left: 3.62%;
    top: 220px;

    font-family: PT Serif;
    font-style: normal;
    font-weight: normal;
    font-size: 38px;
    line-height: 42px;

    color: #343947;
`;
const Input1 = Styled.TextInput`
    position: absolute;
    left: 3.62%;
    right: 3.62%;
    top: 280px
    height: 45px;
    background: rgba(85, 73, 68, 0.3);
    border-radius: 4px;

    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    text-transform: capitalize;
    color: #343947;
`;
const Input2 = Styled(Input1)`
    top: 330px;
`;
const Button1 = Styled.TouchableOpacity`
    left: 3.62%
    width: 92.76%;
    top: 320px;
    height: 45px;
    background: #554944;
    border-radius: 4px;
`;
const BtnText = Styled.Text`
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 34px;

    display: flex;
    text-align: center;
    text-transform: capitalize;

    color: #C9BFB2;
`;

const Link1 = Styled.Text`
    position: absolute;
    left: 38.5%;
    top: 440px;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
`;

const Link2 = Styled(Link1)`
    left: 28%;
    top: 475px;
`;


//Footer

const FooterLine1 = Styled.View`
    position: absolute;
    height: 0px;
    left: 0%;
    right: 0%;
    bottom: 61.03px;
    border: 1px solid #343947;
`;
const FooterLine2 = Styled(FooterLine1)`
    bottom: 57px;
    border: 0.4px
`;

const Copyright = Styled.Text`
    position: absolute;
    height: 25px;
    left: 12.56%;
    right: 12.56%;
    bottom: 17px;

    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 25px;
    /* identical to box height */

    align-items: center;
    text-align: center;

    color: #000000;
`;




interface Props {}

const App1 = ({}: Props) => {
    return(
        <Container>
            <Header>
                <AppName>Permanent</AppName>
                <BackBtn><FontAwesomeIcon icon={faChevronLeft} color={"#FFFFFF"} size={24}/></BackBtn>
            </Header>
            <Label>Login</Label>
            <Input1 placeholder={"Email"}/>
            <Input2 placeholder={"Password"} />
            <Button1>
                <BtnText>Access</BtnText>
            </Button1>
            <Link1 onPress={() => Linking.openURL('http://google.com')}>New Register</Link1>
            <Link2>Forgot Email or Password?</Link2>

            <FooterLine2 />
            <Copyright>
            ©Copyright Gamza all right deserved 
            </Copyright>
        </Container>

    );
};

export default App1;