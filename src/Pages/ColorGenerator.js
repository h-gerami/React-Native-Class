import React, {useReducer} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {HgButton} from '../Common';
import {wp, CColor} from '../Global/Style';
const reducer = (state, action) => {
  switch (action.type) {
    case 'changeRed':
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : {...state, red: state.red + action.payload};
    case 'changeGreen':
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : {...state, green: state.green + action.payload};
    case 'changeBlue':
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : {...state, blue: state.blue + action.payload};
    default:
      return state;
  }
};
const initialState = {
  red: 0,
  green: 0,
  blue: 0,
};
const ColorGenerator = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const unit = 20;

  return (
    <View style={styles.container}>
      <Text>Change Red</Text>
      <HgButton
        onPress={() => dispatch({type: 'changeRed', payload: unit})}
        type="danger"
        title="Increase Red"
      />
      <HgButton
        onPress={() => dispatch({type: 'changeRed', payload: -1 * unit})}
        type="danger"
        title="Decrease Red"
      />
      <Text>Change Green</Text>
      <HgButton
        onPress={() => dispatch({type: 'changeGreen', payload: unit})}
        type="success"
        title="Increase Green"
      />
      <HgButton
        onPress={() => dispatch({type: 'changeGreen', payload: -1 * unit})}
        type="success"
        title="Decrease Green"
      />
      <Text>Change Blue</Text>
      <HgButton
        onPress={() => dispatch({type: 'changeBlue', payload: unit})}
        type="primary"
        title="Increase Blue"
      />
      <HgButton
        onPress={() => dispatch({type: 'changeBlue', payload: -1 * unit})}
        type="primary"
        title="Decrease Blue"
      />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: wp(30),
          width: wp(80),
          backgroundColor: `rgb(${state.red},${state.green},${state.blue})`,
        }}>
        <Text
          style={{
            color: CColor.white,
            fontSize: wp(10),
          }}>{`rgb(${state.red},${state.green},${state.blue})`}</Text>
      </View>
    </View>
  );
};
export default ColorGenerator;
const styles = StyleSheet.create({
  container: {
    padding: wp(5),
  },
});
