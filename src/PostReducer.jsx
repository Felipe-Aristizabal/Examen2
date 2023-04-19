export const PostReducer = (initialState, action) => {
	switch (action.type) {
		case "LISTS POSTS":
			return [action.payload];
		default:
			return initialState;
	}
};