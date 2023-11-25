import { useFormContext } from "react-hook-form";
import PropTypes from "prop-types";
import { Button } from "primereact/button";

export const FormButton = ({ style, label, ...props }) => {
    const methods = useFormContext();
    return (
        <Button
            {...methods.register(props.name)}
            label={label}
            style={{ style }}
            id={props.name || ""}
            {...props}
        />
    );
};

FormButton.prototype = {
    label: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
};
