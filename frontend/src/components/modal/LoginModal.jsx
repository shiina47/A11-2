import { memo, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { LoginModalForm } from "../loginConponents/LoginModalForm";
import { PrimaryBtn } from "../atoms/PrimaryBtn";

export const LoginModal = memo(() => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <div>
        <PrimaryBtn onClick={handleOpen}>ログイン・新規登録</PrimaryBtn>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Box id="modal-modal-description" sx={{ mt: 2 }}>
              <LoginModalForm />
            </Box>
          </Box>
        </Modal>
      </div>
    </>
  );
});
