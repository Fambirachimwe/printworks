import { Button, CircularProgress } from '@material-ui/core';
import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { Link } from "react-router-dom";
import { addDesignerArtwork, addPrintingFiles, addSuppliedArtwork } from "../../util/api"
import axios from 'axios';
import { url, fileTypes } from "../../util/constants";


const Modal = ({ show, setShow, id, title, type }) => {

    const [upload, setUpload] = useState(null)
    const queryClient = useQueryClient();
    const addDesignermutation = useMutation(addDesignerArtwork);
    const addPrintingFilesMutation = useMutation(addPrintingFiles);
    const addSuppliedArtworkMutation = useMutation(addSuppliedArtwork);

    const handleChange = (e) => {
        e.preventDefault();
        setUpload(e.target.files[0]);
        // console.log(e.target.files[0])
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        const formdata = new FormData();
        formdata.append("files", upload);

        axios({
            method: "post",
            url: `${url}/upload/`,
            data: formdata,
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        }).then((res) => {
            // console.log(res.data[0].url)

            const file_url  = res.data[0].url;  
            const data = {id : parseInt(id),file_url :file_url} 
            // console.log(url)

            switch (type) {
                case fileTypes.supplied:
                    // console.log(typeof(type))
                    
                    addSuppliedArtworkMutation.mutate(data, {
                        onSuccess: (data) => {
                            // console.log(data)
                            queryClient.invalidateQueries('jobsbyID');
                        }
                    });

                    break;

                case fileTypes.artwork:
                    addDesignermutation.mutate(data, {
                        onSuccess: (data) => {
                            console.log(data)
                            queryClient.invalidateQueries('jobsbyID');
                            queryClient.invalidateQueries('jobs');
                            // alert("Upload done")

                        }
                    })
                    break;

                case fileTypes.printing:
                    
                    addPrintingFilesMutation.mutate(data, {
                        onSuccess: () => {
                            queryClient.invalidateQueries('jobsbyID', id);
                            // alert("Upload done")

                        }
                    })
                    break;

                default:
                    break;
            }


        }).catch(err => console.log(err));

    }

    return (

        
        <div className={`modal fade ${show ? "show" : ""}`} id="exampleModal" tabindex="-1" role="dialog" style={{ "padding-right": "4px", "display": `${show ? 'block' : 'none'}` }}  >
            {
                // console.log(addSuppliedArtworkMutation.isLoading ),
                addSuppliedArtworkMutation.isLoading || addDesignermutation.isLoading || addPrintingFilesMutation.isLoading ? (
                    <CircularProgress color="secondary" />
                ) :
                
                (
                    <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">{title}</h4>
                        <div>
                            <Link to="#" onClick={() => setShow(!show)} className="btn" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </Link>
                        </div>
                    </div>
                    <div className="modal-body">
                        <div id="resolte-contaniner" style={{ "height": "500px" }} className="overflow-auto main_officejs_container">

                            <form >
                                <div className="form-group col-sm-12">
                                    <label for="city">Supplied Artwork</label>
                                    <input type="file" onChange={handleChange} className="form-control" id="city" placeholder="Cover Stock" />
                                </div>

                                <Button className="mr-3" type="submit" onClick={handleSubmit} variant="contained" color="primary">
                                    Save
                                </Button>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
                )
            }
            
        </div>
    )
}

export default Modal;
