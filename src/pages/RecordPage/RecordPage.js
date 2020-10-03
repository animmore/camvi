import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { RNCamera } from 'react-native-camera';
import { Screen } from '../../componenents/Screen';
import { AppButton } from '../../componenents/AppButton';
import { setVideos } from '../../store/actions/actions';

export default function RecordPage() {
  const dispatch = useDispatch();
  const [recording, setRecording] = useState(false);

  const reference = useRef();

  const startRecording = async (camera) => {
    setRecording(true);
    const { uri, codec = 'mp4' } = await camera.recordAsync();

    if (uri) {
      dispatch(setVideos(uri));
    }
  };

  const stopRecordingVideo = (camera) => {
    camera.stopRecording();

    setRecording(false);
  };

  let button = (
    <AppButton onPress={() => startRecording(camera)} label="Start recording" />
  );

  if (recording) {
    button = (
      <AppButton
        onPress={() => stopRecordingVideo(camera)}
        label="Stop recording"
      />
    );
  }

  const PendingView = () => (
    <View style={styles.waitWrapper}>
      <Text style={styles.waitText}>Waiting</Text>
    </View>
  );

  return (
    <Screen style={styles.container}>
      <RNCamera
        ref={(reference) => (camera = reference)}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        captureAudio
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}>
        {({ camera, status, recordAudioPermissionStatus }) => {
          if (status !== 'READY') {
            return <PendingView />;
          }
          return <View style={styles.wrapper}>{button}</View>;
        }}
      </RNCamera>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  wrapper: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  waitWrapper: {
    flex: 1,
    width: '100%',
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  waitText: {
    color: 'white',
  },
});
