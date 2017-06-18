import React, { Component } from 'react'
import axios from 'axios';

export default class SingleNotePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: {
                user: {}
            }
        }
    }
    componentWillMount() {
        this.getNote(this.props.params.id);
    }

    getNote(noteId) {
        axios.get(`/item/${noteId}`)
            .then(res => {
                this.setState({ note: res.data })
            })
            .catch(err => {
                //No cookie
                window.location.replace("/");
            });
    }

    goBack() {
        window.location.replace("/")
    }
    render() {
        return (
            <div>
                <button className="btn btn-sm btn-success glyphicon glyphicon-arrow-left"
                    onClick={this.goBack} />
                <div style={{ textAlign: "center" }}>
                    Note: {this.state.note.text} <br />
                    Author: {this.state.note.user.username} <br />
                </div>

            </div>

        )
    }
}



