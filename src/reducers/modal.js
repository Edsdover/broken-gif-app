import { OPEN_MODAL, CLOSE_MODAL } from '../actions';

const initialState =  {
  modalIsOpen: false,
  selectedGif: null
};

export default function modal(state = initialState, action) {
  switch(action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        modalIsOpen: true,
        selectedGif: action.gif.selectedGif
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modalIsOpen: false,
        selectedGif: null
      };
    default:
      return state;
  }
}
