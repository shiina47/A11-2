import { memo, useState } from "react";
import {
  TextField,
  Box,
  Typography,
  Snackbar,
  Alert,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { AddBtn } from "../atoms/AddBtn";

export const TextFieldProcess = memo((props) => {
  console.log("test");
  const { processes, setProcesses } = props;
  const [addFormDataP, setAddFormDataP] = useState({
    order: "",
    how_to: "",
  });
  const [order, setOrder] = useState(1);
  const [isAlert, setIsAlert] = useState(true);

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

    if (addFormDataP.how_to === "") {
      return setIsAlert(!isAlert);
    }

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
      <Box mt={2} display="flex" flexDirection="column">
        <Typography fontWeight="bold" variant="body1" color="text.primary">
          作り方
        </Typography>
        {(processes || []).map((process) => {
          return (
            <Box display="flex" key={process.order}>
              <Box mr={2}>
                <h4>{process.order}</h4>
              </Box>
              <p>{process.how_to}</p>
            </Box>
          );
        })}
        <Box display="flex" mt={2}>
          <Box mr={2}>
            <Typography
              fontWeight="bold"
              variant="body1"
              color="text.primary"
              alignSelf="flex-start"
            >
              {order}
            </Typography>
          </Box>

          <TextField
            id="processField"
            onChange={handleAddFormChangeP}
            name="how_to"
            multiline
            rows={1}
            variant="outlined"
            fullWidth={true}
          />
        </Box>

        <Box mt={1} display="flex" justifyContent="center">
          <AddBtn onClick={handleAddFormSubmitP}>追加する</AddBtn>
        </Box>

        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={isAlert}
          autoHideDuration={3000}
        >
          <Alert
            variant="filled"
            severity="error"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setIsAlert(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            入力してください
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
});
