import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "../api/axios";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [errorMsg,setErrorMsg] = useState("");
  const { t } = useTranslation('login');

  const onSubmit = async (data) => {
    try {        
      const response = await axios.get(`/api/istifadeci/istifadeciLogin?istifadeciAdi=${data.username}&shifre=${data.password}`, {
        headers: { "Content-Type": "application/json" }
      });      

      if (response.status === 200) {
        setErrorMsg("");
        localStorage.setItem("isLogin", true);
        const userInfo = JSON.parse(JSON.stringify(response.data));
        delete userInfo.shifre;
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        window.location.reload();
      }
    } catch (error) {
      setErrorMsg(error.response.data);
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
                      <h2>{t('login_title')}</h2>
                    </div>

                    {errorMsg && (
                      <div className="error-wrapper">
                        <p className="error-text">{errorMsg}</p>
                      </div>
                    )}

                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="mb-3">
                        <label>{t("login_username_label")}</label>
                        <input
                          className="form-control form-control-lg"
                          type="text"
                          {...register("username", { required: t("login_username_error") })}
                          placeholder={t("login_username_placeholder")}
                        />
                        {errors.username && (
                          <span className="text-danger">{errors.username.message}</span>
                        )}
                      </div>

                      <div className="mb-3">
                        <label>{t("login_password_label")}</label>
                        <input
                          className="form-control form-control-lg"
                          type="password"
                          {...register("password", { required: t("login_password_error") })}
                          placeholder={t("login_password_placeholder")}
                        />
                        {errors.password && (
                          <span className="text-danger">{errors.password.message}</span>
                        )}
                      </div>

                      <div className="d-flex justify-content-between mt-3">
                        <span className="text-small">{t("login_dont_have_account")} </span>
                        <Link to="/register">{t("login_register")}</Link>
                      </div>

                      <div className="d-flex justify-content-center mt-3">
                        <button type="submit" className="btn btn-primary py-2 px-3">
                          {t('login_button')}
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