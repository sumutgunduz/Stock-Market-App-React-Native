import React from 'react';
import { View, Text, StyleSheet, Image, img} from 'react-native';


const Stocks = ({ company, bidPrice, dailyChange, dailyChangeColor}) => {
  const images = `/Users/tolgadogan/Desktop/StockProject/components/LOGOS/${company}.png`;
  
  return(
    <View style={styles.stockItem}>
    <Image 
      source={{uri: images}}
      style={{ width: 45, height: 45 }}
      resizeMode="contain"/>
    <Text style={styles.stockSymbol}>{company}</Text>
    <Text style={styles.stockPrice}>{bidPrice}</Text>
    <Text style={{ color: dailyChangeColor }}>{dailyChange}</Text>
  </View>
  )
};

const styles = StyleSheet.create({
  stockItem: {
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    paddingVertical: 8,
  },
  stockSymbol: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  stockPrice: {
    fontSize: 16,
    color: 'white',
  },
  dailyChangeColor: {
    fontSize: 16,
    color: 'white',
  },
});


export default Stocks;