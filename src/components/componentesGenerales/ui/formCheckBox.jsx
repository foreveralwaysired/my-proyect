import { Checkbox } from "primereact/checkbox";
import { Controller, useFormContext } from "react-hook-form";

export const FormCheckBox = ({
  label,
  name,
  handleChangeCheckbox,
  ...props
}) => {
  const { control } = useFormContext;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <div className="field-checkbox">
          <Checkbox
            checked={value}
            value={value}
            onChange={(e) => {
              onChange(e.checked);
              handleChangeCheckbox && handleChangeCheckbox(e);
            }}
            {...props}
          />
          <label htmlFor={name}>{label}</label>
        </div>
      )}
    />
  );
};
