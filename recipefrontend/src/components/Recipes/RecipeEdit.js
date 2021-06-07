import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';

const RecipeEdit = (props) => {
    const [editName, setEditName] = useState(props.recipeToUpdate.name);
    const [editTime, setEditTime] = useState(props.recipeToUpdate.time)
    const [editIngredients, setEditIngredients] = useState(props.recipeToUpdate.ingredients);
    const [editPreparation, setEditPreparation] = useState(props.recipeToUpdate.preparation);

    const recipeUpdate = (event, recipe) => {
    console.log(props.token)

        event.preventDefault();
        fetch(`http://localhost:3000/recipe/update/${props.recipeToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                name: editName, 
                ingredients: editIngredients, 
                preparation: editPreparation, 
                time: editTime
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })  .then((res) => {
            props.fetchRecipes();
            props.updateOff();
        })
    
    }

    return(
        <Modal isOpen={true}>
            <ModalHeader>Create a Recipe</ModalHeader>
            <ModalBody>
                <Form onSubmit={recipeUpdate}>
                    <FormGroup>
                        <Label htmlFor="name">Edit Name:</Label>
                        <Input name="name" value={editName} onChange={(e) => setEditName(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="time">Edit Time:</Label>
                        <Input name="time" value={editTime} onChange={(e) => setEditTime(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="ingredients">Edit Ingredients:</Label>
                        <Input name="ingredients" value={editIngredients} onChange={(e) => setEditIngredients(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="preparation">Edit Preparation:</Label>
                        <Input name="preparation" value={editPreparation} onChange={(e) => setEditPreparation(e.target.value)}/>
                    </FormGroup>
                    <Button type="submit">Update Your Recipe!</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default RecipeEdit;




{/* <FormGroup>
    <Label htmlFor="owner">Edit Owner:</Label>
    <Input name="owner" value={editOwner} onChange={(e) => setEditOwner(e.target.value)}/>
</FormGroup> */}