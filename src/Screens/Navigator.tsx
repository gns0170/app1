import React, {useContext} from "react";

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack";

import App1 from '~/Screens/App1';


const Stack = createStackNavigator();

export default () => {
    return (
        <NavigationContainer>
            <App1 />
        </NavigationContainer>
    );
};