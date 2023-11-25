import PropTypes from "prop-types";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { classNames } from "primereact/utils";
import { ErrorMessage } from "@hookform/error-message";

export const FormInputTextPassword = ({ placeholder, label, handleChangeText, ...props }) => {
    const [type, setType] = useState(false);
    const handleClickShowPassword = () => {
        setType(!type);
    };
    const methods = useFormContext();
    const { control, errors } = methods;

    return (
        <Controller
            name={props.name || ""}
            control={control}
            render={({ field: { onChange, value }, fieldState }) => (
                <div className={props.className}>
                    <span className="p-input-icon-left p-input-icon-right w-full">
                    <i className="pi pi-unlock" />
                        <InputText
                            onChange={(e) => {
                                onChange(e.target.value);
                                handleChangeText && handleChangeText(e.target.value);
                            }}
                            className={classNames({
                                "p-invalid": fieldState.invalid,
                            })}
                            {...props}
                            {...methods.register(props.name)}
                            placeholder={props.placeholder || "Contraseña"}
                            value={value || ""}
                            autoComplete="off"
                            maxLength={props.maxLength || ""}
                            keyfilter={props.keyfilter || ""}
                            type={type ? "text" : "password"}
                        />
                        {type ? (
                            <i
                                className="pi pi-eye cursor-pointer"
                                onClick={handleClickShowPassword}
                            />
                        ) : (
                            <i
                                className="pi pi-eye-slash cursor-pointer"
                                onClick={handleClickShowPassword}
                            />
                        )}
                    </span>
                    <ErrorMessage
                        errors={errors}
                        name={props.name}
                        render={({ message }) => (
                            <small className="p-error">{message}</small>
                        )}
                    />
                </div>
            )}
            rules={props.rules}
        />
    );
};
FormInputTextPassword.prototype = {
    name: PropTypes.string.isrequired,
    label: PropTypes.string,
    className: PropTypes.string,
};