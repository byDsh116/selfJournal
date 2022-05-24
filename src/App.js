import "./App.css";
import style from "./styles/styles.module.css";
import React from "react";
import { InputGroup } from "./components/InputGroup";
import { ModalWindow } from "./components/ModalWindow";

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

  openPost(note) {
    this.setState({
      modalActive: true,
      currentNote: note,
    });
  }

  hideModal = () => {
    this.setState({
      modalActive: false,
    });
  };

editNote(id, body, title){
  const currentNotes = this.state.notes
  if(!currentNotes.length){
    console.log('error: state is empty')
    return
  }
  const updatedNotes = currentNotes.map((note) => {
    console.log(note)
    if(note.id === id){
      return {id: id, inputTitle: title, inputText: body}
    }
    return note
  })
  console.log(currentNotes, updatedNotes)
  this.setState({notes: updatedNotes})
}

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
  
  noteDate = (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-calendar3"
    viewBox="0 0 16 16"
    >
      <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
      <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
    </svg>
  );
  
  render() {

    return (
      <div className="App" onClick={(e) => {if ( this.state.modalActive ) {
        this.setState({modalActive: false})
      };}}>
        <InputGroup onChange={this.updateParentComponentState} />
        <ModalWindow
          isModalActive={this.state.modalActive}
          currentNote={this.state.currentNote}
          editNote={(id, title, body) => this.editNote(id, title, body)}
          hideModal={()=>{this.setState({modalActive: false})}}
          />

        <div className={style.notesBox}>
          {this.state.notes.map((note) => {
            console.log(note, this.state.notes)
            return (
              <div
                key={note.id}
                id={note.id}
                className={style.notes}
                currentNote={this.state.currentNote}
                onClick={() => {
                  this.openPost(note);
                }}
              >
                <div className={style.title}>
                  <div className={style.dateDiv}>
                    <button
                      className={`${style.dateBtn} ${style.hintBtn}`}
                      dt={date}
                    >
                      {this.noteDate}
                    </button>
                    <strong style={{ marginLeft: "30px" }}>
                      {note.inputTitle}
                    </strong>
                  </div>
                  <br />
                </div>
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
