import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react"
import axios from "axios";

function Skills() {

  const [skills, setSkills] = useState([])
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/topskills").then((response) => {
      setSkills(response.data);
    });
  }, []);
  return (
    <div>
      <div className="my-5">
        <Card style={{ width: '100%' }}>
          <Card.Body>
            <Card.Title>Most used skills</Card.Title>
            {skills ?
              <ul>
                {skills.map(skill => {
                  return (
                    <li><Card.Text>
                      {skill.title}: {skill.count} time
                    </Card.Text></li>
                  )
                })}
              </ul>
              : "Empty Skills"}
          </Card.Body>

        </Card>
      </div>
    </div>
  )
}

export default Skills

