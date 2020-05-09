import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createOrder } from "../../actions";
// import { CLEAR_SUBMIT_ERRORS } from "redux-form/lib/actionTypes";

class CreateOrder extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };
  //our job to take the onChange handler, and wire it up to input element
  // our job to take the value prop, and hook it up to input element as well

  onSubmit = (formValues) => {
    this.props.createOrder(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field
          name="ruler"
          component={this.renderInput}
          label="How many 12inch rulers do you need?"
        />
        <Field
          name="Highlighters"
          component={this.renderInput}
          label="How many Highlighters do you need?"
        />
        <Field
          name="Notebooks"
          component={this.renderInput}
          label="How many Notebooks do you need?"
        />
        <Field
          name="Pencils"
          component={this.renderInput}
          label="How many Pencils do you need?"
        />
        <Field
          name="Pens"
          component={this.renderInput}
          label="How many Pens do you need?"
        />
        <Field
          name="StaplePacks"
          component={this.renderInput}
          label="How many Staple Packs do you need?"
        />
        <Field
          name="StickyNotePacks"
          component={this.renderInput}
          label="How many Sticky Note Packs do you need?"
        />
        <button className="ui button primary"> Submit Order </button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  const isANumber = value => value && value.match(/^[0-9]+$/)

  if (!isANumber(formValues.Ruler)) {
    errors.Ruler = "You must enter numbers!";
  }
  if (!isANumber(formValues.Highlighters)) {
    errors.Highlighters = "You must enter numbers!";
  }
  if (!isANumber(formValues.Notebooks)) {
    errors.Notebooks = "You must enter numbers!";
  }
  if (!isANumber(formValues.Pencils)) {
    errors.Pencils = "You must enter numbers!";
  }
  if (!isANumber(formValues.Pens)) {
    errors.Pens = "You must enter numbers!";
  }
  if (!isANumber(formValues.StaplePacks)) {
    errors.StaplePacks = "You must enter numbers!";
  }
  if (!isANumber(formValues.StickyNotePacks)) {
    errors.StickyNotePacks = "You must enter numbers!";
  }
  return errors;
};

const formWrapped = reduxForm({
  form: "CreateOrder",
  validate: validate,
})(CreateOrder);

export default connect(null, { createOrder })(formWrapped);

//when user submits order, we will validate inputs, if they are valid we will call
// onSubmit.  Said which onSubmit call then calls our createOrder, which runs the createOrder
// action creator in the actions folder -> index.js file, which makes a request to our API server
//  to create a new order.  RESTful convention because we are making a post request to '/orders'
