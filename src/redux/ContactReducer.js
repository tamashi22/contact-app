import {
  DATA_GET_REQUEST,
  DATA_GET_SUCCESS,
  DATA_GET_FAIL,
  SORT_A_Z,
  SEARCH_CONTACT,
  SORT_Z_A,
 // DISLIKE,
  //LIKE
   UPDATE_CONTACT
} from "./types";

const initialState = {
  data: [],
  //favorite: [],
  loading: "false",
  error: ""
};
const filterAz = (a, b, i) => {
  const name1 = a[i];
  const name2 = b[i];
  if (name1 < name2) {
    return 1;
  }
  if (name1 > name2) {
    return -1;
  } else {
    return 0;
  }
};
const filterZa = (a, b, i) => {
  const name1 = a[i];
  const name2 = b[i];
  if (name1 < name2) {
    return -1;
  }
  if (name1 > name2) {
    return 1;
  } else {
    return 0;
  }
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_GET_REQUEST:
      return {
        ...state,
        loading: true
      };
    case DATA_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: ""
      };
    case DATA_GET_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: []
      };
    case SEARCH_CONTACT:
      return {
        ...state,
        data: state.data.filter((item) => {
          const firstLastName = item.firstName + " " + item.lastName;
          return firstLastName
            .toLowerCase()
            .includes(action.payload.toLowerCase());
        })
      };
    case UPDATE_CONTACT:
      console.log(action.payload);
      const newData = state.data.map((item)=>item.id === action.payload.id ? action.payload : item)
      console.log(newData)
      localStorage.setItem('localData', JSON.stringify(newData));
      
      return{
        ...state,
        data: newData}
    /*case LIKE:
      return {
        ...state,
        favorite: [...state.favorite, action.payload]
      };
    case DISLIKE:
      let element = state.favorite.filter(
        (element) => element.id == action.payload.id
      );
      let favorite = state.favorite;
      favorite.splice(state.favorite.indexOf(element[0]), 1);
      return {
        ...state,
        favorite: favorite
      };*/
    case SORT_A_Z:
      return {
        ...state,
        data: state.data.sort((a, b) => {
          return filterAz(a, b, "firstName");
        })
      };
    case SORT_Z_A:
      return {
        ...state,
        data: state.data.sort((a, b) => {
          return filterZa(a, b, "firstName");
        })
      };
    default:
      return state;
  }
};
export default reducer;
