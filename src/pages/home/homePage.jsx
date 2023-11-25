import { FormProvider, useForm } from "react-hook-form";
import { BuscadorPacientes } from "../../components/pacientes/components/buscadorPacientes";

const HomePage = () => {

    const methods = useForm();

    const onSubmit = (data) => {

    }

    return (
        <div className="layout-dashboard">
            <FormProvider {...methods} >
                <div className="grid">
                    <div className="col-12 md:col-8">
                        <div className="card" style={{ height: "45em" }}>
                            <h1>Buscar Pacientes</h1>
                            <BuscadorPacientes />
                        </div>
                    </div>
                    <div className="col-12 md:col-4">
                        <div className="card">
                        </div>
                    </div>
                </div>
            </FormProvider>
        </div>
    );
};

export default HomePage;