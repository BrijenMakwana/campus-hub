import { CameraView, useCameraPermissions } from 'expo-camera';
import React, { PropsWithChildren, SetStateAction, useState } from 'react';
import { TouchableOpacity, Modal, View, Button, StyleSheet } from 'react-native';

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
      <TouchableOpacity onPress={() => setModalVisible(true)}>{children}</TouchableOpacity>

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
      <View style={StyleSheet.absoluteFillObject}>
        <Text>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
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
        style={StyleSheet.absoluteFillObject}
        facing="back"
        onBarcodeScanned={handleBarcodeScanned}
      />
    </View>
  );
};

export default BarcodeScanner;
