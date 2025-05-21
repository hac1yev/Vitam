import BreadcrumbNav from "../Breadcrumb/BreadcrumbNav";
import Select from "react-select";

const AddSolutionForm = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <main className="content px-4">
        <BreadcrumbNav />
        <form className="row my-4">
          <div className="d-flex justify-content-end align-items-center gap-2 my-2">
            <button className="btn btn-primary py-2">Həlləri əlavə et</button>
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
          <div className="col-12 d-flex flex-column gap-1 mb-3">
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
          
        </form>
    </main>
  );
};

export default AddSolutionForm;
