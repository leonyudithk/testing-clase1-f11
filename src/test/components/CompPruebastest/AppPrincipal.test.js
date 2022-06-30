import { shallow } from 'enzyme'
import React from 'react'
import AppPrincipal from '../../../components/CompPruebasTest/AppPrincipal'

describe('Prueba al Componente AppPrincipal', ()=>{

    test('validar el renderizado en AppPrincipal', ()=>{

        //mesa trabajo - Arrglear
        const saludo1 = 'Bienvenidos Frontend 11'
        const subtitulo1 = 'Les quedas 4 clases para finalizar'
        const wrapper = shallow(<AppPrincipal saludo={saludo1} subtitulo={subtitulo1}/>)
       
        // ACtuar
        expect(wrapper).toMatchSnapshot()

    })

})