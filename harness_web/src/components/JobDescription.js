import React from 'react'
import Card from 'react-bootstrap/Card'

function JobDescription({ jobItem }) {
  const myScrollar = {
    width: '100%',
    height: '10em',
    overflowX: 'hidden',
    overflowY: 'scroll'
  };

  return (
    <div>
      <div className="my-5">
        <Card style={{ width: '100%' }}>
          {jobItem ?
            <Card.Body>
              <div style={myScrollar}>
                <Card.Title>{jobItem.title}</Card.Title>
                {
                  jobItem.skill.map((eachSkill, i) => {
                    return(jobItem.length !== i+1 ? <Card.Subtitle className="mb-2 text-muted d-inline">{eachSkill.title},  </Card.Subtitle>
                      : <Card.Subtitle className="mb-2 text-muted d-inline">{eachSkill.title}</Card.Subtitle>)
                  })
                }
                <Card.Text>{jobItem.description}</Card.Text>
              </div>
            </Card.Body>
            : <div className="py-3 px-3">Job description empty.</div>}
        </Card>
      </div>
    </div>
  )
}

export default JobDescription

