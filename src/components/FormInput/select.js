import { FormFeedback, FormGroup, Input, Label } from "reactstrap";
import { COLORS } from "../../styles/colors";

function Select({id, value, handleChange, handleBlur, error, touched, label, options = []}) {
  return (
    <FormGroup style={{width: "100%"}}>
      <Label
        style={{fontWeight: 600, color: COLORS.black}}
      >
        { label }
      </Label>
      <Input
        id={id}
        type="select"
        name={id}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        invalid={error && touched}
        valid={!error && touched}
      >
        <option selected disabled value="">Elige un plan</option>
        {
          options.map((option, index) => (
            <option
              value={option}
              key={index}
            >
              { option }
            </option>
          ))
        }
      </Input>
      {
        error && touched && (
          <FormFeedback>{ error }</FormFeedback>
        )
      }
    </FormGroup>
  );
}

export default Select;
