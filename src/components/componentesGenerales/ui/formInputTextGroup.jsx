import PropTypes from "prop-types";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Controller } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";

export const FormInputTextGroup = ({ icon, label, handleChangeText, ...props }) => {
    const methods = useFormContext();
    const { control, errors } = methods;

    return (
        <Controller
            name={props.name || ""}
            control={control}
            render={({ field: { onChange, value }, fieldState }) => (
                <div className={props.className}>
                    <span className="p-inputgroup-addon">
                        <i className={icon}></i>
                    </span>
                    <span className="p-float-label ">
                        <InputText
                            onChange={(e) => onChange(e.target.value)}
                            className={classNames({
                                "p-invalid": fieldState.invalid,
                            })}
                            {...props}
                            {...methods.register(props.name)}
                            label={label}
                            value={value || ""}
                            autoComplete="off"
                            maxLength={props.maxLength || ''}
                            keyfilter={props.keyfilter || ''}
                        />
                        <label
                            htmlFor={props.label || ""}
                            style={{ fontFamily: "inherit" }}
                        >
                            {label}
                        </label>
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

FormInputTextGroup.prototype = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.string,
    label: PropTypes.string,
    className: PropTypes.string,
};
