import moxios from 'moxios';
import { testStore } from '../../utils';
import { fetchPosts } from '../redux/actions/';

describe('fetch post action', () => {
    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    test('store updated correctly', () => {
        const expectedState = [{
            title: 'example title 1',
            body: 'test1'
        },{
            title: 'example title 2',
            body: 'test1'
        },{
            title: 'example title 3',
            body: 'test1'
        }];

        const store = testStore();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status:200,
                response: expectedState
            });
        });

        return store.dispatch(fetchPosts())
        .then(() => {
            const newState = store.getState();
            expect(newState.posts).toBe(expectedState);
        })
    })
})