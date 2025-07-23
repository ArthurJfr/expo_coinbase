import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import BalanceButtons from './BalanceButtons';

interface BalanceProps {
  amount: number;
  subtitle?: string;
}

export default function Balance({ amount, subtitle = 'Your balance' }: BalanceProps) {
  return (
    <View style={styles.container}>
    
      <View style={styles.row}>
        <View>
          <Text style={styles.subtitle}>{subtitle}</Text>
          <Text style={styles.amount}>${amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</Text>
        </View>
        {/* Placeholder pour le graph */}
        <Image
          source={require('../assets/graph/ETH-graph.png')}
          style={styles.graph}
          resizeMode="contain"
        />
      </View>
      <BalanceButtons />
      <View style={styles.hr} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 15,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  subtitle: {
    color: '#888',
    fontSize: 15,
    marginBottom: 2,
  },
  amount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#222',
  },
  graph: {
    width: 60,
    height: 40,
    marginLeft: 12,
    borderRadius: 8,
  },
  hr: {
    height: 1,
    backgroundColor: '#e5e7eb',
    marginVertical: 20,
  },
}); 