import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useMutation} from '@apollo/client';
import { ADD_TASK } from '../Mutations/TaskMutation';
import { GET_TASKS } from '../Queries/taskQuery';

const AddTask = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('new');

    const [addTask] = useMutation(ADD_TASK, {
        variables: {title,description,status},
        update(cache, { data: { addTask } }) {
          const { tasks } = cache.readQuery({ query: GET_TASKS });
          cache.writeQuery({
                query: GET_TASKS,
                data: { tasks: [...tasks, addTask] },
            });
        },
    });

    const onSubmit = () => {
        if (title === '' || description === '' || status === '') {
          return alert('Please fill in all fields');
        }
        addTask(title, description, status);
        setTitle('');
        setDescription('');
        setStatus('new');
        setShow(false);
      };
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add Task
        </Button>
  
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Add New Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} value={description} onChange={(e)=>setDescription(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Select aria-label="Select Status" value={status} onChange={(e)=>setStatus(e.target.value)} >
                            <option>Select Status</option>
                            <option value='new'>Not Started</option>
                            <option value='progress'>In Progress</option>
                            <option value='completed'>Completed</option>
                        </Form.Select>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="success" onClick={onSubmit}>
                    Add
                </Button>
            </Modal.Footer>
        </Modal>
      </>
    );
}

export default AddTask;
  