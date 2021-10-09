import { memo, useState } from "react";
import { TextField, Box, Button } from "@mui/material";

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
      {materials.map((material) => {
        return (
          <Box mt={2} display="flex" key={material.name}>
            <p>{material.name}</p>
            <p>{material.amount}</p>
          </Box>
        );
      })}
      <Box mt={2} display="flex" flexDirection="column">
        <h2>add material</h2>
        <TextField
          inputProps={{
            autoComplete: "off",
          }}
          id="nameField"
          label="name"
          name="name"
          variant="outlined"
          onChange={handleAddFormChange}
        />
        <TextField
          inputProps={{
            autoComplete: "off",
          }}
          id="materialField"
          label="amount"
          name="amount"
          variant="outlined"
          onChange={handleAddFormChange}
        />
        <Box mt={1}>
          <Button variant="contained" onClick={handleAddFormSubmit}>
            追加する
          </Button>
        </Box>
      </Box>
    </>
  );
});
