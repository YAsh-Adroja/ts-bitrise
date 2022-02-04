import React, {useEffect} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Bugsee from 'react-native-bugsee';

const BugSee = () => {
  useEffect(() => {
    launchBugSee().then();
  }, []);

  const launchBugSee = async () => {
    if (Platform.OS === 'ios') {
      // This id use for iOS
      await Bugsee.launch('82551107-1751-4923-9bfc-57992d663ce3');
    } else {
      // This id use for android
      await Bugsee.launch('804946b7-4b5e-476a-86cc-74eb38e92afd');
    }
  };

  const manageCrash = () => {};

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

export default BugSee;
