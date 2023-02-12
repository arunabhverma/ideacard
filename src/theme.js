import { DefaultTheme } from 'react-native-paper';
import { ms, vs } from 'react-native-size-matters/extend';

const theme = {
  ...DefaultTheme,
    roundness: ms(10),
  colors: {
    ...DefaultTheme.colors,
    primary: '#5647B7',
    secondary: 'yellow',
    third: 'rgb(242, 244, 254)',
    error: '#E70000',
    success: '#3ADF00',
    disabled: '#B6B6B6',
    iconColor: '#C0C0C0',
    headerGray: '#C4C4C4',
    grayText : "#8C8C8C",
    grayText1: '#7A7A7A',
    activeIconColor: 'rgba(149, 165, 255, 1)',
    placeholderTextColor: 'rgba(134, 134, 134, 0.6)'
  },
  shadow: {
    shadowOffset:{width:0, height:vs(4)}, 
    shadowRadius:ms(4), 
    shadowColor:DefaultTheme.colors.text, 
    shadowOpacity:0.25, 
    elevation:8,
  },
  center: {
    justifyContent:'center', 
    alignItems: 'center'
  }
};

const colors = theme.colors
const shadow = theme.shadow
const center = theme.center

export {
    theme,
    colors,
    shadow,
    center
}