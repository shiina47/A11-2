import { memo, useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { InputField } from "../atoms/InputField";
import { AddBtn } from "../atoms/AddBtn";

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
        <Typography fontWeight="bold" variant="body1" color="text.primary">
          食材
        </Typography>
        <Box mb={2}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography
                      fontWeight="bold"
                      variant="body2"
                      color="text.primary"
                    >
                      材料・調味料
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      fontWeight="bold"
                      variant="body2"
                      color="text.primary"
                    >
                      分量
                    </Typography>
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

        <Box display="flex">
          <InputField
            type="text"
            id="nameField"
            placeholder="例：鶏むね肉"
            name="name"
            onChange={handleAddFormChange}
          />
          <InputField
            type="text"
            id="materialField"
            placeholder="例：200g"
            name="amount"
            onChange={handleAddFormChange}
          />
        </Box>

        <Box mt={2} display="flex" justifyContent="center">
          <AddBtn onClick={handleAddFormSubmit}>追加する</AddBtn>
        </Box>
      </Box>
    </>
  );
});
