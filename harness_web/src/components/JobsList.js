import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';

function JobsList({ listItems, desc, onChange }) {
  const myScrollar = {
    width: '100%',
    height: '30em',
    overflowX: 'hidden',
    overflowY: 'scroll'
  };

  return (
    <>
      <div className=" my-5">
        {listItems ?
          <div style={listItems.length <= 11 ? null : myScrollar} >
            <ListGroup>
              {listItems.map((listItem) => {
                return (<ListGroup.Item style={{textTransform: 'capitalize'}} action onClick={() => onChange(listItem)}>{listItem.title}</ListGroup.Item>);
              })}
            </ListGroup>
          </div>
          : <div className="py-3 px-3">Empty</div>}
      </div>
    </>
  )
}
export default JobsList

