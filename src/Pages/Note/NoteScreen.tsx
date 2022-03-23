import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {SearchBar} from '../../Common';
import {wp} from '../../Global/Style';
import {addNote, deleteNote} from '../../Redux/Actions/NoteActions';
import {rootReducerType} from '../../Redux/Reducers';
const NoteScreen = () => {
  //redux hooks
  const noteData = useSelector(
    (state: rootReducerType) => state.note.noteArray,
  );
  const dispatch = useDispatch();
  const note = useSelector((state: rootReducerType) => state.note.note);

  const onSubmitNoteClick = () => {
    // setNote('');
    dispatch(addNote(note));
  };
  const onNoteClickHandler = (note: string) => {
    dispatch(deleteNote(note));
  };
  const onChangeInput = (t: string) => {
    dispatch({type: 'SET_NOTE', payload: t});
  };
  return (
    <View style={styles.container}>
      <Text>NoteScreen</Text>
      <SearchBar
        placeholder="Write Your Note ..."
        inputValue={note}
        setInputValue={onChangeInput}
        onSearchButtonClick={onSubmitNoteClick}
      />
      {noteData.map(item => {
        return (
          <TouchableOpacity key={item} onPress={() => onNoteClickHandler(item)}>
            <Text style={styles.note}>{item}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
export default NoteScreen;
const styles = StyleSheet.create({
  container: {
    padding: wp(5),
  },
  note: {
    fontSize: wp(4),
    margin: wp(2),
  },
});
