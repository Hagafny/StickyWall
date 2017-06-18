import React from 'react';
import { getUserIdCookie } from '../modules/Auth.js';
const NoteButtons = ({ edit, remove, info, userId }) => {
    
    if (getUserIdCookie() != userId)
        return (
            <span className="buttons">
                <button onClick={info}
                    className="btn btn-info glyphicon glyphicon-info-sign" />
            </span>
        )

    return (
        <span className="buttons">
            <button onClick={info}
                className="btn btn-info glyphicon glyphicon-info-sign" />
            <button onClick={edit}
                className="btn btn-primary glyphicon glyphicon-pencil" />
            <button onClick={remove}
                className="btn btn-danger glyphicon glyphicon-trash" />
        </span>
    );
}

export default NoteButtons;
