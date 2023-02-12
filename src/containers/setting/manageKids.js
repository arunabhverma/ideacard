import React, {useCallback} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Text} from 'react-native-paper';
import {colors} from '@theme';
import {s, ms, vs} from 'react-native-size-matters/extend';
import SmallUser from '@svg/smallUser.svg';
import ApprovedIcon from '@svg/approved.svg';
import Svg, {Line} from 'react-native-svg';

const DATA = [
  {
    name: 'Shrey Rastogi',
    isApproved: true,
    firstId: 'AEW114543FRG',
    secondId: 'AEW114543FRG',
  },
  {
    name: 'Shrey Rastogi',
    isApproved: false,
    firstId: 'AEW114543FRG',
    secondId: 'AEW114543FRG',
  },
];

const Divider = () => {
  return (
    <View style={{marginVertical: vs(10)}}>
      <Svg height="1" width="100%">
        <Line
          x1="100%"
          y1="0%"
          x2="0%"
          y2="100%"
          stroke="#CBCBCB"
          strokeDasharray="2 2"
          cx="50"
          cy="50"
          r="45"
          strokeWidth="2.5"
        />
      </Svg>
    </View>
  );
};

const ManageKids = () => {
  const renderItem = ({item, index}) => {
    return (
      <View style={styles.itemContainer}>
        <View
          style={[
            styles.userPanel,
            {
              borderBottomWidth: 1,
              paddingHorizontal: s(20),
              flexDirection: 'row',
            },
          ]}>
          <SmallUser />
          <View style={{marginLeft: s(10)}}>
            <Text style={styles.name}>{item.name}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: vs(2)}}>
              <ApprovedIcon fill={item.isApproved ? '#00D1FF' : '#D1D1D1'} />
              <Text style={styles.isApproved}>
                {item.isApproved ? 'Approved' : 'Pending'}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.userPanel}>
          <View style={styles.mainText}>
            <Text>
              <Text style={styles.keyText}>{'Ideiacard Id:  '}</Text>
              <Text style={styles.valueText}>AEW114543FRG</Text>
            </Text>
          </View>
          <Divider />
          <View style={styles.mainText}>
            <Text>
              <Text style={styles.keyText}>{'Ideiacard Id:  '}</Text>
              <Text style={styles.valueText}>AEW114543FRG</Text>
            </Text>
            <Text style={[styles.keyText, {color: 'rgba(79, 106, 255, 1)'}]}>
              {'View Details >'}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        contentContainerStyle={{alignItems: 'center', marginTop: vs(7)}}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.third,
  },
  itemContainer: {
    width: s(325),
    marginTop: vs(18),
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderRadius: ms(10),
    borderColor: 'rgba(168, 167, 167, 1)',
  },
  userPanel: {
    paddingVertical: vs(13),
    borderColor: 'rgba(203, 203, 203, 1)',
  },
  mainText: {
    marginHorizontal: s(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  keyText: {
    fontFamily: 'Inter-Regular',
    fontSize: ms(10),
    lineHeight: vs(12.1),
    fontWeight: '400',
    color: 'rgba(117, 117, 117, 1)',
  },
  valueText: {
    fontFamily: 'Inter-Regular',
    fontSize: ms(10),
    lineHeight: vs(12.1),
    fontWeight: '500',
  },
  name: {
    fontFamily: 'Inter-Regular',
    fontSize: ms(12),
    lineHeight: vs(14.52),
    fontWeight: '500',
  },
  isApproved: {
    marginLeft: s(5.36),
    fontFamily: 'Inter-Regular',
    fontSize: ms(9),
    lineHeight: vs(10.89),
    fontWeight: '500',
    color: 'rgba(154, 154, 154, 1)',
  },
});

export default ManageKids;
