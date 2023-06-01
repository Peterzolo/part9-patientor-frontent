import { useState, SyntheticEvent } from "react";
import {
  TextField,
  InputLabel,
  MenuItem,
  Select,
  Grid,
  Button,
  SelectChangeEvent,
} from "@mui/material";
import { PatientFormValues, Gender } from "../../types";

interface Props {
  onCancel: () => void;
  onSubmit: (values: PatientFormValues) => void;
}

const AddPatientForm = ({ onCancel, onSubmit }: Props) => {
  const [values, setValues] = useState<PatientFormValues>({
    name: "",
    occupation: "",
    ssn: "",
    dateOfBirth: "",
    gender: Gender.Other,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleGenderChange = (event: SelectChangeEvent<string>): void => {
    const value = event.target.value as Gender;
    setValues((prevState) => ({
      ...prevState,
      gender: value,
    }));
  };

  const handleSubmit = (event: SyntheticEvent): void => {
    event.preventDefault();
    onSubmit(values);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          fullWidth
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        <TextField
          label="Social security number"
          fullWidth
          name="ssn"
          value={values.ssn}
          onChange={handleChange}
        />
        <TextField
          label="Date of birth"
          placeholder="YYYY-MM-DD"
          fullWidth
          name="dateOfBirth"
          value={values.dateOfBirth}
          onChange={handleChange}
        />
        <TextField
          label="Occupation"
          fullWidth
          name="occupation"
          value={values.occupation}
          onChange={handleChange}
        />

        <InputLabel style={{ marginTop: 20 }}>Gender</InputLabel>
        <Select
          label="Gender"
          fullWidth
          name="gender"
          value={values.gender}
          onChange={handleGenderChange}
        >
          {Object.values(Gender).map((gender) => (
            <MenuItem key={gender} value={gender}>
              {gender}
            </MenuItem>
          ))}
        </Select>

        <Grid>
          <Grid item>
            <Button
              color="secondary"
              variant="contained"
              style={{ float: "left" }}
              type="button"
              onClick={onCancel}
            >
              Cancel
            </Button>
          </Grid>
          <Grid item>
            <Button
              style={{
                float: "right",
              }}
              type="submit"
              variant="contained"
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddPatientForm;
