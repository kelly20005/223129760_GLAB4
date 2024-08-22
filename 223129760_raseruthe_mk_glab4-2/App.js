import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/ProfileScreen.jsx'; // Adjust path as needed
import MenuScreen from './components/MenuScreen';
import CartScreen from './components/CartScreen';
import ProfileScreen from './components/ProfileScreen.jsx';
import Form1Screen from './components/Form1.jsx';
import Form2Screen from './components/Form2.jsx';
import Form3Screen from './components/Form3.jsx';

const Stack = createStackNavigator();

const App = () => {
  const [cart, setCart] = React.useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Menu">
          {(props) => <MenuScreen {...props} addToCart={addToCart} />}
        </Stack.Screen>
        <Stack.Screen name="Cart">
          {(props) => <CartScreen {...props} cart={cart} clearCart={clearCart} />}
        </Stack.Screen>
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Form1" component={Form1Screen} />
        <Stack.Screen name="Form2" component={Form2Screen} />
        <Stack.Screen name="Form3" component={Form3Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;



