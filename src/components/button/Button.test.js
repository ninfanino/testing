import React from 'react';
import { shallow } from 'enzyme';
import { findByDataTest, checkProps } from '../../../utils';
import SharedButton from './Button';

describe('Shared Button', () => {
    describe('Checking Proptypes', () => {
        test('Should NOT thrown a warning', () => {
            const expectedProps = {
                buttonText: 'Example button test',
                emitEvent: () => {

                }
            };
            const propsError = checkProps(SharedButton, expectedProps);
            expect(propsError).toBeUndefined();
        })
    });

    describe('Renders', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                buttonText: 'Example button test',
                emitEvent: () => {

                }
            }
            wrapper = shallow(<SharedButton {...props}/>)
        });

        test('Should render a button', () => {
            const button = findByDataTest(wrapper, 'buttonComponent');
            expect(button.length).toBe(1)
        })
    })
})