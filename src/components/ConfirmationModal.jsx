import style from "../styles/styles.module.css";
import React from "react";

export class ConfirmationModal extends React.Component {
  render() {
    return (
      <div className={style.confirmationModal}>
        <span> Delete this post?</span>
        <div className={style.confirmationModalBtnDiv}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {" "}
            <button className={style.button} style={{ width: "50px" }}>
              Yes
            </button>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {" "}
            <button className={style.button} style={{ width: "50px" }}>
              No
            </button>
          </div>
        </div>
      </div>
    );
  }
}
