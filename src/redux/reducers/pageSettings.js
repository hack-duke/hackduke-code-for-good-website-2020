const pageSettingsDefault = {
  modal: undefined
};

const pageSettingsReducer = (state = pageSettingsDefault, action) => {
  switch (action.type) {
    case 'CHANGE_MODAL':
      return {
        ...state,
        modal: action.modal
      };
    default:
      return state;
  }
};

export default pageSettingsReducer;
