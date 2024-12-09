import { CardTitle, CardValue, Container, Content, TitleContainer, ValueContainer } from "./styles";


type Props = {
    name: string,
    value: string,
    unidade: string
}

export default function CardSensor({name, value, unidade}: Props) {

    return (
        <Container>
            <Content>
                <TitleContainer>
                    <CardTitle>
                        {name}
                    </CardTitle>
                </TitleContainer>
                <ValueContainer>
                    <CardValue>
                        {value}
                        {unidade}
                    </CardValue>
                </ValueContainer>
            </Content>
        </Container>
    )
}