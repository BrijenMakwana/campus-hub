import { CameraView, useCameraPermissions } from 'expo-camera';
import LottieView from 'lottie-react-native';
import React, { PropsWithChildren, SetStateAction, useState } from 'react';
import { Modal, View, StyleSheet, TouchableOpacity } from 'react-native';

import { Button } from './ui/button';
import { Text } from './ui/text';

interface IBarcodeScanner {
  setValue: React.Dispatch<SetStateAction<string>>;
}

interface ICameraViewer extends IBarcodeScanner {
  onClose: () => void;
}

const BarcodeScanner = (props: PropsWithChildren<IBarcodeScanner>) => {
  const { children, setValue } = props;

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableOpacity
        className="items-center justify-center rounded-md border border-input px-5"
        onPress={() => setModalVisible(true)}>
        {children}
      </TouchableOpacity>

      <Modal visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
        <CameraViewer setValue={setValue} onClose={() => setModalVisible(false)} />
      </Modal>
    </>
  );
};

const CameraViewer = (props: ICameraViewer) => {
  const { setValue, onClose } = props;

  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View className="flex-1 items-center justify-center gap-5">
        <Text className="text-center text-lg">We need your permission to show the camera</Text>
        <Button onPress={requestPermission}>
          <Text>Grant Permission</Text>
        </Button>
      </View>
    );
  }

  const handleBarcodeScanned = ({ data }) => {
    setValue(data);
    onClose();
  };

  return (
    <View style={StyleSheet.absoluteFillObject}>
      <CameraView
        style={[
          StyleSheet.absoluteFillObject,
          {
            alignItems: 'center',
            justifyContent: 'center',
          },
        ]}
        facing="back"
        onBarcodeScanned={handleBarcodeScanned}>
        <LottieView
          autoPlay
          loop
          style={{
            width: 500,
            aspectRatio: 1,
          }}
          source={require('./../assets/scan.zip')}
          speed={1}
        />
      </CameraView>
    </View>
  );
};

export default BarcodeScanner;
