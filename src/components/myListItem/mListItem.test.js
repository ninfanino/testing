import React from 'react';
import { shallow } from 'enzyme';
import { findByDataTest, checkProps } from '../../../utils/';
import ListItem from './myListItem';

describe('ListItem Component', () => {
    describe('Checking PropTypes', () => {
        test('Should NOT throw warning', () => {
            const expectedProps = {
                title: 'Title test', 
                desc: 'Desc test'
            };

            const propsError = checkProps(ListItem, expectedProps);
            expect(propsError).toBeUndefined();
        })
    })

    describe('Component renders', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                title: 'Title test', 
                desc: 'Desc test'
            }
            wrapper = shallow(<ListItem {...props}/>)
        })
        test('Should render without error', () => {
            const component = findByDataTest(wrapper, 'listItemComponent');
            expect(component.length).toBe(1);
        })
        test('Should render a title', () => {
            const title = findByDataTest(wrapper, 'componentTitle');
            expect(title.length).toBe(1);
        })
        test('Should render a desc', () => {
            const desc = findByDataTest(wrapper, 'componentDesc');
            expect(desc.length).toBe(1);
        })
    })

    describe('Should no render', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                desc: 'Desc test'
            }
            wrapper = shallow(<ListItem {...props}/>)
        })
        test('Component is not rendered', () => {
            const component = findByDataTest(wrapper, 'listItemComponent');
            expect(component.length).toBe(0);
        })
    })
})