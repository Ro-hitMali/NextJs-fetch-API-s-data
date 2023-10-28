"use client";
import { useState, useEffect } from "react";
import "./styles.css";

const NameForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [nationality, setNationality] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (!name) {
        setAge("");
        setNationality("");
        setGender("");
        return;
      }
      try {
        const agifyResponse = await fetch(
          `https://api.agify.io/?name=${name}`,
        ).then((response) => response.json());
        const nationalizeResponse = await fetch(
          `https://api.nationalize.io/?name=${name}`,
        ).then((response) => response.json());
        const genderizeResponse = await fetch(
          `https://api.genderize.io/?name=${name}`,
        ).then((response) => response.json());

        setAge(agifyResponse.age);
        setNationality(nationalizeResponse.country[0]?.country_id);
        setGender(genderizeResponse.gender);
      } catch (error) {
        console.error("API request failed", error);
      }
    };

    fetchData();
  }, [name]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="name-form-container">
      <h2>Find Information by Name</h2>
      <form>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter a name"
          />
        </label>
      </form>
      <div className="info-container">
        <p>
          <strong>Age:</strong> {age}
        </p>
        <p>
          <strong>Nationality:</strong> {nationality}
        </p>
        <p>
          <strong>Gender:</strong> {gender}
        </p>
      </div>
    </div>
  );
};

export default NameForm;
