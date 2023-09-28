import { FormFeedback, Input, InputGroup, InputGroupText } from "reactstrap";

function FormInput({ 
  Icon,
  id,
  disabled,
  type,
  placeholder,
  value,
  handleChange,
  handleBlur,
  error,
  touched }) {
  return (
    <InputGroup>
      <InputGroupText>
        <Icon />
      </InputGroupText>
      <Input
        id={id}
        name={id}
        disabled={disabled}
        type={type || "text"}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        invalid={!!error && !!touched}
        valid={!error && touched}
      />
      {
        error && touched && (
          <FormFeedback tooltip>
            { error }
          </FormFeedback>
        )
      }
    </InputGroup>
  );
}

export default FormInput;
