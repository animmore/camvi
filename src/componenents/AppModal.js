import React from 'react';
import { StyleSheet, Modal, View, Text } from 'react-native';
import { AppButton } from './AppButton';

export function AppModal({ visible, child, hideModal }) {
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.container}>
        <View style={styles.mockChild}>{child}</View>
        <View style={styles.wrapperBtn}>
          <AppButton onPress={hideModal} label="Close" />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  wrapperBtn: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  mockChild: {
    width: '100%',
    height: '90%',
    backgroundColor: 'black',
  },
});
