import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import Publicaciones from './screens/Publicaciones';
import CreateNote from './screens/CreateNote';
import DetailsNote from './screens/DetailsNote';


export default function App() {
  
  const Stack = createStackNavigator();

  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen 
          name='Login'
          component={Login}
          options={{
            title:"LOGIN",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#000000"},
            headerTintColor: "white"
          }}
        />
        <Stack.Screen
          name="Publicaciones"
          component={Publicaciones}
          options={{
            title:"PUBLICACIONES",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#000000"},
            headerTintColor: "white"
          }}
        />
        <Stack.Screen
          name='Crear'
          component={CreateNote}
          options={{
            title:"CREAR PUBLICACIONES",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#000000"},
            headerTintColor: "white"
          }}
        />
        <Stack.Screen
          name='Detail'
          component={DetailsNote}
          options={{
            title:"DETALLES DE PUBLICACIONES",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#000000"},
            headerTintColor: "white"
          }}
        />
      </Stack.Navigator>
    );
  }


  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
