import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const CartScreen = ({ navigation, cart, clearCart, route }) => {
  // Assuming userData is passed from previous screens
  const { userData } = route.params || {};

  // Calculate the total price of items in the cart
  const totalAmount = cart.reduce((total, item) => {
    // Ensure price is converted to a number
    const price = parseFloat(item.price);
    return total + (isNaN(price) ? 0 : price);
  }, 0);

  const handleGoToForm3 = () => {
    navigation.navigate('Form3', { userData });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {cart.length === 0 ? (
          <Text style={styles.emptyText}>Your cart is empty</Text>
        ) : (
          <>
            {cart.map((item, index) => (
              <View key={index} style={styles.cartItem}>
                <Text style={styles.itemText}>{item.title} - R{item.price}</Text>
              </View>
            ))}
            <View style={styles.totalContainer}>
              <Text style={styles.totalText}>Total Amount: R{totalAmount.toFixed(2)}</Text>
            </View>
          </>
        )}
      </ScrollView>

      <TouchableOpacity style={styles.button} onPress={handleGoToForm3}>
        <Text style={styles.buttonText}>Continue to Payment</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.clearCartButton]} onPress={clearCart}>
        <Text style={styles.buttonText}>Clear Cart</Text>
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
  emptyText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    textDecorationLine: 'underline', // Add underline
  },
  cartItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemText: {
    fontSize: 16,
  },
  totalContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#4682b4', // Customize the button color
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
  clearCartButton: {
    backgroundColor: '#ff6347', // Different color for Clear Cart button
  },
});

export default CartScreen;



