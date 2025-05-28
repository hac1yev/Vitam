import { Link, useNavigate } from "react-router-dom";
import axios from "../api/axios";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const { t } = useTranslation("register");

  const onSubmit = async (data) => {
    const response = await axios.post("/api/istifadeci/istifadeceiAdd", JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      navigate("/login");
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
                      <h2>{t("register_title")}</h2>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="mb-3">
                        <label>{t("register_username_label")}</label>
                        <input
                          className="form-control form-control-lg"
                          type="text"
                          {...register("istifadeciAdi", {
                            required: t("register_username_required") || "Required",
                          })}
                          placeholder={t("register_username_placeholeder")}
                        />
                        {errors.istifadeciAdi && (
                          <span className="text-danger">
                            {errors.istifadeciAdi.message}
                          </span>
                        )}
                      </div>

                      <div className="mb-3">
                        <label>{t("register_password_label")}</label>
                        <input
                          className="form-control form-control-lg"
                          type="password"
                          {...register("shifre", {
                            required: t("register_password_required") || "Required",
                          })}
                          placeholder={t("register_password_placeholder")}
                        />
                        {errors.shifre && (
                          <span className="text-danger">
                            {errors.shifre.message}
                          </span>
                        )}
                      </div>

                      <div className="mb-3">
                        <label>{t("register_email_label")}</label>
                        <input
                          className="form-control form-control-lg"
                          type="email"
                          {...register("email1", {
                            required: t("register_email_required") || "Required",
                            pattern: {
                              value: /\S+@\S+\.\S+/,
                              message: t("register_email_invalid") || "Invalid email",
                            },
                          })}
                          placeholder={t("register_email_placeholder")}
                        />
                        {errors.email1 && (
                          <span className="text-danger">
                            {errors.email1.message}
                          </span>
                        )}
                      </div>

                      <div className="mb-3">
                        <label>{t("register_email2_label")}</label>
                        <input
                          className="form-control form-control-lg"
                          type="email"
                          {...register("email2")}
                          placeholder={t("register_email2_placeholder")}
                        />
                      </div>

                      <div className="mb-3">
                        <label>{t("register_firstname_label")}</label>
                        <input
                          className="form-control form-control-lg"
                          type="text"
                          {...register("adi")}
                          placeholder={t("register_firstname_placeholder")}
                        />
                      </div>

                      <div className="mb-3">
                        <label>{t("register_surname_label")}</label>
                        <input
                          className="form-control form-control-lg"
                          type="text"
                          {...register("soyadi")}
                          placeholder={t("register_surname_placeholder")}
                        />
                      </div>

                      <div className="mb-3">
                        <label>{t("register_phone_label")}</label>
                        <input
                          className="form-control form-control-lg"
                          type="text"
                          {...register("telefon1")}
                          placeholder={t("register_phone_placeholder")}
                        />
                      </div>

                      <div className="mb-3">
                        <label>{t("register_phone2_label")}</label>
                        <input
                          className="form-control form-control-lg"
                          type="text"
                          {...register("telefon2")}
                          placeholder={t("register_phone2_placeholder")}
                        />
                      </div>

                      <div className="d-flex justify-content-between mt-3">
                        <span className="text-small">{t("register_have_account")}</span>
                        <Link to="/login">{t("register_login")}</Link>
                      </div>

                      <div className="text-center mt-3">
                        <button type="submit" className="btn btn-lg btn-primary">
                          {t("register_button")}
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

export default Register;