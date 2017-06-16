import React from 'react'

const AddNoteForm = (props) => {
    return (


        <div className="modal fade" id="myModalNorm" tabindex="-1" role="dialog"
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
                            Modal title
                </h4>
                    </div>


                    <div className="modal-body">

                        <form role="form">
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control"
                                    id="exampleInputEmail1" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control"
                                    id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" /> Check me out
                    </label>
                            </div>
                            <button type="submit" className="btn btn-default">Submit</button>
                        </form>


                    </div>


                    <div className="modal-footer">
                        <button type="button" className="btn btn-default"
                            data-dismiss="modal">
                            Close
                </button>
                        <button type="button" className="btn btn-primary">
                            Save changes
                </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddNoteForm;