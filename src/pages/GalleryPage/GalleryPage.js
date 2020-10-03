import React, { useState, useRef, Fragment } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import Video from 'react-native-video';
import { Screen } from '../../componenents/Screen';
import { AppModal } from '../../componenents/AppModal';
import { AppButton } from '../../componenents/AppButton';

export default function GalleryPage({ navigation }) {
  const [visibleModal, setVisibleModal] = useState(false);
  const [recordNewVideo, setRecordNewVideo] = useState(false);

  const myVids = useSelector((state) => state.videos);

  const reference = useRef();

  const handleVisibleModal = () => {
    setVisibleModal(!visibleModal);
  };

  const handleGoToRecord = () => {
    setRecordNewVideo(true);

    navigation.navigate('Recorder');
  };

  const labels =
    myVids &&
    myVids.data &&
    myVids.data.map((item, index) => {
      return (
        <Fragment key={Math.random()}>
          <TouchableOpacity
            onPress={handleVisibleModal.bind(null, item)}
            style={styles.labelButton}>
            <Text>Video num {index + 1} </Text>
          </TouchableOpacity>
          <AppModal
            visible={visibleModal}
            hideModal={handleVisibleModal.bind(null, item)}
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
        </Fragment>
      );
    });

  return (
    <Screen style={styles.container}>
      {myVids && myVids.data && myVids.data.length > 0 ? (
        <View style={styles.labelsWrapper}>{labels}</View>
      ) : (
        <Text style={styles.emptyLabel}>Empty</Text>
      )}
      <AppButton onPress={handleGoToRecord} label="RECORD NEW VIDEO" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  labelsWrapper: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  emptyLabel: {
    alignSelf: 'center',
  },
  recordBtn: {
    alignSelf: 'center',
  },
  labelButton: {
    margin: '1%',
    width: '31%',
    height: '10%',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
