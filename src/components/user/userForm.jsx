import React, { useRef } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useUserStore } from '../../hooks/user/useUserStore';
import { LstRegisters } from '../catalogos/components/lstRegisters';
import { RegisterNewUserForm } from './components/registerNewUserForm';
import { Toast } from 'primereact/toast';

export const UserForm = () => {
    const { startAddNewUser } = useUserStore();
    const methods = useForm();
    const toast = useRef(null);

    const showError = () => {
        toast.current.show({ severity: 'error', summary: 'Error', detail: 'Las contraseñas no coinciden', life: 5000 });
    }

    const onSubmit = (data) => {
        if (data.password === data.confirmPassword) {
            startAddNewUser(data);
        } else {
            showError();
        }
    };

    return (
        <div className="p-fluid mt-3 mb-3">
            <Toast ref={toast} />
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <RegisterNewUserForm />
                    <hr />
                    <LstRegisters />
                </form>
            </FormProvider>
        </div>
    )
}
