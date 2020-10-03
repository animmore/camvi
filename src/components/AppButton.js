import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

export function AppButton({ onPress, label, style }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.textBtn}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
  textBtn: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});
