import {Dimensions} from 'react-native';
const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');
export function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}
export function hp(percentage) {
  const value = (percentage * viewportHeight) / 100;
  return Math.round(value);
}
const CColor = {
  black: '#141204',
  red: '#F24236',
  green: '#447604',
  white: '#fff',
  blue: '#2E86AB',
};

export {CColor};
