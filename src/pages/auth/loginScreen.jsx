import { FormProvider, useForm } from "react-hook-form";
import logoHeader from "../../assets/img/headerServicioSocial.png"
import estudiantesIMG from "../../assets/img/estudiantes.svg"
import teacherAlumnos from "../../assets/img/teachearAlumnos.svg"
import admin from "../../assets/img/admin.svg"
import people from "../../assets/img/peoples.svg"
import { Button } from "primereact/button";

export const LoginScreen = () => {

    const methods = useForm();

    const onSubmit = (data) => {

    }

    return (
        <div className="grid h-screen" style={{ background: "#7d76cb" }}>
            <div className="col-8 max-w-full" style={{ borderRadius: '0% 30px 30px 0% / 10% 30px 30px 10%', background: "#ffffff" }}>
                <header>
                    <img className="sm:mt-2 md:mt-3 lg:mt-4 xl:mt-5 sm:ml-2 md:ml-3 lg:ml-4 xl:ml-5 sm:w-4 md:w-1 lg:w-1 xl:w-3" src={logoHeader} alt="logoHeader" />

                </header>


                <div className="grid mt-8">
                    <div className="col-12 sm:col-12 md:col-4 lg:col-4 xl:col-4">
                        <img className="col-12 -mb-5" src={estudiantesIMG} alt="logoHeader" />
                        <h3 className="flex justify-content-center align-content-center col-12 -mb-6" style={{ color: "#0e2123" }}>Acceso</h3>
                        <h3 className="flex justify-content-center align-content-center col-12" style={{ color: "#0e2123" }}>Estudiantes Universitarios.</h3>
                    </div>
                    <div className="col-12 sm:col-12 md:col-4 lg:col-4 xl:col-4">
                        <img className="col-12 -mb-5" src={teacherAlumnos} alt="logoHeader" />
                        <h3 className="flex justify-content-center align-content-center col-12 -mb-6" style={{ color: "#0e2123" }}>Acceso Estudiantes</h3>
                        <h3 className="flex justify-content-center align-content-center col-12" style={{ color: "#0e2123" }}>Primaria y Secundaria.</h3>
                        <div className="flex justify-content-center align-content-center">
                            <Button className="btn-active" label="Submit" />
                        </div>
                    </div>
                    <div className="col-12 sm:col-12 md:col-4 lg:col-4 xl:col-4">
                        <img className="col-12 -mb-5" src={admin} alt="logoHeader" />
                        <h3 className="flex justify-content-center align-content-center col-12 -mb-6" style={{ color: "#0e2123" }}>Acceso</h3>
                        <h3 className="flex justify-content-center align-content-center col-12" style={{ color: "#0e2123" }}>Administradores.</h3>
                    </div>
                </div>


            </div>
            <div className="col-4 max-w-full h-screen flex">
                <div className="flex align-content-center justify-content-center flex-wrap">
                    <img className="flex align-items-center justify-content-center col-12 -mt-8" src={people} alt="logoHeader" />
                </div>
            </div>
        </div >
    );
}