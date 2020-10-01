import React from 'react';
import { SafeAreaView, View, StyleSheet, StatusBar } from 'react-native';

export function Screen({ children, style }) {
  return (
    <SafeAreaView style={{ ...styles.screen, ...style }}>
      <View style={{ ...styles.view, ...style }}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});
