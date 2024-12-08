import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width, height } = Dimensions.get('window');

export const Container = styled.SafeAreaView`
    align-items: center;
    flex: 1;
    height: ${height}px;
    justify-content: center;
    width: ${width}px;
`
export const Content = styled(LinearGradient).attrs({
    colors: ['#599551', '#8B4513']
})`
    align-items: center;
    background-color: #008000;
    height: ${height}px;
    justify-content: center;
    width: ${width}px;
`

