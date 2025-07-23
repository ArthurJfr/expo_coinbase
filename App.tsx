import React from 'react';
import { View, FlatList, StyleSheet, SafeAreaView, Text } from 'react-native';
import CryptoItem from './components/CryptoItem';
import TopBar from './components/TopBar';
import { StatusBar } from 'expo-status-bar';
import Balance from './components/Balance';

const cryptos = [
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 20624.93,
    priceChange: '+2.34 ',
    icon: require('./assets/crypto/BTC-icon.png'),
    graph: require('./assets/graph/BTC-graph.png'),
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    price: 1125.31,
    priceChange: '+2.34 ',
    icon: require('./assets/crypto/ETH-icon.png'),
    graph: require('./assets/graph/ETH-graph.png'),
  },
  {
    name: 'Solana',
    symbol: 'SOL',
    price: 1125.31,
    priceChange: '+2.34 ',
    icon: require('./assets/crypto/SOLANA-icon.png'),
    graph: require('./assets/graph/SOLANA-graph.png'),
  },
  {
    name: 'Avalanche',
    symbol: 'AVAX',
    price: 255.24,
    priceChange: '+2.34 ',
    icon: require('./assets/crypto/AVALANCHE-icon.png'),
    graph: require('./assets/graph/AVALANCHE-graph.png'),
  },
  {
    name: 'Cardano',
    symbol: 'ADA',
    price: 7.89,
    priceChange: '+2.34 ',
    icon: require('./assets/crypto/CARDANO-icon.png'),
    graph: require('./assets/graph/CARDANO-graph.png'),
  },

  // Ajoute les autres cryptos ici...
];

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar style="auto" />
      <TopBar
        onMenuPress={() => {}}
        onGet10Press={() => {}}
        onBellPress={() => {}}
      />
      <Balance amount={623.23} />
      <Text style={styles.title}>Watchlist</Text>
      <FlatList
        data={cryptos}
        keyExtractor={item => item.symbol}
        renderItem={({ item }) => <CryptoItem {...item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 50 },
  title: { fontWeight: 'bold', fontSize: 25, marginBottom: 4, marginLeft: 20 },

});
