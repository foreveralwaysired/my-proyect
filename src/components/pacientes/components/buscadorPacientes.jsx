import React, { useEffect, useState } from 'react'
import { Divider } from 'primereact/divider';
import { useFormContext } from 'react-hook-form';
import { FormInputText } from '../../componentesGenerales/ui/formInputText'
import { OptionsLimpiarConsultar } from '../../componentesGenerales/ui/optionsLimpiarConsultar';
import { FormCalendar } from '../../componentesGenerales/ui/formCalentar';
import XDate from 'xdate';

export const BuscadorPacientes = () => {
    const methods = useFormContext();
    const hoy_fecha = new Date().toISOString().substring(0, 10);
    // const [fechaInicial, setFechaInicial] = useState(new Date());

    const onSubmit = (data) => {
        console.log(data);
    }

    const onReset = () => {
        methods.reset();
    }

    useEffect(() => {
        methods.setFocus('nombre');
    }, []);

    return (
        <form className='grid -mb-2 mt-2' onSubmit={methods.handleSubmit(onSubmit)}>
            <div className='col-6'>
                <FormInputText
                    name="nombre"
                    label="Nombre"
                    className="w-full"
                />
            </div>
            <div className='col-3'>
                <FormCalendar
                    name='fechaInicial'
                    label='Desde'
                    dateFormat="dd/mm/yy"
                    monthNavigator={true}
                    yearNavigator={true}
                    yearRange="1900:2030"
                    className="w-full"
                    appendTo={'self'}
                    panelStyle={{ with: '100%', overFlow: 'auto' }}
                    showButtonBar={true}
                    maxDate={XDate(hoy_fecha)}
                />
            </div>
            <div className='col-3'>
                <FormCalendar
                    name='fechaFinal'
                    label='Hasta'
                    dateFormat="dd/mm/yy"
                    monthNavigator={true}
                    yearNavigator={true}
                    yearRange="1900:2030"
                    className="w-full"
                    appendTo={'self'}
                    panelStyle={{ with: '100%', overFlow: 'auto' }}
                    showButtonBar={true}
                    maxDate={XDate(hoy_fecha)}
                />
            </div>
            <div className='col-12 mt-4 -mb-4'>
                <OptionsLimpiarConsultar onReset={onReset} />
            </div>
            <Divider className='mx-2' />
        </form>
    )
}
