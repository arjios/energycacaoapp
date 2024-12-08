import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export const Container = styled(LinearGradient).attrs({
    color: ['#008000', '#8B4513']
})`
    align-items: center;
    flex: 1;
    justify-content: center;
    width:100%;
`