import React, { useEffect, useState } from "react";
import Doctorcard from "./Doctorcard";
import axios from "axios";

function Home({ newdoctor }) {

    const [doctors, setDoctors] = useState([]);
    const [search, setSearch] = useState("");
    const [specialization, setSpecialization] = useState("");

    async function getapidata() {

        try {

            const response = await axios.get(
                "https://doctorapibackend.onrender.com/doctors"
            );

            console.log("API Response:", response);
            console.log("Doctors Data:", response.data);

            setDoctors(response.data);

        } catch (error) {

            console.log("API Error:", error);

        }
    }

    useEffect(() => {
        getapidata();
    }, []);

    useEffect(() => {

        if (newdoctor) {

            setDoctors((prev) => [
                ...prev,
                newdoctor
            ]);

        }

    }, [newdoctor]);

    const filtereddoctors = doctors.filter((doctor) => {

        return (
            doctor.name
                .toLowerCase()
                .includes(search.toLowerCase())
            &&
            (
                specialization === "" ||
                doctor.specialization === specialization
            )
        );

    });

    return (
        <div>

            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search Doctor"
            />

            <select
                value={specialization}
                onChange={(e) =>
                    setSpecialization(e.target.value)
                }
            >
                <option value="">
                    All Specializations
                </option>

                <option value="Bones">
                    Bones
                </option>

                <option value="Muscles">
                    Muscles
                </option>

                <option value="Heart">
                    Heart
                </option>
            </select>

            {doctors.length > 0 ? (

                <div className="doctorcontainer">

                    {filtereddoctors.map((doctor) => (

                        <Doctorcard
                            key={doctor.id}
                            img={doctor.imglink}
                            name={doctor.name}
                            specialization={doctor.specialization}
                            gender={doctor.gender}
                        />

                    ))}

                </div>

            ) : (

                <h1>Loading...</h1>

            )}

        </div>
    );
}

export default Home;