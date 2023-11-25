import { Controller, useFormContext } from "react-hook-form";
import { InputTextarea } from "primereact/inputtextarea";
import { ErrorMessage } from "@hookform/error-message";
import PropTypes from "prop-types";
import { classNames } from "primereact/utils";

export const FormInputTextarea = ({ label, ...props }) => {
  const methods = useFormContext();
  const { control, errors } = methods;

  return (
    <>
      <Controller
        name={props.name}
        control={control}
        render={({ field, fieldState }) => (
          <div>
            <span className="p-float-label ">
              <InputTextarea
                onChange={(e) => {
                  field.onChange(e.target.value);
                }}
                {...field}
                {...props}
                {...methods.register(props.name)}
                rows={5}
                className={`w-full ${classNames({
                  "p-invalid": fieldState.invalid,
                })}`}
                autoResize
                value={field.value || ""}
              />
              <label
                htmlFor={props.label || ""}
                className={`${props.isrequired ? "-mt-3" : "-mt-2"} `}
                style={{ fontFamily: "inherit" }}
              >
                <p className="text-md">
                  {label}
                  {props.isrequired === "true" ? (
                    <span
                      className="text-xl "
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
    </>
  );
};

FormInputTextarea.prototype = {
  name: PropTypes.string,
  label: PropTypes.string,
};
