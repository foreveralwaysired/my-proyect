// import { useFormContext } from "react-hook-form";
// import { Button } from "primereact/button";

import { Button } from "primereact/button";
import { useFormContext } from "react-hook-form";
import PropTypes from "prop-types";

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
