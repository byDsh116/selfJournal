import React from 'react'
import styles from '../styles/styles.module.css'
// import { Button } from './Button'


export class InputGroup extends React.Component {
    state = {
        inputTitle: '',
        inputText: ''
    }

    onClick = () => {
        const noteObject = {
            inputTitle: this.state.inputTitle,
            inputText: this.state.inputText,
        }
        this.props.onChange(noteObject)
    }

    render() {
        return (
            <div>
                <input
                 name='title'
                    type="text"
                    placeholder='Add title'
                    className={styles.noteInput}
                    onChange={(e) => { this.setState({ inputTitle: e.target.value }) }} />

                <input
                    className={styles.noteInput}
                    type="text" placeholder='add your thought'
                    onChange={(e) => {
                        this.setState({ inputText: e.target.value })
                    }} />
                <button className={styles.button} onClick={this.onClick} >
                    Add on page
                </button>
                
            </div>
        )
    }
}

