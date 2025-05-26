import { Link } from "react-router-dom";

const Register = () => {
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
                                                <h2>Yeni Hesap Aç</h2>
                                            </div>
                                            <form>
                                                <div className="mb-3">
                                                    <label>Kullanıcı Adı</label>
                                                    <input className="form-control form-control-lg" type="text" name="username" placeholder="Kullanıcı adınız:" />
                                                </div>
                                                <div className="mb-3">
                                                    <label>Şifre</label>
                                                    <input className="form-control form-control-lg" type="password" name="password" placeholder="Şifreniz:" />
                                                </div>
                                                <div className="mb-3">
                                                    <label>E-Posta</label>
                                                    <input className="form-control form-control-lg" type="email" name="email" placeholder="E-Postanız:" />
                                                </div>
                                                <div className="mb-3">
                                                    <label>E-Posta2</label>
                                                    <input className="form-control form-control-lg" type="email" name="email2" placeholder="İkinci E-Postanız:" />
                                                </div>
                                                <div className="mb-3">
                                                    <label>İsim</label>
                                                    <input className="form-control form-control-lg" type="text" name="firstname" placeholder="İsminiz:" />
                                                </div>
                                                <div className="mb-3">
                                                    <label>Soyisim</label>
                                                    <input className="form-control form-control-lg" type="text" name="surname" placeholder="Soyisminiz:" />
                                                </div>
                                                <div className="mb-3">
                                                    <label>Telefon</label>
                                                    <input className="form-control form-control-lg" type="text" name="phone" placeholder="Telefon numaranız:" />
                                                </div>
                                                <div className="d-flex justify-content-between mt-3">
                                                    <span className="text-small">Hesabınız var mı? </span>
                                                    <Link to="/login">Giriş yap</Link>
                                                </div>
                                                <div className="text-center mt-3">
                                                    <button className="btn btn-lg btn-primary">Kayıt ol</button>
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