import { types } from '../../actions/types';
import postReducer from './reducer';

describe('Post Reducer', () => {
    test('Should return default state', () => {
        // mandamos el reducer sin parametros, deberia caer en default, y devolver el estado initial
        const newState = postReducer(undefined, {});
        expect(newState).toEqual([])
    });

    test('Should retorn new state if receiving type', () => {
        const posts = [{title: 'Test one'},{title: 'Test two'},{title: 'Test tree'}];
        const newState = postReducer(undefined, {
            type: types.GET_POSTS,
            payload: posts
        });
        expect(newState).toEqual(posts);
    });
})