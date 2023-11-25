import React, { useRef } from 'react'
import { useFormContext } from 'react-hook-form';
import { FormInputText } from '../../componentesGenerales/ui/formInputText';
import { Button } from 'primereact/button';
import { useReSizeWindow } from '../../../hooks/customHooks/useReSizeWindow';
// import { useDispatch } from 'react-redux';

export const NewRegister = (props) => {
    const { screenIsOnLandscape } = useReSizeWindow();
    const methods = useFormContext();
    const buttonRef = useRef(null);
    // const dispatch = useDispatch();

    const onclear = () => {
        // dispatch(onClearResultadoSelected());
        methods.setValue(props.nameText, '');
    }

    return (
        <div className="flex justify-content-center flex-wrap card-container yellow-container">
            <div className="flex align-items-center justify-content-center">
                <div className="p-inputgroup">
                    <FormInputText
                        name={props.nameText}
                        label={props.labelText}
                        className={screenIsOnLandscape ? "w-25rem" : "w-11rem"}
                        rules={{ required: 'La descripcion es requerida' }}
                        isrequired={"true"}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                buttonRef.current.click();
                            }
                        }}
                    />
                    <Button
                        label="Guardar"
                        icon="pi pi-save"
                        className={screenIsOnLandscape ? "p-inputgroup w-7rem" : "w-6rem"}
                        style={{ maxHeight: '2.4rem' }}
                        type="submit"
                        ref={buttonRef}
                    />
                    {/* {resultadosSelected !== null && (
                        <Button
                            label="Cancelar"
                            icon="pi pi-times"
                            className={screenIsOnLandscape ? "p-inputgroup w-7rem ml-2" : "w-6rem ml-2"}
                            style={{ maxHeight: '2.4rem' }}
                            type="button"
                            onClick={() => onclear()}
                        />
                    )} */}
                </div>
            </div>
        </div>
    )
}
