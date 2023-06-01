import { useState } from "react";
import {
  Box,
  Table,
  Button,
  TableHead,
  Typography,
  TableCell,
  TableRow,
  TableBody,
} from "@mui/material";
import { PatientFormValues, Patient } from "../../types";
import AddPatientModal from "../AddPatientModal";
import HealthRatingBar from "../HealthRatingBar";
import { createPatient } from "../../services/patients";
import { useNavigate } from "react-router-dom";

interface Props {
  patients: Patient[];
  setPatients: React.Dispatch<React.SetStateAction<Patient[]>>;
}

const PatientListPage = ({ patients, setPatients }: Props) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const navigate = useNavigate();

  const openModal = (): void => setModalOpen(true);

  const closeModal = (): void => {
    setModalOpen(false);
    setError(undefined);
  };

  const submitNewPatient = async (values: PatientFormValues): Promise<void> => {
    try {
      const patient = await createPatient(values);
      setPatients((prevState) => [...prevState, patient]);
      setModalOpen(false);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
        setError(error.message);
      } else {
        console.error("Unknown error", error);
        setError("Unknown error");
      }
    }
  };

  return (
    <div className="App">
      <Box>
        <Typography align="center" variant="h6">
          Patient list
        </Typography>
      </Box>
      <Table style={{ marginBottom: "1em" }}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Occupation</TableCell>
            <TableCell>Health Rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {patients &&
            patients.map((patient: Patient) => (
              <TableRow key={patient._id}>
                <TableCell
                  onClick={() => {
                    navigate(`/${patient._id}`);
                  }}
                >
                  {patient.name}
                </TableCell>
                <TableCell>{patient.gender}</TableCell>
                <TableCell>{patient.occupation}</TableCell>
                <TableCell>
                  <HealthRatingBar showText={false} rating={1} />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <AddPatientModal
        modalOpen={modalOpen}
        onSubmit={submitNewPatient}
        error={error}
        onClose={closeModal}
      />
      <Button variant="contained" onClick={openModal}>
        Add New Patient
      </Button>
    </div>
  );
};

export default PatientListPage;
