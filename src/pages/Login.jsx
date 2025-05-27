import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "../api/axios";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {        
      const response = await axios.get(`/api/istifadeci/istifadeciLogin?istifadeciAdi=${data.username}&shifre=${data.password}`, {
        headers: { "Content-Type": "application/json" }
      });      

      if (response.status === 200) {
        localStorage.setItem("isLogin", true);
        const userInfo = JSON.parse(JSON.stringify(response.data));
        delete userInfo.shifre;
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        window.location.reload();
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <main className="main h-100 w-100">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
            <div className="d-table-cell align-middle">

              <div className="text-center mt-4">
                <h1 className="login-header">B-Flow</h1>
              </div>

              <div className="card">
                <div className="card-body">
                  <div className="m-sm-4">
                    <div className="text-center mb-3">
                      <h2>Giriş</h2>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="mb-3">
                        <label>Kullanıcı Adı</label>
                        <input
                          className="form-control form-control-lg"
                          type="text"
                          {...register("username", { required: "Kullanıcı adı gerekli" })}
                          placeholder="Kullanıcı adınızı giriniz"
                        />
                        {errors.username && (
                          <span className="text-danger">{errors.username.message}</span>
                        )}
                      </div>

                      <div className="mb-3">
                        <label>Şifre</label>
                        <input
                          className="form-control form-control-lg"
                          type="password"
                          {...register("password", { required: "Şifre gerekli" })}
                          placeholder="Şifrenizi giriniz"
                        />
                        {errors.password && (
                          <span className="text-danger">{errors.password.message}</span>
                        )}
                      </div>

                      <div className="d-flex justify-content-between mt-3">
                        <span className="text-small">Hesabınız yok mu? </span>
                        <Link to="/register">Kayıt ol</Link>
                      </div>

                      <div className="d-flex justify-content-center mt-3">
                        <button type="submit" className="btn btn-primary py-2 px-3">
                          Giriş yap
                        </button>
                      </div>
                    </form>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;