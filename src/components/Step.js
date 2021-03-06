import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Input from './Input';
import Select from './Select';

const Step = ({ data, onChange, onStepChange, errors, stepKey, step, onPrevStep }) => {
  let output = [];
  // Loop through the types of inputs
  for (const [key, val] of Object.entries(data)) {
    if (val.type.split(':')[0] === 'input') {
      output.push(<Input
        key={key}
        placeholder={val.placeholder}
        name={key}
        value={val.value}
        onChange={(e) => onChange(stepKey, e)}
        error={errors[key]}
        type={val.type.split(':')[1]}
      />);
    } else if (val.type === 'select') {
      output.push(<Select
        key={key}
        name={key}
        value={val.value}
        onChange={(e) => onChange(stepKey, e)}
        error={errors[key]}
        choices={val.choices}
      />);
    }
  }
  // Renders the output and the "Go back" & "Next" buttons. Calls handlers.
  return (
    <Fragment>
      {output}
      {step > 1 && <button type="button" className="button is-warning mr-2" onClick={() => onPrevStep(step - 1)}>Go back</button>}
      <button type="button" className="button is-link" onClick={(e) => onStepChange(data, e)}>Next</button>
    </Fragment>
  );
}

Step.propTypes = {
  data: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onStepChange: PropTypes.func.isRequired,
  errors: PropTypes.object,
  stepKey: PropTypes.string.isRequired,
  step: PropTypes.number.isRequired,
  onPrevStep: PropTypes.func
}

export default Step;