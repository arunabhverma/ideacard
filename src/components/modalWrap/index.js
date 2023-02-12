import React from 'react';
import {View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {s, vs, ms} from 'react-native-size-matters/extend';
import {colors} from '@theme';

const ModalWrapper = props => {
  return (
    <Modal
      {...props}
      style={{margin: 0, alignSelf: 'center'}}
      useNativeDriverForBackdrop
      backdropOpacity={0.5}
      animationIn={'fadeInUp'}
      animationOut={'fadeOutDown'}
      onBackButtonPress={props.onClose}
      onBackdropPress={props.onClose}>
      <View style={styles.modalWrapper}>
        {props.children}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
    modalWrapper: {
        width: s(324),
        backgroundColor: colors.surface,
        paddingHorizontal: s(20),
        paddingVertical: vs(25),
        borderRadius: ms(15),
    }
})

export default ModalWrapper;
