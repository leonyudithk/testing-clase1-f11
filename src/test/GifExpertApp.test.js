import React from 'react'
import {shallow} from 'enzyme'
import {GifExpertApp} from '../GifExpertApp'

describe('Pruebas al Componente GifExpertApp', ()=>{
    test('Debe mostrarse correctamente una categoria', ()=>{
            //Arreglar-preparar mi mesa de trabajo
            const wrapper = shallow(<GifExpertApp/>)

            //Actuar que es hacer el test
            expect(wrapper).toMatchSnapshot()
    })
})