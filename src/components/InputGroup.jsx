import { nanoid } from "nanoid";
import React from "react";
import style from "../styles/styles.module.css";
// import { Button } from './Button'

export class InputGroup extends React.Component {
  state = {
    inputTitle: "",
    inputText: "",
  };

  onClick = () => {
    if (!(this.state.inputText && this.state.inputTitle)) {
      alert("Both of fields must be fulfilled");
      return;
    }

    const noteObject = {
      inputTitle: this.state.inputTitle,
      inputText: this.state.inputText,
      id: nanoid(),
    };
    this.props.onChange(noteObject);
  };

  render() {
    return (
      <div className={style.inputDiv}>
        <input
          name="title"
          type="text"
          maxLength='90'
          placeholder="Add title"
          className={style.noteInput}
          onChange={(e) => {
            this.setState({ inputTitle: e.target.value });
          }}
        />
        <input
          className={style.noteInput}
          type="text"
          placeholder="add your thought"
          onChange={(e) => {
              this.setState({ inputText: e.target.value });
            }}
        />
         
        <button
          className={`${style.button} ${style.submit}`}
          onClick={this.onClick}
        >
          Add on page
        </button>
      </div>
    );
  }
}
