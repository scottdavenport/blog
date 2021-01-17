import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = async () => {
	return function (dispatch, getState) {
		const promise = jsonPlaceholder.get('/posts');

		return {
			type: 'FETCH_POSTS',
			payload: promise,
		};
	};
	// Bad approach!!!
	// We are breaking the rules of redux and an action creator
};
