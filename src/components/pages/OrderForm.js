import React from "react";
import { Field, reduxForm } from "redux-form";
// reduxForm above pretty much makes sure we call some action creator, and get form data into our component.

//the following components will reuse this form: CreateOrder & EditOrder

class OrderForm extends React.Component {
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
    //meta contains the error we are looking to display
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    // this prevents the error from showing up by default
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
    this.props.onSubmit(formValues);
  };
  // OrderForm does not need to call any action creator, but instead a parent component that
  // calls some kind of action creator.

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
        //this className is what allows the actual error message to be displayed in the label
      >
        <Field
          name="Rulers"
          component={this.renderInput}
          //component is what returns the element to be shown on screen.
          label="How many 12inch rulers do you need?"
          // label: is passed into the renderInput function (line 18), because by default <Field> has no idea what to do with it
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

const validate = (formValues) => {
  const errors = {};
  const isANumber = (value) => value && value.match(/^[0-9]+$/);

  if (!isANumber(formValues.Rulers)) {
    errors.Rulers = "You must enter numbers!";
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

// When user submits order, we will validate inputs.  if they are valid we will call onSubmit.
//  Said which onSubmit call then calls our createOrder, which runs the createOrder action creator
//   which then makes a request to our API server to create a new order.
//     REST-ful conventions because we are making a post request to './orders'

export default reduxForm({
  form: "orderForm",
  validate: validate,
})(OrderForm);
