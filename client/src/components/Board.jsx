import React from 'react';
import Note from './Note.jsx';
import AddNoteFormContainer from '../containers/AddNoteForm.jsx';

const Board = (props) => {
    let notes = props.notes.map((note, i) => {
        return (
            <Note key={note.id}
                index={i}
                onChange={props.update}
                onRemove={props.remove}
                {...note}
            ></Note>
        );
    });

    return (
       <div className="board">
        {notes}
        <button className="btn btn-sm btn-success glyphicon glyphicon-plus"
            data-toggle="modal" data-target="#addNoteModal" />
        <AddNoteFormContainer saveNote={props.save} />
    </div>
    );
}

export default Board;
