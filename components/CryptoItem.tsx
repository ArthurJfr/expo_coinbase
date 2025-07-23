import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

type Props = {
  name: string;
  symbol: string;
  price: number;
  priceChange: string;
  graph: any;
  icon: any; // number si require, string si url
};

export default function CryptoItem({ name, symbol, price, priceChange, icon, graph }: Props) {
  return (
    <View style={styles.container}>
        <Image source={icon} style={styles.icon} resizeMode="contain" />
        <View style={styles.infoContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.symbol}>{symbol}</Text>
        </View>
        <View style={styles.graphContainer}>
            <Image source={graph} style={styles.graph}/>
        </View>
        <View style={styles.priceContainer}>
            <Text style={styles.price}>${price}</Text>
            <Text style={styles.priceChange}>{priceChange}%</Text>
        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  title: { fontWeight: 'bold', fontSize: 16, marginBottom: 4 },
  container: { flexDirection: 'row', alignItems: 'center', padding: 12, justifyContent: 'space-around' },
  icon: { width: 32, height: 32, marginRight: 12 },
  infoContainer: {
    flex: 1,
  },
    name: { fontWeight: 'bold', fontSize: 16, marginBottom: 4 },
  symbol: { color: '#888' },
  price: { marginLeft: 'auto', fontWeight: 'bold' },
  priceContainer: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 16,
  },
  priceChange: {
    color: '#2563eb',
    fontWeight: 'bold',
    backgroundColor: '#f1f5fd',
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginTop: 4,
  },
    graph: { width: 50, height: 32, resizeMode: 'contain' },
  graphContainer: {
    flex: 1, // ou une largeur fixe si tu veux
    justifyContent: 'center',
    alignItems: 'center',
  },
});
