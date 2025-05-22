import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 800,
  width: "90%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AddSmetaDesign({ handleClose, open }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form className="row">
            <h3 className='mb-4'>Smeta dizayn əlavə et</h3>
            <div className="col-sm-6 d-flex flex-column gap-1 mb-3">
              <label htmlFor="olcuVahidi">Fayl linki*</label>
              <input
                type="url"
                className="form-control"
                id="fileUrl"
                //   value={"S-AZ-101438"}
                // value={productItems.title}
                // onChange={(e) => setProductItems((prev) => {
                //     return {
                //         ...prev,
                //         title: e.target.value
                //     }
                // })}
              />
            </div>
            <div className="col-sm-6 d-flex flex-column gap-1 mb-3">
              <label htmlFor="miqdar">Fayl başlığı*</label>
              <input
                type="text"
                className="form-control"
                id="fileTitle"
                //   value={"S-AZ-101438"}
                // value={productItems.title}
                // onChange={(e) => setProductItems((prev) => {
                //     return {
                //         ...prev,
                //         title: e.target.value
                //     }
                // })}
              />
            </div>
            <div className="d-flex justify-content-end gap-2 mt-2">
              <button className="btn btn-primary">Əlavə et</button>
              <button
                type="button"
                onClick={handleClose}
                className="btn btn-outline-light"
                style={{ color: "#666", border: "1px solid #666" }}
              >
                Ləğv et
              </button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
