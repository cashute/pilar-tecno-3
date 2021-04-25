import React from 'react'
import { Form, Button, ListGroup } from "react-bootstrap";

export class ToDoList extends React.Component{
    constructor() {
        super();
        this.state = {
            todoList: []
        }
    }

    addToDo = (event)=> {
        event.preventDefault();
        const data = event.target,
        newTodo = {
            nombrePuesto: data.nombrePuesto.value,
            empresa: data.empresa.value,
            ciudad: data.ciudad.value,
            pais: data.pais.value
        }
        this.state.todoList.push(newTodo);
        this.setState({
            todoList: this.state.todoList
        })
    }

    deleteTodo = (event)=> {
        this.state.todoList.splice(event.target.value, 1)
        this.setState({
            todoList: this.state.todoList
        })
    }  

    render() {
        return(
            <>
            <Form onSubmit={this.addToDo}>
                <Form.Group controlId="formBasicNombrePuesto">
                    <Form.Label>Nombre del puesto:</Form.Label>
                    <Form.Control required type="text" placeholder="Ingrese nombre de puesto" name="nombrePuesto"/>
                </Form.Group>
                <Form.Group controlId="formBasicEmpresa">
                    <Form.Label>Empresa:</Form.Label>
                    <Form.Control required type="text" placeholder="Ingrese nombre de empresa" name="empresa"/>
                </Form.Group>
                <Form.Group controlId="formBasicCiudad">
                    <Form.Label>Ciudad:</Form.Label>
                    <Form.Control required type="text" placeholder="Ingrese ciudad" name="ciudad"/>
                </Form.Group>
                <Form.Group controlId="formBasicPais">
                    <Form.Label>Pais:</Form.Label>
                    <Form.Control required type="text" placeholder="Ingrese pais" name="pais"/>
                </Form.Group>
                <Button type="submit" className="btn btn-success">
                    Agregar
                </Button>
            </Form>

            <ListGroup>
                {
                    this.state.todoList.map((task, index)=> {
                        return(
                            <ListGroup.Item key={index} variant="info">
                                 {task.nombrePuesto} {task.empresa} {task.ciudad} {task.pais} 
                                 <Button type="button" variant="danger" onClick={this.deleteTodo} value={index}>
                                     -
                                 </Button>
                            </ListGroup.Item>
                        )
                    })
                }
            </ListGroup>
            </>
        )
    }
}