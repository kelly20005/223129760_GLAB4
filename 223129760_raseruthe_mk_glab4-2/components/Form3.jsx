import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Form3 = ({ route, navigation }) => {
  const { userData } = route.params;
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    // Simple validation
    const newErrors = {};
    if (!/^\d{16}$/.test(cardNumber)) newErrors.cardNumber = 'Credit card number should be 16 digits';
    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) newErrors.expiryDate = 'Expiration date should be MM/YY';
    if (!/^\d{3}$/.test(cvv)) newErrors.cvv = 'CVV should be 3 digits';

    if (Object.keys(newErrors).length === 0) {
      // Navigate to Form2 with the current userData and form details
      navigation.navigate('Form2', { userData: { ...userData, cardNumber, expiryDate, cvv } });
    } else {
      setErrors(newErrors);
    }
  };

  const handleBackToCart = () => {
    navigation.navigate('Cart', { userData: { ...userData, cardNumber, expiryDate, cvv } });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Credit Card Number:</Text>
      <TextInput
        style={styles.input}
        value={cardNumber}
        onChangeText={setCardNumber}
        keyboardType="numeric"
        maxLength={16}
      />
      {errors.cardNumber && <Text style={styles.error}>{errors.cardNumber}</Text>}

      <Text style={styles.label}>Expiration Date (MM/YY):</Text>
      <TextInput
        style={styles.input}
        value={expiryDate}
        onChangeText={setExpiryDate}
        placeholder="MM/YY"
        maxLength={5}
      />
      {errors.expiryDate && <Text style={styles.error}>{errors.expiryDate}</Text>}

      <Text style={styles.label}>CVV:</Text>
      <TextInput
        style={styles.input}
        value={cvv}
        onChangeText={setCvv}
        keyboardType="numeric"
        maxLength={3}
      />
      {errors.cvv && <Text style={styles.error}>{errors.cvv}</Text>}

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.backButton} onPress={handleBackToCart}>
        <Text style={styles.buttonText}>Back to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
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
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: '#4682b4', // Customize button color
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  backButton: {
    backgroundColor: '#ff6347', // Customize button color
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Form3;

