import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux'
import {createPost} from '../actions'

class PostsNew extends Component {
    
    renderTitleField(field) {
        const {meta: {touched, error} } = field     //instead using field.meta.touched
        const className = `form-group ${touched && error ? 'has-danger' : ''}`
        //the above const are used to change the className of the field based on it's validation
        return ( 
            <div className={className} >    
                <div  >
                    <label><h3>Title: </h3></label>
                    <input type="text" {...field.input} name="title" className="form-control" />
                </div>              
                {touched ? <span className="text-help">{error}</span> : ""}
            </div>
        )
    }
    renderCategoryField(field) {
        const {meta: {touched, error} } = field     //instead using field.meta.touched
        const className = `form-group ${touched && error ? 'has-danger' : ''}`
        return ( 
            <div className={className} >                
                <div >
                    <label><h3>Categories:</h3></label>
                    <input type="text" {...field.input} name="categories" className="form-control" />
                </div>              
                {touched ? <span className="text-help">{error}</span> : ""}
                {/* if something, the result, else another result (comes after the :) */}
            </div>
        )
    }
    renderCommentField(field) {
        const {meta: {touched, error} } = field     //instead using field.meta.touched
        const className = `form-group ${touched && error ? 'has-danger' : ''}`
        return ( 
            <div className={className} >                
                <div >
                    <label><h3>Comments:</h3></label>
                    <input type="text" {...field.input} name="content" className="form-control" />
                </div>                
                {touched ? <span className="text-help">{error}</span> : ""}
            </div>
        )
    }

    onSubmit(values) {
        //console.log(values)
        this.props.createPost(values, () => {
            this.props.history.push('/');    //to redirect the page to '/' if success
        })
    }

    render() {
        //handling submit form
        const {handleSubmit} = this.props   //pass the properties on behalf of redux-form
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))} >     {/* proness Redux form with submit function */}
                {/* keep in mind that, .bind(this) to let this = this outside this component */}
                <h3>Create new post form</h3>
                <Field name="title" component={this.renderTitleField} /> 
                <Field name="categories" component={this.renderCategoryField} /> 
                <Field name="content" component={this.renderCommentField} />                 
                <button type="submit" name="submit" className="btn btn-primary">Submit</button>                  
                <Link to="/" className="btn btn-danger" >Cancel</Link>         

            </form>
        )
    }
}

function validate(values) { //values is suposed to be the fields
    const errors = {}
    //validate the input data from each fields, accumulate the errors if it is the case
    if (!values.title) {
        errors.title = <p className="invalidField"> Enter a title"</p>
    }
    if (!values.categories) {
        errors.categories = <p className="invalidField"> Enter a category"</p>
    }
    if (!values.comments) {
        errors.comments = <p className="invalidField"> Enter your comments"</p>
    }
    return errors
}

export default reduxForm({
    validate: validate,     //can written by just: validate,
    form: "PostsNewForm"    //can have multiple forms at a time by this json variable
    //The name of the form does not matter, can be "12343"
})(connect(null, {createPost})( PostsNew))    //grap the form to the reducer automatically