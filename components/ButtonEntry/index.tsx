import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types/types";
import { Container, ButtonEntryTitle } from "./styles";
import { useNavigation } from "@react-navigation/native";


type HomeNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>

interface Props {
    navigation: HomeNavigationProp
}

function handleEntry({navigation}: Props) {
    navigation.navigate('Sensor')
}

export default function ButtonEntry() {
    const navigation = useNavigation()
    return(
        <Container>
            <ButtonEntryTitle onPress={handleEntry} >
                Acessar
            </ButtonEntryTitle>
        </Container>
    )
}