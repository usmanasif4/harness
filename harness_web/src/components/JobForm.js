import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from 'uuid';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";



function JobForm() {
  const [skill, setSkill] = useState([
    { id: uuidv4(), title: '' }
  ]);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const mainData = {
      title: data.title,
      description: data.description,
      skill: skill
    }
    axios.post("http://127.0.0.1:8000/api/create-job", mainData)
      .then((response) => {
        window.location.reload();
      });

  };
  const handleAddFields = () => {
    setSkill([...skill, { id: uuidv4(), title: '' }])
  }
  const handleChangeInput = (id, event) => {
    const newInputFields = skill.map(i => {
      if (id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    });
    setSkill(newInputFields);
  }
  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="Title">
          <Form.Label>Title</Form.Label>
          <Form.Control name='title' {...register("title", { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i })} placeholder="Title" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control name='description' {...register("description")} placeholder="Description" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Skill">
          <Form.Label>Skill</Form.Label>
          {skill.map(skill => (
            <Form.Control key={skill.id} name="title" placeholder="skill" onChange={event => handleChangeInput(skill.id, event)} />
          ))}
        </Form.Group>

        <IconButton className="" onClick={handleAddFields}>
          <AddIcon />
        </IconButton>
        <Button type="submit">Save</Button>
      </Form>
    </div>
  );
}
export default JobForm
