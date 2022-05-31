import style from "../styles/styles.module.css";
import React from "react";

export class ModalWindow extends React.Component {
    state = {
        title: "",
        body: ""
    }

    render(){
        return (
            <div
            className={` ${
              style.modalActive
            }`}
            onClick={(e) =>{
              e.stopPropagation()
            }}
          >
            <div style={{ maxWidth: "inherit",    paddingTop: '20px'}}>
              <textarea
              maxlength="60"
                className={style.modalTitleDiv}
                contentEditable="true"
                defaultValue={this.props.currentNote?.inputTitle}
                onChange={(e) => {
                    e.stopPropagation()
                    console.log(e.target.value)
                  this.setState({ title: e.target.value });
                }}
              >
              </textarea>
              <hr
                style={{
                  backgroundColor: "#b7b1c9",
                  height: "2px",
                  marginTop: "17px",
                  width: "862px",
                  marginLeft: "-15px",
                }}
              />
              <textarea
              className={style.modalTextDiv}
                contentEditable="true"
                defaultValue={this.props.currentNote?.inputText}
            
                onChange={(e) => {
                    e.stopPropagation()
                    console.log(e.target.value)
                  this.setState({ body: e.target.value });
                }}
              >
              </textarea>
              <br />
  {/* ........................................................ */}
              <button
                className={`${style.button} `}
                key={this.currentNote?.id}
                onClick={(e) => {
                    e.stopPropagation()
                  this.props.editNote(this.props.currentNote?.id, this.state.body, this.state.title)
                }
                }
              >
                Save
              </button>
   {/* ....................................................... */}
              <button className={style.button} onClick={(e) => {
                  console.log(e)
                  e.stopPropagation()
                  this.props.hideModal()
                }}>
                X
              </button>
              {/* <div className={style.deleteDiv}>
                <button
                  className={style.delete}
                  onClick={() => this.props.deletePost(this.state.currentNote?.id)}
                >
                  {this.trashIcon}
                </button>
              </div> */}
            </div>
          </div>
        )
    }
}