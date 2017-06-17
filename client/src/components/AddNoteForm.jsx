import React from 'react'

const AddNoteForm = (props) => {
    return (
        <div className="modal fade" id="addNoteModal" tabIndex="-1" role="dialog"
            aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">

                    <div className="modal-header">
                        <button type="button" className="close"
                            data-dismiss="modal">
                            <span aria-hidden="true">&times;</span>
                            <span className="sr-only">Close</span>
                        </button>
                        <h4 className="modal-title" id="myModalLabel">
                            Add Note
                </h4>
                    </div>
                    <form role="form" onSubmit={props.handleSubmit}>
                        <div className="modal-body">

                            <textarea  id="addNoteTextArea" rows="4" className="form-control"
                             placeholder="Add Note" onChange={props.handleNoteTextChange} />


                        </div>

                        <div className="modal-footer">
                            <input type="submit" value="Save" className="btn btn-primary" />

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddNoteForm;