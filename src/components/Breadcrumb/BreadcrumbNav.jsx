import { Link } from "react-router-dom";

const BreadcrumbNav = ({ page, order }) => {
    return (
        <div className="header">
            <h1 className="header-title">
                {page}
            </h1>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    {order.map((item,index) => (
                        <li className="breadcrumb-item" key={index}>
                            <Link to={item.url}>{item.title}</Link>
                        </li>
                    ))}
                </ol>
            </nav>
        </div>
    );
};

export default BreadcrumbNav;