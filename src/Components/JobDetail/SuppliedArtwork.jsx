import React from 'react'

// files url http://localhost:1337${data.files[0].url}

const SuppliedArtwork = ({files}) => (
    <Link to="#" onClick={() => window.open(`http://localhost:1337${data.files[0].url}`, "_blank")}>
        <div data-load-file="file" data-load-target="#resolte-contaniner" data-target="#exampleModal" data-title="Supplied Artworks" style={{ "cursor": "pointer" }} className="p-2 text-center border rounded">
            <div>
                <img src="../assets/images/layouts/mydrive/folder-1.png" className="img-fluid mb-1" alt="image1" />
            </div>
            <p className="mb-0"></p>
        </div>
    </Link>
);


export default SuppliedArtwork;
