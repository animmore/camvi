import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { RNCamera } from 'react-native-camera';
import { Screen } from '../../componenents/Screen';
import { setVideos } from '../../store/actions/actions';

export default function RecordPage() {
  const dispatch = useDispatch();
  const [recording, setRecording] = useState(false);
  const [processing, setProcessing] = useState(false);

  const reference = useRef();

  const PendingView = () => (
    <View
      style={{
        flex: 1,
        backgroundColor: 'lightgreen',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Waiting</Text>
    </View>
  );

  const startRecording = async (camera) => {
    setRecording(true);
    const { uri, codec = 'mp4' } = await camera.recordAsync();

    if (uri) {
      setProcessing(false);

      // setVideos([...videos, uri]);
      dispatch(setVideos(uri));
    }
  };

  const stopRecordingVideo = (camera) => {
    camera.stopRecording();
    setProcessing(true);
    setRecording(false);
  };

  let button = (
    <TouchableOpacity onPress={() => startRecording(camera)}>
      <Text style={styles.capture}>Start recording</Text>
    </TouchableOpacity>
  );

  if (recording) {
    button = (
      <TouchableOpacity onPress={() => stopRecordingVideo(camera)}>
        <Text style={styles.capture}>Stop recording</Text>
      </TouchableOpacity>
    );
  }

  if (processing) {
    button = (
      <View>
        <ActivityIndicator animating size={18} />
      </View>
    );
  }

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
});
