import { Link } from "react-router-dom";

const BreadcrumbNav = () => {
    return (
        <div className="header">
            <h1 className="header-title">
                Settings
            </h1>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/">Ana Sayfa</Link></li>
                    <li className="breadcrumb-item">
                        <Link to="/">Pages</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Settings</li>
                </ol>
            </nav>
        </div>
    );
};

export default BreadcrumbNav;