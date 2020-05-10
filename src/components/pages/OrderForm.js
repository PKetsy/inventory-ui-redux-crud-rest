import React from "react";
import { Field, reduxForm } from "redux-form";

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
    this.props.onSubmit(formValues);
  };
  //now a parent component is passing a callback called onSubmit which is called with whatever
  // values come out of the form.

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

const validate = (formValues) => {
  const errors = {};

  if (!Number(formValues.Ruler)) {
    errors.Ruler = "You must enter numbers!";
  }
  if (!Number(formValues.Highlighters)) {
    errors.Highlighters = "You must enter numbers!";
  }
  if (!Number(formValues.Notebooks)) {
    errors.Notebooks = "You must enter numbers!";
  }
  if (!Number(formValues.Pencils)) {
    errors.Pencils = "You must enter numbers!";
  }
  if (!Number(formValues.Pens)) {
    errors.Pens = "You must enter numbers!";
  }
  if (!Number(formValues.StaplePacks)) {
    errors.StaplePacks = "You must enter numbers!";
  }
  if (!Number(formValues.StickyNotePacks)) {
    errors.StickyNotePacks = "You must enter numbers!";
  }
  return errors;
};

export default reduxForm({
  form: "orderForm",
  validate: validate,
})(OrderForm);

//OrderForm does not need to call any action creator, but instead a parent componenet that
// calls some action creator
