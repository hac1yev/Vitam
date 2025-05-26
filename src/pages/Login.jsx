import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <main className="main h-100 w-100">
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
                            <div className="d-table-cell align-middle">

                                <div className="text-center mt-4">
                                    <h1 className="login-header">
                                        B-Flow
                                    </h1>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <div className="m-sm-4">
                                            <div className="text-center mb-3">
                                                <h2>Giriş</h2>
                                            </div>
                                            <form>
                                                <div className="mb-3">
                                                    <label>Kullanıcı Adı</label>
                                                    <input className="form-control form-control-lg" type="text" name="username" placeholder="Kullanıcı adınızı giriniz" />
                                                </div>
                                                <div className="mb-3">
                                                    <label>Şifre</label>
                                                    <input className="form-control form-control-lg" type="password" name="password" placeholder="Şifrenizi giriniz" />
                                                </div>
                                                <div className="d-flex justify-content-between mt-3">
                                                    <span className="text-small">Hesabınız yok mu? </span>
                                                    <Link to="/register">Kayıt ol</Link>
                                                </div>
                                                <div className="d-flex justify-content-center mt-3">
                                                    <button className="btn btn-primary py-2 px-3">Giriş yap</button>
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

export default Login;