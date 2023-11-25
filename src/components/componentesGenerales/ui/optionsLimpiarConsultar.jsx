import { Button, Toolbar } from 'primereact';
import { useEffect, useState } from 'react';
import { useGetSizeWindow } from '../../../hooks/customHooks/useGetSizeWindow';

export const OptionsLimpiarConsultar = ({ onReset }) => {
    const { getSizeWindow } = useGetSizeWindow();
    const [justifyLeft, setJustifyLeft] = useState("");
    const [justifyRight, setJustifyRight] = useState("");
    const [col, setCol] = useState("");

    useEffect(() => {
        if (getSizeWindow() === 'sm') {

            setJustifyLeft(`justify-content-start`);
            setJustifyRight("justify-content-start");
            setCol("col-12");

        } else if (getSizeWindow() === 'md') {

            setJustifyLeft(`justify-content-start`);
            setJustifyRight("justify-content-end");
            setCol("col-6");

        } else if (getSizeWindow() === 'lg') {

            setJustifyLeft(`justify-content-start`);
            setJustifyRight("justify-content-end");
            setCol("col-4");

        } else if (getSizeWindow() === 'xl') {

            setJustifyLeft(`justify-content-start`);
            setJustifyRight("justify-content-end");
            setCol("col-3");

        }
    }, []);

    const leftContents = (
        <div className={`grid -mb-2 flex ${justifyLeft}`}>
            <div className={col}>
                <Button
                    label="Limpiar"
                    className="w-full p-ripple"
                    type="button"
                    icon="pi pi-replay"
                    style={{ maxHeight: '2.3rem' }}
                    onClick={() => onReset()}
                />
            </div>

        </div>
    );

    const rightContents = (
        <div className={`grid -mb-2 flex ${justifyRight}`}>
            <div className={col}>
                <Button
                    label="Consultar"
                    className="w-full p-ripple"
                    type='submit'
                    icon="pi pi-search"
                    style={{ maxHeight: '2.3rem' }}
                />
            </div>
        </div>
    );

    return (
        <div className='mx-2 p-0'>
            <div className='card grid p-0'>
                <div className='col-12 sm:col-12 md:col-6 lg:col-6 xl:col-6'>
                    {leftContents}
                </div>
                <div className='col-12 sm:col-12 md:col-6 lg:col-6 xl:col-6'>
                    {rightContents}
                </div>
            </div>
        </div>
    )
}
