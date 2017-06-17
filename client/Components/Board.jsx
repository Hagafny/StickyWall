import React, { Component } from 'react'
import { findDOMNode } from 'react-dom';
import Note from './Note.jsx';
import AddNoteFormContainer from './AddNoteFormContainer.jsx';
import axios from 'axios';

export default class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: []
        };

        this.getNotes = this.getNotes.bind(this);
        this.save = this.save.bind(this);
        this.add = this.add.bind(this);
        this.update = this.update.bind(this);
        this.remove = this.remove.bind(this);
        this.noteMapper = this.noteMapper.bind(this);
    }
    componentWillMount() {
        this.getNotes();
    }

    getNotes() {
        axios.get(`/items`)
            .then(notes => {
                notes.data.forEach(note => {
                    this.add(note);
                })
            })
    }
    save(newNote) {
        var data = JSON.stringify(newNote);

        var config = {
            headers: { 'Content-Type': 'application/json; charset=utf-8' }
        };

        axios.post(`/item`, data, config).then((res) => {
            if (res.status === 200) {
                this.add(res.data);
            }
            else
                alert('Something went wrong');
        });
    }
    add(note) {
        console.log(note);
        let arr = this.state.notes;
        arr.push(note);
        this.setState({ notes: arr });
    }
    update(newNote, i) {
        var data = JSON.stringify(newNote);

        var config = {
            headers: { 'Content-Type': 'application/json; charset=utf-8' }
        };

        axios.put(`/item`, data, config).then((res) => {
            if (res.status === 200) {
                let arr = this.state.notes;
                arr[i] = newNote;
                this.setState({ notes: arr });
            }
            else
                alert('Something went wrong');
        });
    }
    remove(i) {
        let arr = this.state.notes;
        let noteIdToDelete = arr[i].id;
        axios.delete(`/item/${noteIdToDelete}`).then((res) => {
            if (res.status === 200) {
                arr.splice(i, 1);//remove one note
                this.setState({ notes: arr }); //update state array
            }
            else
                alert('Something went wrong');
        });
    }

    noteMapper(note, i) {
        return (
            <Note key={note.id}
                index={i}
                onChange={this.update}
                onRemove={this.remove}
                {...note}
            ></Note>
        );
    }
    render() {
        return (<div className="board">
            {this.state.notes.map(this.noteMapper)}
            <button className="btn btn-sm btn-success glyphicon glyphicon-plus"
                data-toggle="modal" data-target="#addNoteModal" />
            <AddNoteFormContainer saveNote={this.save} />


        </div>
        );
    }
}



