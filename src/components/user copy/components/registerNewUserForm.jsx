import { Button } from 'primereact/button';
import { FormInputText } from '../../componentesGenerales/ui/formInputText';
import { Toolbar } from 'primereact/toolbar';
import { OptionsUser } from './optionsUser';
import { FormInputTextPassword } from '../../componentesGenerales/ui/formInputTextPassword';

export const RegisterNewUserForm = () => {

    return (
        <div className='grid'>
            <div className='col-12 sm:col-12 md:col-6 lg:col-3 xl:col-4'>
                <FormInputText
                    name="name"
                    label="Nombre"
                    className={"mb-2"}
                    isrequired="true"
                    rules={true ? { required: 'El Nombre es Requerido' } : {}}
                />
            </div>
            <div className='col-12 sm:col-12 md:col-6 lg:col-3 xl:col-4'>
                <FormInputText
                    name="firtsLastName"
                    label="Primer Apellido"
                    className={"mb-2"}
                    isrequired="false"
                />
            </div>
            <div className='col-12 sm:col-12 md:col-6 lg:col-3 xl:col-4'>
                <FormInputText
                    name="secondLastName"
                    label="Segundo Apellido"
                    className={"mb-2"}
                    isrequired="false"
                />
            </div>
            <div className='col-12 sm:col-12 md:col-6 lg:col-3 xl:col-4'>
                <FormInputText
                    name="email"
                    label="Correo"
                    className={"mb-2"}
                    isrequired="true"
                    rules={true ? { required: 'El correo es Requerido' } : {}}
                />
            </div>
            <div className='col-12 sm:col-12 md:col-6 lg:col-3 xl:col-4'>
                <FormInputTextPassword
                    name="password"
                    placeholder="Contraseña"
                    className={"mb-2"}
                    isrequired="true"
                    rules={true ? { required: 'La Contraseña es requerida' } : {}}
                />
            </div>
            <div className='col-12 sm:col-12 md:col-6 lg:col-3 xl:col-4'>
                <FormInputTextPassword
                    name="confirmPassword"
                    placeholder="Confirmar Contraseña"
                    className={"mb-2"}
                    isrequired="true"
                    rules={true ? { required: 'La Confirmacion de la Contraseña es Requerida' } : {}}
                />
            </div>
            <div className='col-12'>
                <OptionsUser />
            </div>
        </div>
    )
}
