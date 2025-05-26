import { Link, useNavigate } from "react-router-dom";
import axios from "../api/axios";
import { useForm } from "react-hook-form";

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const response = await axios.post("/api/istifadeci/istifadeceiAdd", JSON.stringify(data), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if(response.status === 200) {
        navigate('/login');
    }
  };

  return (
    <>
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
                        <h2>Yeni Hesap Aç</h2>
                      </div>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                          <label>Kullanıcı Adı</label>
                          <input
                            className="form-control form-control-lg"
                            type="text"
                            {...register("istifadeciAdi", {
                              required: "Kullanıcı adı gerekli",
                            })}
                            placeholder="Kullanıcı adınız:"
                          />
                          {errors.username && (
                            <span className="text-danger">
                              {errors.username.message}
                            </span>
                          )}
                        </div>

                        <div className="mb-3">
                          <label>Şifre</label>
                          <input
                            className="form-control form-control-lg"
                            type="password"
                            {...register("shifre", {
                              required: "Şifre gerekli",
                            })}
                            placeholder="Şifreniz:"
                          />
                          {errors.password && (
                            <span className="text-danger">
                              {errors.password.message}
                            </span>
                          )}
                        </div>

                        <div className="mb-3">
                          <label>E-Posta</label>
                          <input
                            className="form-control form-control-lg"
                            type="email"
                            {...register("email1", {
                              required: "E-posta gerekli",
                              pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "Geçerli bir e-posta girin",
                              },
                            })}
                            placeholder="E-Postanız:"
                          />
                          {errors.email && (
                            <span className="text-danger">
                              {errors.email.message}
                            </span>
                          )}
                        </div>

                        <div className="mb-3">
                          <label>E-Posta2</label>
                          <input
                            className="form-control form-control-lg"
                            type="email"
                            {...register("email2")}
                            placeholder="İkinci E-Postanız:"
                          />
                        </div>

                        <div className="mb-3">
                          <label>İsim</label>
                          <input
                            className="form-control form-control-lg"
                            type="text"
                            {...register("adi")}
                            placeholder="İsminiz:"
                          />
                        </div>

                        <div className="mb-3">
                          <label>Soyisim</label>
                          <input
                            className="form-control form-control-lg"
                            type="text"
                            {...register("soyadi")}
                            placeholder="Soyisminiz:"
                          />
                        </div>

                        <div className="mb-3">
                          <label>Telefon</label>
                          <input
                            className="form-control form-control-lg"
                            type="text"
                            {...register("telefon1")}
                            placeholder="Telefon numaranız:"
                          />
                        </div>

                        <div className="mb-3">
                          <label>Telefon2</label>
                          <input
                            className="form-control form-control-lg"
                            type="text"
                            {...register("telefon2")}
                            placeholder="Telefon numaranız:"
                          />
                        </div>

                        <div className="d-flex justify-content-between mt-3">
                          <span className="text-small">Hesabınız var mı? </span>
                          <Link to="/login">Giriş yap</Link>
                        </div>

                        <div className="text-center mt-3">
                          <button
                            type="submit"
                            className="btn btn-lg btn-primary"
                          >
                            Kayıt ol
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
    </>
  );
};

export default Register;
