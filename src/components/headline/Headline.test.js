import React from 'react';
import { shallow } from 'enzyme';
import Headline from './Headline';
import { findByDataTest } from '../../../utils';

const setUp = (props={}) => {
    const component = shallow(<Headline {...props}/>);
    return component;
}

describe('Headline component', () => {
    describe('Have props', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                header: 'Test header',
                desc: 'Test description'
            };
            wrapper = setUp(props);
        });

        test('Should render without error', () => {
            const component = findByDataTest(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(1);
        })

        test('Should render a H1', () => {
            const h1 = findByDataTest(wrapper, 'header');
            expect(h1.length).toBe(1);
        })

        test('Should render a p', () => {
            const desc = findByDataTest(wrapper, 'desc');
            expect(desc.length).toBe(1);
        })
    });

    describe('Have NO props', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setUp();
        });

        test('Should no render', () => {
            const component = findByDataTest(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(0);
        })
    });
})