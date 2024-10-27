import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center m-20">
            <h2 className="text-2xl">Oops!!!</h2>
            <Link to="/">Go beck to home</Link>
        </div>
    );
};

export default ErrorPage;