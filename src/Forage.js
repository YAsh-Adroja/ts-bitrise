import React, {useEffect} from 'react';
import {Platform, StyleSheet, AppState, Text, View} from 'react-native';
import Forage from 'react-native-forage';

const ForageScreen = () => {
  useEffect(() => {
    launchBugSee().then();
  }, []);

  const launchBugSee = async () => {
    if (Platform.OS === 'ios') {
      // This id use for iOS
      // await Bugsee.launch('82551107-1751-4923-9bfc-57992d663ce3');
    } else {
      // This id use for android
      Forage.start('cfc56095-2bc2-47f6-a8ee-158e1703bbed', AppState);
    }
  };

  const manageCrash = () => {
    throw new Error();
  };

  return (
    <View style={styles.main}>
      <Text onPress={manageCrash}>Press to Crash App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ForageScreen;
