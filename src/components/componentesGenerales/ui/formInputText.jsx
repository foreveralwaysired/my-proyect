import PropTypes from "prop-types";
import { Controller, useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";

export const FormInputText = ({ label, handleChangeText, ...props }) => {
    const methods = useFormContext();
    const { control, errors } = methods;

    return (
        <Controller
            name={props.name || ""}
            control={control}
            render={({ field: { onChange, value }, fieldState }) => (
                <div className={props.className}>
                    <span className="p-float-label ">
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
                            label={label}
                            value={value || ""}
                            autoComplete="off"
                            maxLength={props.maxLength || ""}
                            keyfilter={props.keyfilter || ""}
                        />
                        <label
                            htmlFor={props.label || ""}
                            className={`${props.isrequired ? "-mt-3" : "-mt-3"} `}
                            style={{ fontFamily: "inherit" }}
                        >
                            <p className="text-md">
                                {label}
                                {props.isrequired === "true" ? (
                                    <span
                                        className="text-xl"
                                        style={{ color: "red", marginLeft: "5px" }}
                                    >
                                        *
                                    </span>
                                ) : null}
                            </p>
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

FormInputText.prototype = {
    name: PropTypes.string.isrequired,
    label: PropTypes.string,
    className: PropTypes.string,
};
