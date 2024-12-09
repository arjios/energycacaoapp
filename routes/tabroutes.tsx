import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'

import Sensor from '../src/screens/Sensor'
import Home from '../src/screens/Home'


const Tab = createBottomTabNavigator()

export default function TabRoutes() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: () => <Feather name='home' size={32} color='#008000' />,
                    tabBarLabel: 'Home',
                    tabBarActiveTintColor: '#000000'
                }}
            />
            <Tab.Screen
                name='Sensor'
                component={Sensor}
                options={{
                    tabBarIcon: () => <Feather name='tool' size={32} color='#008000' />,
                    tabBarLabel: 'Sensor',
                    tabBarActiveTintColor: '#000000'
                }}
            />
        </Tab.Navigator>
    )
} 