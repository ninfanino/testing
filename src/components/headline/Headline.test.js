import React from 'react';
import { shallow } from 'enzyme';
import Headline from './Headline';
import { findByDataTest, checkProps } from '../../../utils';

const setUp = (props={}) => {
    const component = shallow(<Headline {...props}/>);
    return component;
}

describe('Headline component', () => {
    describe('Checking prop types', () => {
        test('Proptypes should not throw a warning', () => {
            const expectedProps = {
                header: 'test header',
                desc: 'test desc',
                tempArr: [{
                    fname: 'test name',
                    lname: 'test lastname',
                    email: 'test email',
                    age: 22,
                    onlineStatus: true
                }]
            };

            const propsError = checkProps(Headline, expectedProps);
            expect(propsError).toBeUndefined();
        })
    })

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