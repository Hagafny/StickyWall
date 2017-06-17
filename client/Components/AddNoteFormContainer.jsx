import React, { Component } from 'react'
import AddNoteForm from './AddNoteForm.jsx';
export default class AddNoteFormContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNoteTextChange = this.handleNoteTextChange.bind(this);
    }

    handleNoteTextChange(e) {
        this.setState({ text: e.target.value });
    }
    handleSubmit(e) {
        e.preventDefault(); 
        $('#addNoteModal').modal('hide');
        $("#addNoteTextArea").val('');
        let newNote = {
            text: this.state.text,
            userId: "123"
        }
        this.props.saveNote(newNote);
    }
    render() {
        return (
            <AddNoteForm
                handleNoteTextChange={this.handleNoteTextChange}
                handleSubmit={this.handleSubmit} />)
    }
}

