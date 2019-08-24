import React, { Component, Fragment } from "react";


const Input = (props) => <input {...props} />;

class SearchForm extends Component {
  state = {};

  render() {
    const {
      input,
      id,
      type,
      placeholder,
      disabled,
      className,
      maxLength,
      onKeyUp,
      onChange,
      label,
      isLoading,
      defaultValue,
      ...extraProps
    } = this.props;

    return (
      <Fragment>
        <div>
          <Input
            {...input}
            id={id}
            type={type || "text"}
            placeholder={placeholder}
            disabled={disabled}
            className={className}
            maxLength={maxLength}
            onKeyUp={onKeyUp}
            defaultValue={defaultValue}
            {...extraProps}
          />
        </div>
      </Fragment>
    );
  }
}

export default SearchForm;
