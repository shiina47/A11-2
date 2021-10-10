import { memo, useState } from "react";
import {
  TextField,
  Box,
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export const TextFieldMaterial = memo((props) => {
  const { materials, setMaterials } = props;
  const [addFormData, setAddFormData] = useState({
    name: "",
    amount: "",
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newMaterial = {
      name: addFormData.name,
      amount: addFormData.amount,
    };

    const newMaterials = [...materials, newMaterial];
    setMaterials(newMaterials);

    console.log(newMaterials);

    let nameForm = document.getElementById("nameField");
    nameForm.value = "";

    let materialForm = document.getElementById("materialField");
    materialForm.value = "";
  };

  return (
    <>
      <Box mt={2} display="flex" flexDirection="column">
        <h4>食材</h4>
        <Box mb={4}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <strong>材料・調味料</strong>
                  </TableCell>
                  <TableCell>
                    <strong>分量</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {materials.map((material) => (
                  <TableRow key={material.name}>
                    <TableCell>{material.name}</TableCell>
                    <TableCell>{material.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              inputProps={{
                autoComplete: "off",
              }}
              id="nameField"
              label="材料・調味料"
              placeholder="例：鶏むね肉"
              name="name"
              variant="outlined"
              onChange={handleAddFormChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              inputProps={{
                autoComplete: "off",
              }}
              id="materialField"
              label="分量"
              placeholder="例：200g"
              name="amount"
              variant="outlined"
              onChange={handleAddFormChange}
            />
          </Grid>
        </Grid>

        <Box mt={2} display="flex" justifyContent="center">
          <Button variant="contained" onClick={handleAddFormSubmit}>
            追加する
          </Button>
        </Box>
      </Box>
    </>
  );
});
