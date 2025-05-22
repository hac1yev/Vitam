import { useCallback, useState } from "react";
import BreadcrumbNav from "../Breadcrumb/BreadcrumbNav";
import Select from "react-select";
import AddSolution from "../Modals/AddSolutions";
import AddSmetaDesign from "../Modals/AddSmetaDesign";

const StaticForm = ({ setActiveStep }) => {
    const [openSolutionModal, setOpenSolutionModal] = useState(false);
    const [openSmetaDesignModal, setOpenSmetaDesignModal] = useState(false);
    const handleOpenSolutionModal = () => setOpenSolutionModal(true);
    const handleOpenSmetaDesignModal = () => setOpenSmetaDesignModal(true);

    const handleCloseSolutionModal = useCallback(() => {
        setOpenSolutionModal(false);
    }, []);

    const handleCloseSmetaDesignModal = useCallback(() => {
        setOpenSmetaDesignModal(false);
    }, []);

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <main className="content px-4">
      <BreadcrumbNav />
      <form className="row my-4">
        <div className="d-flex justify-content-end align-items-center gap-2 my-2">
          <button type="button" className="btn btn-primary py-2" onClick={handleNext}>
            Həlləri əlavə et
          </button>
          <button className="btn btn-danger py-2">Ləğv et</button>
        </div>
        <div className="col-12 col-lg-8 d-flex flex-column gap-1 mb-3">
          <label htmlFor="title">Sorğu nömrəsi*</label>
          <input
            type="text"
            className="form-control"
            id="sorguNomresi"
            readOnly
            value={"S-AZ-101438"}
            // value={productItems.title}
            // onChange={(e) => setProductItems((prev) => {
            //     return {
            //         ...prev,
            //         title: e.target.value
            //     }
            // })}
          />
        </div>
        <div className="col-12 col-lg-4 d-flex flex-column gap-1 mb-3">
          <label htmlFor="lifespan">Tarix*</label>
          <input
            type="date"
            id="lifespan"
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
        <div className="col-12 col-lg-8 d-flex flex-column gap-1 mb-3">
          <label htmlFor="type">Müştəri adı*</label>
          <Select
            options={options}
            id="type"
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
        <div className="col-12 col-lg-4 d-flex flex-column gap-1 mb-3">
          <label htmlFor="lifespan">İcra tarixi*</label>
          <input
            type="date"
            id="lifespan"
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
        <div className="col-12 col-lg-8 d-flex flex-column gap-1 mb-3">
          <label htmlFor="type">Layihə adı*</label>
          <Select
            options={options}
            id="layiheAdi"
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
        <div className="col-12 col-lg-4 d-flex flex-column gap-1 mb-3">
          <label htmlFor="lifespan">Müştəri növü*</label>
          <Select
            options={options}
            id="musteriNovu"
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
        <div className="col-12 col-lg-8 d-flex flex-column gap-1 mb-3">
          <label htmlFor="type">Layihə meneceri*</label>
          <Select
            options={options}
            id="layiheMeneceri"
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
        <div className="col-12 col-lg-4 d-flex flex-column gap-1 mb-3">
          <label htmlFor="lifespan">Əlaqəli şəxs*</label>
          <input
            type="text"
            className="form-control"
            id="elaqeliSexs"
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
        <div className="col-12 col-lg-8 d-flex flex-column gap-1 mb-3">
          <label htmlFor="email">Email*</label>
          <input
            type="email"
            id="email"
            className="form-control"
            // {...register("email", {
            //     required: 'Email is required!',
            //     pattern: {
            //         value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            //         message: "Invalid email address!",
            //     },
            // })}
            name="email"
          />
        </div>
        <div className="col-12 col-lg-4 d-flex flex-column gap-1 mb-3">
          <label htmlFor="lifespan">Telefon nömrəsi*</label>
          <input
            type="text"
            className="form-control"
            id="telNomresi"
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
        <div className="col-12 d-flex flex-column gap-1 mb-5">
          <label htmlFor="lifespan">Qeyd*</label>
          <input
            type="text"
            className="form-control"
            id="telNomresi"
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
        <div className="col-12 mb-3">
            <div className="card">
                <div className="card-body">
                    <table id="datatables-buttons" className="table table-striped" style={{ width: '100%' }}>
                        <thead>
                            <tr>
                                <th>Reviziya nömrəsi</th>
                                <th>Sorğu nömrəsi</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Tiger Nixon</td>
                                <td>System Architect</td>
                                <td>Edinburgh</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div className="col-12 mb-3">
            <div className="card">
                <div className="card-body">
                    <button type="button" className="btn btn-primary" onClick={handleOpenSolutionModal}>Ekle</button>
                    <AddSolution handleClose={handleCloseSolutionModal} open={openSolutionModal} />
                    <table id="datatables-buttons" className="table table-striped" style={{ width: '100%' }}>
                        <thead>
                            <tr>
                                <th>Həll adı</th>
                                <th>Bölgə</th>
                                <th>Ölçü vahidi</th>
                                <th>Miqdar</th>
                                <th>Çatdırılma tarixi</th>
                                <th>Qeyd</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Tiger Nixon</td>
                                <td>System Architect</td>
                                <td>Edinburgh</td>
                                <td>61</td>
                                <td>2011/04/25</td>
                                <td>$320,800</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div className="col-12 mb-3">
            <div className="card">
                <div className="card-body">
                    <button type="button" className="btn btn-primary" onClick={handleOpenSmetaDesignModal}>Ekle</button>
                    <AddSmetaDesign handleClose={handleCloseSmetaDesignModal} open={openSmetaDesignModal} />
                    <table id="datatables-buttons" className="table table-striped" style={{ width: '100%' }}>
                        <thead>
                            <tr>
                                <th>№</th>
                                <th>Fayl linki</th>
                                <th>Fayl başlığı</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Tiger Nixon</td>
                                <td>System Architect</td>
                                <td>Edinburgh</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      </form>
    </main>
  );
};

export default StaticForm;
