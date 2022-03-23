import {Action} from '../Actions/NoteActions';

const initialState: NoteStatePropsType = {
  noteArray: [],
  note: '',
};
export interface NoteStatePropsType {
  noteArray: string[];
  note: string;
}

export const NoteReducer = (
  state: NoteStatePropsType = initialState,
  action: Action,
) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return {...state, noteArray: [...state.noteArray, action.payload]};
    case 'DELETE_NOTE':
      const noteIndex = state.noteArray.findIndex(o => o === action.payload);
      return {
        ...state,
        noteArray: [
          ...state.noteArray.slice(0, noteIndex),
          ...state.noteArray.slice(noteIndex + 1),
        ],
      };
    case 'SET_NOTE':
      return {...state, note: action.payload};
    default:
      return state;
  }
};
// ['note1' , 'note2' , 'note3, ...]
// 'note4'
// ['note1' , 'note2' , 'note3, 'note4']
