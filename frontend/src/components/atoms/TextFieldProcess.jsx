import { memo, useState } from "react";
import { TextField, Box, Button } from "@mui/material";

export const TextFieldProcess = memo((props) => {
  const { processes, setProcesses } = props;
  const [addFormDataP, setAddFormDataP] = useState({
    order: "",
    how_to: "",
  });
  const [order, setOrder] = useState(1);

  const handleAddFormChangeP = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormDataP };
    newFormData[fieldName] = fieldValue;

    setAddFormDataP(newFormData);
  };

  const handleAddFormSubmitP = (event) => {
    event.preventDefault();

    const newProcess = {
      order: order,
      how_to: addFormDataP.how_to,
    };

    const newProcesses = [...processes, newProcess];
    setProcesses(newProcesses);
    setOrder((pre) => pre + 1);

    let processForm = document.getElementById("processField");
    processForm.value = "";
    console.log(processes);
  };

  return (
    <Box>
      {(processes || []).map((process) => {
        return (
          <Box mt={2} display="flex" key={process.order}>
            <p>{process.order}</p>
            <p>{process.how_to}</p>
          </Box>
        );
      })}
      <Box mt={2} display="flex" flexDirection="column">
        <h2>add Process</h2>
        <TextField
          id="processField"
          onChange={handleAddFormChangeP}
          name="how_to"
          multiline
          rows={2}
          label="process"
          variant="outlined"
        />

        <Box mt={1}>
          <Button variant="contained" onClick={handleAddFormSubmitP}>
            追加する
          </Button>
        </Box>
      </Box>
    </Box>
  );
});
