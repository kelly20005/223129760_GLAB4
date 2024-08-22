import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

const data = [
  { id: 1, title: "Wings", price: "25.00", description: "Crispy and flavorful, our wings are a crowd-pleaser.", image: require('./wings.png') },
  { id: 2, title: "Chicken", price: "50.00", description: "Crispy and flavorful chicken with various sauces.", image: require('./Chicken.png') },
  { id: 3, title: "Chicken Livers", price: "35.00", description: "Savory chicken livers cooked to perfection, served with toast.", image: require('./ChickenLivers.png') },
  { id: 4, title: "Ribs", price: "105.00", description: "Tender, fall-off-the-bone ribs slow-cooked to perfection.", image: require("./Ribs.png") },
  { id: 5, title: "Gizzards", price: "60.50", description: "Crispy chicken gizzards, perfect for snacking or dipping.", image: require("./Gizards.png") },
  { id: 6, title: "Wors", price: "45.00", description: "South African wors, a classic grilled sausage.", image: require("./Wors.png") },
  { id: 7, title: "Steak", price: "125.00", description: "Juicy, tender steak grilled to your preference.", image: require("./Steak.png") },
  { id: 8, title: "Meat Platter", price: "250.00", description: "A variety of grilled meats, ideal for sharing.", image: require("./MeatPlatter.png") },
];

const MenuScreen = ({ navigation, addToCart }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {data.map(item => (
          <View key={item.id} style={styles.menuItem}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.itemDetails}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>R{item.price}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item)}>
                <Text style={styles.addButtonText}>Add to Cart</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.goToCartButton} onPress={() => navigation.navigate('Cart')}>
          <Text style={styles.goToCartButtonText}>Go to Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  scrollContainer: {
    paddingBottom: 100, // Added extra padding for web
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    flex: 1,
    // Web-specific styles
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    margin: 'auto', // Center the item on web
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    // Web-specific styles
    objectFit: 'cover',
  },
  itemDetails: {
    flexShrink: 1,
    marginLeft: 15,
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    color: 'green',
    marginBottom: 5,
  },
  description: {
    fontSize: 12,
    color: '#666',
    marginBottom: 10,
    lineHeight: 18,
  },
  addButton: {
    backgroundColor: '#ff6347',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonContainer: {
    padding: 10,
    backgroundColor: '#f8f8f8',
    
    position: 'sticky',
    bottom: 0,
    width: '100%',
  },
  goToCartButton: {
    backgroundColor: '#4682b4', 
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  goToCartButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default MenuScreen;



