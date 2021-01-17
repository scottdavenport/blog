import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = async () => {
	// Bad approach!!!
	// We are breaking the rules of redux and an action creator
	const response = await jsonPlaceholder.get('/posts');

	return {
		type: 'FETCH_POSTS',
		payload: response,
	};
};
