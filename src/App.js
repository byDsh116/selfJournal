import "./App.css";
import style from "./styles/styles.module.css";
import React from "react";
import { InputGroup } from "./components/InputGroup";
// import { Button } from './components/Button';

class App extends React.Component {
  state = {
    notes: [],
  };
  updateParentComponentState = (value) => {
    this.setState({
      notes: [...this.state.notes, value],
    });
  };

  deletePost(id) {
    this.setState(({ notes }) => {
      const copNotes = [...notes];
      copNotes.splice(id, 1);
      return { notes: copNotes };
    });
  }

  render() {
    return (
      <div className="App">
        <InputGroup onChange={this.updateParentComponentState} />
        <div className={style.notesBox}>
          {this.state.notes.map((note, id) => {
            return (
              <div
                onClick={() => this.deletePost(id)}
                key={id}
                className={style.notes}
              >
                <strong>{note.inputTitle}</strong>
                <br />
                <hr style={{ backgroundColor: "#b7b1c9", height: "2px" }} />
                <span>{note.inputText}</span>
                <button
                  className={`${style.button} ${style.delete}`}
                  onClick={this.deletePost}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
