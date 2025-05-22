import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Select from "react-select";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 800,
  width: '90%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AddSolution({ handleClose, open }) {
     const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form className='row'>
            <div className="col-sm-6 d-flex flex-column gap-1 mb-3">
                <label htmlFor="hell">Həll*</label>
                <Select
                    options={options}
                    id="hell"
                    className="basic-multi-select"
                    classNamePrefix="select"
                    placeholder="Select type:"
                    // value={
                    //   selectData.types?.find(
                    //     (opt) => opt.value === productItems.type
                    //   ) || null
                    // }
                    // onChange={(selectedOption) => {
                    //   if (selectedOption) {
                    //     setProductItems((prev) => {
                    //       return {
                    //         ...prev,
                    //         type: selectedOption.value,
                    //       };
                    //     });
                    //   }
                    // }}
                />
            </div>
            <div className="col-sm-6 d-flex flex-column gap-1 mb-3">
                <label htmlFor="olcuVahidi">Ölçü vahidi*</label>
                <input
                    type="text"
                    className="form-control"
                    id="olcuVahidi"
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
                <label htmlFor="bolge">Bölgə*</label>
                <Select
                    options={options}
                    id="bolge"
                    className="basic-multi-select"
                    classNamePrefix="select"
                    placeholder="Select type:"
                    // value={
                    //   selectData.types?.find(
                    //     (opt) => opt.value === productItems.type
                    //   ) || null
                    // }
                    // onChange={(selectedOption) => {
                    //   if (selectedOption) {
                    //     setProductItems((prev) => {
                    //       return {
                    //         ...prev,
                    //         type: selectedOption.value,
                    //       };
                    //     });
                    //   }
                    // }}
                />
            </div>
             <div className="col-sm-6 d-flex flex-column gap-1 mb-3">
                <label htmlFor="miqdar">Miqdar*</label>
                <input
                    type="number"
                    className="form-control"
                    id="miqdar"
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
                <label htmlFor="deadline">Çatdırılma tarixi*</label>
                <input
                    type="date"
                    id="deadline"
                    className="form-control"
                    // value={productItems.life}
                    // onChange={(e) => setProductItems((prev) => {
                    //     return {
                    //         ...prev,
                    //         life: e.target.value
                    //     }
                    // })}
                />
            </div>
            <div className="col-sm-6 d-flex flex-column gap-1 mb-3">
                <label htmlFor="miqdar">Qeyd*</label>
                <input
                    type="text"
                    className="form-control"
                    id="qeyd"
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
            <div className='d-flex justify-content-end gap-2'>
                <button className='btn btn-primary'>Əlavə et</button>
                <button type='button' onClick={handleClose} className='btn btn-outline-light' style={{ color: '#666', border: '1px solid #666' }}>Ləğv et</button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}