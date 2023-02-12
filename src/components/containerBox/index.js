import React from 'react';
import {View, StyleSheet} from 'react-native';
import {shadow, colors} from '@theme';
import {s, vs, ms} from 'react-native-size-matters/extend';

const ContainerBox = ({children}) => {
  return <View style={styles.containerStyle}>{children}</View>;
};

const styles = StyleSheet.create({
  containerStyle: {
    ...shadow,
    backgroundColor: colors.surface,
    paddingHorizontal: s(20),
    paddingVertical: vs(25),
    width: s(325),
    borderRadius: ms(15),
  },
});

export default ContainerBox;
