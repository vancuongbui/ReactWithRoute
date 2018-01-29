import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { Field, reduxForm } from 'redux-form';
class PostsNew extends Component {
    renderField(field) {
        return ( 
            <div className="form-group" >
                <div  >
                    <label>Title:</label>
                    <input type="text" {...field.input} name="title" className="form-control" />
                </div>
                <div >
                    <label>Categories:</label>
                    <input type="text" {...field.input} name="categories" className="form-control" />
                </div>
                <div >
                    <label>Comments:</label>
                    <input type="text" {...field.input} name="comments" className="form-control" />
                </div>
                <div>
                    <button className="btn btn-primary" type="submit" >Save</button>
                    
                </div>
                {field.meta.error}
            </div>
        )
    }

    render() {
        return (
            <form>
                <h3>Create new post form</h3>
                <Field name="title" component={(props) =>{
                    return (
                        <div  >
                            <label>Title:</label>
                            <input type="text" {...props} name="title" className="form-control" />
                        </div>
                    )
                }} /> 
                <Field name="title" component={(props) =>{
                    return (
                        <div  >
                            <label>Title:</label>
                            <input type="text" {...props} name="title" className="form-control" />
                        </div>
                    )
                }} /> 
                <Field name="categories" component={(props) =>{
                    return (
                        <div  >
                            <label>Categories:</label>
                            <input type="text" {...props} name="categories" className="form-control" />
                        </div>
                    )
                }} /> 
                <Field name="comments" component={(props) =>{
                    return (
                        <div  >
                            <label>Comments:</label>
                            <input type="text" {...props} name="comment" className="form-control" />
                        </div>
                    )
                }} /> 
                <Field name="submit" component={(props) =>{
                    return (
                        <div  >
                            <button type="submit" {...props} name="title" className="btn btn-primary">Submit</button>
                        </div>
                    )
                }} /> 
                                      

            </form>
        )
    }
}

function validate(values) { //values is suposed to be the fields
    const errors = {}
    //validate the input data from each fields, accumulate the errors if it is the case
    if (!values.title) {
        errors.title = "Enter a title"
    }
    if (!values.categories) {
        errors.categories = "Enter the categories"
    }
    if (!values.comments) {
        errors.comments = "Enter your comments"
    }
    return errors
}

export default reduxForm({
    validate: validate,     //can written by just: validate,
    form: "PostsNewForm"    //can have multiple forms at a time by this json variable
    //The name of the form does not matter, can be "12343"
})(PostsNew)    //grap the form to the reducer automatically