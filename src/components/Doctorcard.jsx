import { useNavigate } from "react-router-dom";

function Doctorcard({ img, name, gender, specialization }) {
    let navigate = useNavigate();

    return (
        <div className="card">
            <img src="https://up.yimg.com/ib/th/id/OIP.rPtIEHBMyTZLRIjDcFFPYgHaE8?pid=Api&rs=1&c=1&qlt=95&w=152&h=101" alt={name} />

            <h1>{name}</h1>

            <p>{gender}</p>

            <p>{specialization}</p>

            <button onClick={() => navigate("/doctor")}>
                View Details
            </button>
        </div>
    );
}

export default Doctorcard;