import React, {useEffect, useState} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import RNUxcam from 'react-native-ux-cam';

const UXCam = () => {
  const [title, setTitle] = useState('UXCam');

  useEffect(() => {
    launchBugSee().then();
  }, []);

  const launchBugSee = async () => {
    if (Platform.OS === 'ios') {
      // This id use for iOS
      // UX-Cam
      RNUxcam.optIntoSchematicRecordings(); // Add this line to enable iOS screen recordings
      RNUxcam.startWithKey('fom58ltayuemril'); // Add this line after RNUcam.optIntoSchematicRecordings();
    } else {
      // This id use for android
      // UX-Cam
      RNUxcam.startWithKey('03cwa8odl2zs84s'); // Add this line after RNUcam.optIntoSchematicRecordings();
    }
  };

  const manageCrash = () => {
    alert('Check CLick ...');
    // setTitle(null);
    throw new Error();
  };

  return (
    <View style={styles.main}>
      <Text onPress={manageCrash}>Press to Crash App</Text>
      <Text style={styles.titleText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 15,
  },
});

export default UXCam;
