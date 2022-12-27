import React from "react";
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import { useQuery } from '@apollo/client';
import AddTask from "../Components/AddTask";
import { GET_TASKS } from "../Queries/taskQuery";
import TaskCard from "../Components/TasksCard";

const AllTasks = () =>{
    const { loading, error, data } = useQuery(GET_TASKS);

    if (loading) return <p>Loading</p>;
    if (error) return <p>Something Went Wrong</p>;

    return(
        <Container>
            <AddTask />
            <div className="tasksContainer">
                {data.tasks.length > 0 ? (
                    <ListGroup>
                        {data.tasks.map((task)=>(
                            <ListGroup.Item key={task.id}>
                                <TaskCard task={task} />
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                ):(
                    <p>No Data</p>
                )}
            </div>
        </Container>
    )
};

export default AllTasks;