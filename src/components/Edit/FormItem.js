import React from "react";
import { useFormikContext } from "formik";

import { FormItem, FormItemInput, FormItemError } from "../utils/StyledItem";

const FormItemContent = ({ children, label }) => {
  const { touched, errors } = useFormikContext();
  return (
    <FormItem>
      <FormItemInput>
        <span>{label}</span>
        {children}
      </FormItemInput>
      {touched[label] && errors[label] && (
        <FormItemError>
          <span>{errors[label]}</span>
        </FormItemError>
      )}
    </FormItem>
  );
};

export default FormItemContent;
