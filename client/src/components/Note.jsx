import React, { Component } from 'react'
import { findDOMNode } from 'react-dom';
import NoteButtons from './NoteButtons.jsx';
import { browserHistory } from 'react-router';

export default class Note extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editing: false
        };

        this.randomBetween = this.randomBetween.bind(this);
        this.info = this.info.bind(this);
        this.edit = this.edit.bind(this);
        this.save = this.save.bind(this);
        this.remove = this.remove.bind(this);
        this.renderDisplay = this.renderDisplay.bind(this);
        this.renderForm = this.renderForm.bind(this);

    }
    // static contextTypes = {
    //     router: React.PropTypes.object.isRequired
    // }
    componentWillMount() {
        this.style = {
            right: this.randomBetween(0, window.innerWidth - 150) + 'px',
            top: this.randomBetween(0, window.innerHeight - 150) + 'px',
            transform: 'rotate(' + this.randomBetween(-15, 15) + 'deg)'
        };
    }
    componentDidMount() {
        $(findDOMNode(this)).draggable();
    }

    randomBetween(min, max) {
        return (min + Math.ceil(Math.random() * max)); // rundom number
    }

    info() {
        browserHistory.push(`/note/${this.props.id}`);
    }
    edit() {
        this.setState({ editing: true });
    }
    save() {
        let newText = findDOMNode(this.refs.newText).value;
        let newNote = {
            id: this.props.id,
            userId: this.props.user.id,
            text: newText
        }
        this.props.onChange(newNote, this.props.index);
        this.setState({ editing: false });
    }
    remove() {
        this.props.onRemove(this.props.index);
    }

    renderDisplay() {
        return (
            <div className="note" style={this.style}>
                <p>{this.props.text}</p>
                <span className="author"> ~ {this.props.user.username}</span>

                <NoteButtons
                    info={this.info}
                    edit={this.edit}
                    remove={this.remove}
                    userId={this.props.user.id}
                />

            </div>
        );
    }

    renderForm() {
        return (
            <div className="note" style={this.style}>
                <textarea ref="newText" defaultValue={this.props.text}
                    className="form-control"></textarea>
                <button onClick={this.save}
                    className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk" />
            </div>
        )
    }

    render() {
        if (this.state.editing) {
            return this.renderForm();
        } else {
            return this.renderDisplay();
        }
    }
}

