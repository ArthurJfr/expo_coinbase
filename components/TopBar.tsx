import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

interface TopBarProps {
  onMenuPress?: () => void;
  onGet10Press?: () => void;
  onBellPress?: () => void;
}

export default function TopBar({ onMenuPress, onGet10Press, onBellPress }: TopBarProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onMenuPress} style={styles.menuButton}>
        <Ionicons name="menu" size={26} color="#222" />
      </TouchableOpacity>
      <View style={styles.rightGroup}>
        <TouchableOpacity onPress={onGet10Press} style={styles.get10Button} activeOpacity={0.8}>
          <Ionicons name="gift" size={16} color="#2563eb" style={{ marginRight: 4 }} />
          <Text style={styles.get10Text}>Get $10</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onBellPress} style={styles.bellButton}>
          <Feather name="bell" size={22} color="#222" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    elevation: 2,
    shadowColor: '#000',
  },
  menuButton: {
    padding: 8,
  },
  rightGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  get10Button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f5fd',
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginRight: 10,
  },
  get10Text: {
    color: '#2563eb',
    fontWeight: 'bold',
    fontSize: 14,
  },
  bellButton: {
    padding: 6,
  },
}); 