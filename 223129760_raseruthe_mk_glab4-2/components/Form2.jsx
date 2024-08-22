import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Form2 = ({ route, navigation }) => {
  const { userData } = route.params || {}; // Ensure userData is defined
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false); // State to manage success message visibility

  const handleComplete = () => {
    if (address && city && state && zip) {
      // Show the success message and navigate to Login screen
      setOrderPlaced(true);
      setTimeout(() => {
        navigation.navigate('Login'); // Navigate to Login screen
      }, 2000); // Delay navigation to allow message display
    } else {
      // Optionally, you can show an error message here
    }
  };

  return (
    <View style={styles.container}>
      {orderPlaced && (
        <View style={styles.successMessageContainer}>
          <Text style={styles.successMessage}>Your order has been placed successfully!</Text>
        </View>
      )}
      
      <Text style={styles.label}>Address:</Text>
      <TextInput
        style={styles.input}
        value={address}
        onChangeText={setAddress}
      />

      <Text style={styles.label}>City:</Text>
      <TextInput
        style={styles.input}
        value={city}
        onChangeText={setCity}
      />

      <Text style={styles.label}>State:</Text>
      <TextInput
        style={styles.input}
        value={state}
        onChangeText={setState}
      />

      <Text style={styles.label}>Zip Code:</Text>
      <TextInput
        style={styles.input}
        value={zip}
        onChangeText={setZip}
        keyboardType="numeric"
        maxLength={5}
      />

      <TouchableOpacity style={styles.completeButton} onPress={handleComplete}>
        <Text style={styles.buttonText}>Complete Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginVertical: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
  },
  completeButton: {
    backgroundColor: '#32CD32', // Green color
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  successMessageContainer: {
    backgroundColor: '#dff0d8', // Light green background
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'center',
  },
  successMessage: {
    color: '#3c763d', // Dark green text
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Form2;

