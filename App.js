import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Attractions from './Attractions';
import AttractionDetails from './AttractionDetails'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Attractions" component={Attractions} />
        <Stack.Screen name="Attraction Details" component={AttractionDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;