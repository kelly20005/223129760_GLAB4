
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Form1 = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});

  const handleNext = () => {
    // Simple validation
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    if (!email || !/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Valid email is required';
    if (!phone || phone.length !== 10) newErrors.phone = 'Phone number should be 10 digits';
    
    if (Object.keys(newErrors).length === 0) {
      navigation.navigate('Form2', { userData: { name, email, phone } });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      {errors.name && <Text style={styles.error}>{errors.name}</Text>}

      <Text style={styles.label}>Email:</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" />
      {errors.email && <Text style={styles.error}>{errors.email}</Text>}

      <Text style={styles.label}>Phone Number:</Text>
      <TextInput style={styles.input} value={phone} onChangeText={setPhone} keyboardType="numeric" maxLength={10} />
      {errors.phone && <Text style={styles.error}>{errors.phone}</Text>}

      <Button title="Next" onPress={handleNext} />
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
  },
  error: {
    color: 'red',
    fontSize: 12,
  },
});

export default Form1;


