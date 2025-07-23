import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

interface ActionButton {
  label: string;
  icon: React.ReactNode;
  onPress?: () => void;
}

const actions: ActionButton[] = [
  {
    label: 'Buy',
    icon: <Ionicons name="add" size={24} color="#fff" />, // +
  },
  {
    label: 'Sell',
    icon: <Ionicons name="remove" size={24} color="#fff" />, // -
  },
  {
    label: 'Send',
    icon: <Ionicons name="arrow-up" size={24} color="#fff" />, // flèche haut
  },
  {
    label: 'Receive',
    icon: <Ionicons name="arrow-down" size={24} color="#fff" />, // flèche bas
  },
  {
    label: 'More',
    icon: <Feather name="more-horizontal" size={24} color="#fff" />, // ...
  },
];

export default function BalanceButtons({ onAction }: { onAction?: (label: string) => void }) {
  return (
    <View style={styles.container}>
      {actions.map((action) => (
        <TouchableOpacity
          key={action.label}
          style={styles.button}
          onPress={() => onAction && onAction(action.label)}
          activeOpacity={0.8}
        >
          <View style={styles.iconCircle}>{action.icon}</View>
          <Text style={styles.label}>{action.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 8,
  },
  button: {
    alignItems: 'center',
    flex: 1,
  },
  iconCircle: {
    backgroundColor: '#2563eb',
    borderRadius: 24,
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4
    
  },
  label: {
    color: '#222',
    fontSize: 13,
    marginTop: 2,
  },
}); 