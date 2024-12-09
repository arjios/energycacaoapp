import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, ImageBackground } from "react-native";
import styled from "styled-components/native";

const { width, height } = Dimensions.get('window');

export const Container = styled.SafeAreaView`
    align-items: center;
    flex: 1;
    height: ${height}px;
    justify-content: center;
    margin-top: 32px;
    width: ${width}px;
`
export const Content = styled(LinearGradient).attrs({
    colors: ['#599551', '#8B4513']
})`
    align-items: center;
    background-color: #008000;
    border: 2px solid black;
    flex: 1;
    height: ${height}px;
    justify-content: center;
    width: 100%;
`
export const BackgroundImage = styled(ImageBackground).attrs({
    resizeMode: 'contain',
    source: require('../../assets/splash.png')
})`
    align-items: center;
    flex-direction: row;
    height: 500px;
    justify-content: center;
    width:100%;
`