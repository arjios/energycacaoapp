import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
    align-items: center;
    background-color: transparent;
    border: 1px solid darkgreen;
    border-radius: 20px;
    flex-direction: row;
    height: 130px;
    justify-content: flex-start;
    width: 90%;
`;

export const Content = styled.View`
    align-items: flex-start;
    background-color: transparent;
    height: 100px;
    justify-content: flex-start;
    padding: 16px;
    width: 100%;
`

export const TitleContainer = styled.View`
    align-items: flex-start;
    background-color: transparent;
    height: 20px;
    justify-content: flex-start;
    width: 100%;
`

export const CardTitle = styled.Text`
    background-color: transparent;
    color: #000000;
    font-size: 14px;
    font-weight: bold;
`

export const ValueContainer = styled.View`
    align-items: flex-end;
    background-color: #FFFFFF;
    border-radius: 30px;
    height: 50px;
    justify-content: flex-end;
    margin-left: 90px;
    padding-right: 16px;
    width: 60%;
`

export const CardValue = styled.Text`
    background-color: #FFFFFF;
    color: #000000;
    font-size:30px;
    font-weight: bold;
`