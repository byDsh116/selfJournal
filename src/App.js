import "./App.css";
import style from "./styles/styles.module.css";
import React from "react";
import { InputGroup } from "./components/InputGroup";

const current = new Date();
const date = `${current.getDate()}/${
  current.getMonth() + 1
}/${current.getFullYear()}`;

class App extends React.Component {
  state = {
    notes: [],
    modalActive: false,
    currentNote: null,
  };

  updateParentComponentState = (value) => {
    this.setState({
      notes: [...this.state.notes, value],
    });
    console.log(this.state.notes);
  };

  deletePost(id) {
    const arr = this.state.notes;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id === id) {
        arr.splice(i, 1);
      }
    }
    this.setState({
      notes: arr,
    });
  }
  // editPost(id){
  //   this.notes.id == id
  // }

  // openPost(id){
  //   className=opened

  // }

  trashIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-trash"
      viewBox="0 0 16 16"
    >
      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
      <path
        fill-rule="evenodd"
        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
      />
    </svg>
  );

  editBtn = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-pencil-square"
      viewBox="0 0 16 16"
    >
      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
      <path
        fill-rule="evenodd"
        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
      />
    </svg>
  );

  render() {
    return (
      <div className="App">
        <InputGroup onChange={this.updateParentComponentState} />

        <div className={style.notesBox}>
          {this.state.notes.map((note, id) => {
            return (
              <div key={note.id} className={style.notes}>
                <div className={style.editDiv}>
                  <button className={style.editBtn}>{this.editBtn}</button>
                  <strong style={{ marginLeft: "30px" }}>
                    <div style={{ marginBottom: "5px" }}>
                      <span> {date} </span>
                    </div>
                    {note.inputTitle}
                  </strong>
                </div>
                <br />
                <hr style={{ backgroundColor: "#b7b1c9", height: "2px" }} />
                <span>{note.inputText}</span>
                <div className={style.deleteDiv}>
                  <button
                    className={style.delete}
                    onClick={() => this.deletePost(note.id)}
                  >
                    {this.trashIcon}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
