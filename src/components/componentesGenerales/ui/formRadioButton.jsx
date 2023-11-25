import { Controller, useFormContext } from "react-hook-form";
import { RadioButton } from "primereact/radiobutton";
import PropTypes from "prop-types";

export const FormRadioButton = ({
  radioOptions,
  handleChangeRadio,
  ...props
}) => {
  const methods = useFormContext();
  return (
    <>
      {radioOptions.map((radioObject) => (
        <div className="field-radiobutton" key={radioObject.key}>
          <Controller
            name={props.name}
            control={methods.control}
            render={({ field: { onChange, value } }) => (
              <>
                <RadioButton
                  checked={value === radioObject.value}
                  inputId={radioObject.key}
                  {...props}
                  value={radioObject.value || ""}
                  onChange={(e) => {
                    onChange(e.value);
                    handleChangeRadio && handleChangeRadio(e.value);
                  }}
                />
                <label htmlFor={radioObject.label || ""}>
                  {radioObject.label}
                </label>
              </>
            )}
          />
        </div>
      ))}
    </>
  );
};

FormRadioButtons.propTypes = {
  radioOptions: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
  handleChangeRadio: PropTypes.func,
};
