import React from 'react';
import { StyleSheet, Modal, View, Text, TouchableOpacity } from 'react-native';

export function AppModal({ visible, child, hideModal }) {
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.container}>
        <View style={styles.mockChild}>{child}</View>
        <View style={styles.wrapperBtn}>
          <TouchableOpacity onPress={hideModal}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  wrapperBtn: {
    backgroundColor: 'red',
    justifyContent: 'flex-end',
  },
  mockChild: {
    width: '100%',
    height: '80%',
    backgroundColor: 'black',
  },
});
