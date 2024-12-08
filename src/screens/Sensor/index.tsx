import mqtt from 'mqtt'
import {initializeDb} from '../../database/database'
import CardSensor from "../../../components/CardSensor";
import { Container, Content } from "./styles";


const brokerUrl = 'mqtt://broker.hivemq.com:1883';
const topic = 'dados/moagem';
const client = mqtt.connect(brokerUrl);

export default function Sensor() {

    return (
        <Container>
            <Content>
                <CardSensor name = 'Sensor Ultrasonico' value = '70' unidade= '%'>

                </CardSensor>
                <CardSensor name = 'Sensor Tensão' value = '220' unidade= 'V'>

                </CardSensor>
                <CardSensor name = 'Sensor fluxo' value = '40' unidade= '%'>

                </CardSensor>
                <CardSensor name = 'Sensor Temperatura' value = '40' unidade= 'C'>

                </CardSensor>
            </Content>
        </Container>
    )
}