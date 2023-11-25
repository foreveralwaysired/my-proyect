import { AutoComplete } from "primereact/autocomplete";
import { Controller, useFormContext } from "react-hook-form";
import PropTypes from "prop-types";
import { ErrorMessage } from "@hookform/error-message";

export const FormAutoComplete = ({
  handleChangeAutoComplete,
  itemsList,
  ...props
}) => {
  const methods = useFormContext();
  const { errors } = methods;
  return (
    <>
      <Controller
        name={props.name}
        control={methods.control}
        render={({ field: { onChange, value } }) => (
          <div>
            <span className="p-float-label ">
              <AutoComplete
                value={value || ""}
                dropdown
                onChange={(e) => {
                  onChange(e.value);
                  handleChangeAutoComplete && handleChangeAutoComplete(e.value);
                }}
                {...props}
              />
              <label
                htmlFor={props.label || ""}
                className={`${props.isrequired ? "-mt-3" : "-mt-2"} `}
                style={{ fontFamily: "inherit" }}
              >
                <p className="text-md">
                  {props.label}
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

FormAutoComplete.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  itemsList: PropTypes.array.isRequired,
  rules: PropTypes.object,
  dropdown: PropTypes.bool,
  forceSelection: PropTypes.bool,
  ariaLabel: PropTypes.string,
  placeholder: PropTypes.string,
  field: PropTypes.string,
};
