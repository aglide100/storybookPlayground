import { createStore } from 'redux';

export const actions = {
    ARCHIVE_NAME: 'ARCHIVE_NAME', 
    PIN_NAME: 'PIN_NAME',
};

export const archiveName = id => ({ type: actions.ARCHIVE_NAME, id});
export const pinName = id => ({ type: actions.PIN_NAME, id});

function nameStateReducer(nameState) {
    return (state, action) => {
        return {
            ...state,
            names: state.names.map(
                name => (name.id === action.id ? {...name, state: nameState} : name)
            ),
        };
    };
}

export const reducer = (state, action) => {
    switch (action.type) {
        case actions.ARCHIVE_NAME:
            return nameStateReducer('NAME_ARCHIVED')(state,action);
        case actions.PIN_NAME:
            return nameStateReducer('NAME_PINNED')(state, action);
        default:
            return state;
    }
};

const defaultNames = [
    { id: '1', title: 'Something', state: 'NAME_INBOX'},
    { id: '2', title: 'Something more', state: 'NAME_INBOX'},
    { id: '3', title: 'Something else', state: 'NAME_INBOX'},
    { id: '4', title: 'Something again', state: 'NAME_INBOX'},  
];

export default createStore(reducer, {names: defaultNames});