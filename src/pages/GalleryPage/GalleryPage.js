import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
  View,
  TouchableOpacity,
} from 'react-native';
import { useSelector } from 'react-redux';
import Video from 'react-native-video';
import { Screen } from '../../componenents/Screen';
import { AppModal } from '../../componenents/AppModal';

const { width } = Dimensions.get('window');

export default function GalleryPage() {
  const [paused, setPaused] = useState(false);
  const [visibleModal, setVisibleModal] = useState(false);

  const mydataf = useSelector((state) => state.videos);

  const reference = useRef();

  const handleVisibleModal = () => {
    setVisibleModal(!visibleModal);
  };

  const labels =
    mydataf &&
    mydataf.data &&
    mydataf.data.map((item, index) => {
      return (
        <>
          <TouchableOpacity
            key={Math.random()}
            onPress={handleVisibleModal.bind(null, item)}>
            <Text>Video num {index + 1} </Text>
          </TouchableOpacity>
          <AppModal
            visible={visibleModal}
            hideModal={handleVisibleModal}
            child={
              <Video
                source={{ uri: item }}
                ref={(reference) => {
                  player = reference;
                }}
                resizeMode="cover"
                style={StyleSheet.absoluteFill}
              />
            }
          />
        </>
      );
    });

  return (
    <Screen style={styles.container}>
      {mydataf && mydataf.data && mydataf.data.length > 0 ? (
        <View style={styles.labelsWrapper}>{labels}</View>
      ) : (
        <Text>Empty</Text>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  labelsWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
