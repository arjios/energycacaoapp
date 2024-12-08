import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";
import {pic} from '../../../assets/splash.png';

export const Container = styled.View`
    align-items: center;
    background-image: url(${pic});
    flex: 1;
    justify-content: center;
    width:100%;
`