import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Screen } from '../../componenents/Screen';

export default function GalleryPage() {
  return (
    <Screen style={styles.container}>
      <Text> Hi, it`s a Gallery Page </Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});
