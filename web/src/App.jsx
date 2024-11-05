import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
    const [person, setPerson] = useState("");
    const [courseNumber, setCourseNumber] = useState("");

    const courses = [
        "Programowanie w C#",
        "Angular dla początkujących",
        "Kurs Django",
    ];

    return (
        <div className="App">
            <h2>Liczba kursów: {courses.length}</h2>
            <ol>
                {courses.map((course, i) => (
                    <li key={i}>{course}</li>
                ))}
            </ol>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    console.log(person);
                    console.log(
                        courses[courseNumber - 1] ?? "Nieprawidłowy numer kursu"
                    );
                }}
            >
                <div className="form-group">
                    <label htmlFor="person">Imię i nazwisko:</label>
                    <input
                        type="text"
                        name="person"
                        id="person"
                        className="form-control"
                        value={person}
                        onChange={(e) => setPerson(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="courseNumber">Numer kursu:</label>
                    <input
                        type="number"
                        name="courseNumber"
                        id="courseNumber"
                        className="form-control"
                        value={courseNumber}
                        onChange={(e) => setCourseNumber(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Zapisz do kursu
                </button>
            </form>
        </div>
    );
}

export default App;
