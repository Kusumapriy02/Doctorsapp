import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Addnewdoctor({ setNewdoctor }) {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [salary, setSalary] = useState("");

    const navigate = useNavigate();

    function handleSubmit(event) {

        event.preventDefault();

        const fromdetails = {
            id: Date.now(),
            name: name,
            age: age,
            gender: gender,
            specialization: specialization,
            salary: salary
        };

        // Send new doctor to App.jsx
        setNewdoctor(fromdetails);

        // Go back to Home
        navigate("/");
    }

    return (
        <div className="addnewdoctor">

            <h1>Add New Doctor</h1>

            <form onSubmit={handleSubmit}>

                <div>

                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter Doctor Name"
                    />

                    <input
                        type="text"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        placeholder="Enter Age"
                    />

                    <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <option value="">
                            Select Gender
                        </option>

                        <option value="male">
                            Male
                        </option>

                        <option value="female">
                            Female
                        </option>
                    </select>

                    <input
                        type="text"
                        value={specialization}
                        onChange={(e) =>
                            setSpecialization(e.target.value)
                        }
                        placeholder="Enter Specialization"
                    />

                    <input
                        type="text"
                        value={salary}
                        onChange={(e) =>
                            setSalary(e.target.value)
                        }
                        placeholder="Enter Salary"
                    />

                    <button type="submit">
                        Add Doctor
                    </button>

                </div>

            </form>

        </div>
    );
}

export default Addnewdoctor;