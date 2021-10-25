import JobForm from "./components/JobForm";
import Skills from "./components/Skills";
import JobDescription from "./components/JobDescription";
import JobsList from "./components/JobsList";
import { useState, useEffect } from "react"
import axios from "axios";


function App() {

  const [jobListItems, setJobListItems] = useState();
  const [jobItem, setJobItem] = useState();

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/jobs").then((response) => {
      setJobListItems(response.data)
      if (response.data["jobs"].length > 0) {
        setJobItem(response.data["jobs"][0])
      }
    });
  }, []);

  function handleChange(newValue) {
    setJobItem(newValue);
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center">Harness</h1>
      <div className="row">
        <div className="col-6">
          <JobForm />
          <Skills />
        </div>
        <div className="col-6">
          <JobDescription jobItem={jobItem} />
          <JobsList listItems={jobListItems ? jobListItems.jobs : null} desc={jobItem} onChange={handleChange} />
        </div>
      </div>
    </div>
  );
}

export default App;
