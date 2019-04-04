export function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, videos: action.payload };
    case 'SEARCH_DATA':
      return {
        ...state,
        videos: action.payload
      };
    default:
      return state;
  }
}
