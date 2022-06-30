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

    test('Mostrar una lista categoria', ()=>{
        //Arreglar-preparar mi mesa de trabajo
        const categorias = ['Marvel', 'Flores', 'Holas', 'Dragon Ball', '#']
        const wrapper = shallow(<GifExpertApp  defaultCategories={categorias} />)

        //Actuar que es hacer el test
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('GifGrid').length).toBe(categorias.length)

   
})
})