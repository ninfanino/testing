import App from './App';
import { shallow } from 'enzyme';
import { findByDataTest, testStore } from '../utils';
import React from 'react';

const setup = (initialState={}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<App store={store} />).childAt(0).dive();
    return wrapper;
}

describe('App component', () => {
    let wrapper;
    beforeEach(() => {
        const initialState = {
            posts: [{
                title: 'Example title',
                body: 'Some test'
            },{
                title: 'Example title',
                body: 'Some test'
            },{
                title: 'Example title',
                body: 'Some test'
            }]
        }
        wrapper = setup(initialState);
    });

    test('Should render without errors', () => {
        const component = findByDataTest(wrapper, 'appComponent');
        expect(component.length).toBe(1);
    })
})