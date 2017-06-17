import React, { Component } from 'react'
import { findDOMNode } from 'react-dom';
import Board from '../components/Board.jsx';
import axios from 'axios';

export default class BoardPage extends Component {
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
            .catch(err => {
                //No cookie
                window.location.replace("/");
            });
    }
    save(newNote) {
        var data = JSON.stringify(newNote);

        var config = {
            headers: { 'Content-Type': 'application/json; charset=utf-8' }
        };

        axios.post(`/item`, data, config)
            .then((res) => {
                if (res.status === 200) {
                    this.add(res.data);
                }
            })
            .catch(err => {
                //No cookie
                window.location.replace("/");
            });
    }
    add(note) {
        let arr = this.state.notes;
        arr.push(note);
        this.setState({ notes: arr });
    }
    update(newNote, i) {
        var data = JSON.stringify(newNote);

        var config = {
            headers: { 'Content-Type': 'application/json; charset=utf-8' }
        };

        axios.put(`/item`, data, config)
            .then((res) => {
                if (res.status === 200) {
                    let arr = this.state.notes;
                    arr[i] = res.data;
                    this.setState({ notes: arr });
                }
            })
            .catch(err => {
                //No cookie
                window.location.replace("/");
            });
    }
    remove(i) {
        let arr = this.state.notes;
        let noteIdToDelete = arr[i].id;
        axios.delete(`/item/${noteIdToDelete}`)
            .then((res) => {
                if (res.status === 200) {
                    arr.splice(i, 1);//remove one note
                    this.setState({ notes: arr }); //update state array
                }
            })
            .catch(err => {
                //No cookie
                window.location.replace("/");
            });

    }
    render() {
        return <Board
            notes={this.state.notes}
            save={this.save}
            update={this.update}
            remove={this.remove} />
    }
}



