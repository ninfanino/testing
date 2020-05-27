import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import { findByDataTest } from '../../../utils';

const setUp = (props={}) => {
    const component = shallow(<Header {...props} />);
    return component;
}

describe('header component', () => {
    let component;
    beforeEach(() => {
        component = setUp();
    })
    test('header should render without errors', () => {
        //vamos a renderear el componente
        //const component = shallow(<Header/>);
        //para no repetir codigo lo quitamos de aqui y lo pasamos a la variable setUp

        //const component = setUp();
        //para no ejecutar esta linea en cada componente, se movio a un metodo beforeEach

        //queremos buscar si nuestro contenedor existe
        //const wrap = component.find(`[data-test='headerComponent']`);
        //refactor, se mando a findByDataTest
        const wrap = findByDataTest(component, 'headerComponent');

        //solo debe haber un div con esa clase
        expect(wrap.length).toBe(1)
    });

    test('should render a logo', () => {
        
        //queremos buscar si nuestra imagen existe
        const logo = findByDataTest(component, 'logoImg');

        //solo debe haber una imagen con esa clase
        expect(logo.length).toBe(1)
    })
})