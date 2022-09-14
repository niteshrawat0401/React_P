import {
  ERR_DATA,
  FILTER_DATA,
  GET_ALL_DATA,
  REQ_GET_DATA,
  SORT_DATA,
} from "../actionType";

const initState = {
  data: [],
  filter: [],
  products: [],
};

export const getreducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ERR_DATA:
      return {
        ...state,
        products: [],
      };
    case REQ_GET_DATA:
      return {
        ...state,
        products: [],
      };
    case GET_ALL_DATA:
      return {
        ...state,
        products: payload,
      };
    case SORT_DATA:
      return {
        ...state,
        products: state.products.sort((a, b) => {
          if (payload === "asc") {
            return a.price - b.price;
          } else {
            return b.price - a.price;
          }
        }),
      };
      case FILTER_DATA:
      return {
        ...state,
        filterData: state.products.filter((item) => {
          return +item.price < +payload;
        }),
      };
    // case FILTER_DATA:
    //   return {
    //     ...state,
    //     filter: state.products.filter((item) => {
    //       return item.category === payload;
    //     }),
    //   };

    default:
      return state;
  }
};
