import React from 'react';
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import './Form.css';

const Form = () => {
  const [value, setValue] = React.useState([20000, 47000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function valuetext(value) {
    return `£${value}`;
  }

  return (
    <div className="formContainer">
      <form className="form" noValidate autoComplete="off">
        <TextField id="standard-basic" label="Name" className="textField" />
        <TextField id="standard-basic" label="Email" className="textField" />
        <TextField id="standard-basic" label="Date of birth" className="textField" />
        <TextField id="standard-basic" label="Favourite colour" className="textField" />
        <Typography id="range-slider">
          Salary
        </Typography>
        <Slider
          value={value}
          min={10000}
          max={100000}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}
          className="salaryRange"
        />
      </form>
    </div>
  )
}

export default Form
