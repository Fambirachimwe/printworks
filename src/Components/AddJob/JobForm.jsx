import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
// import axios from "axios";
import { addJob } from '../../util/api';





const JobForm = ({ data }) => {


    const [customer, setCustomer] = useState("");
    const [description, setDescription] = useState("");
    const [size, setSize] = useState("");
    const [stock, setStock]= useState("");
    const [coverStock, setCoverStock] = useState("");
    const [textStock, setTextStock] = useState("");
    const [quantity, setQuantity] = useState("");
    const [supplied, setSupplied] = useState(null)
    // event.target.files[0]


    
    const mutation = useMutation(addJob);
    const queryClient = useQueryClient();
    const formData = new FormData(); // for the image



    const handleChange = (e) => {

        const field = e.target.name || "";
        

        switch (field) {
            case "customer":
                setCustomer(e.target.value);
                console.log(e.target.value)
                break

            case "description":
                setDescription(e.target.value)
                break

            case "size":
                setSize(e.target.value)
                break
            
            case "stock":
                setStock(e.target.value)
                break

            case "cover_stock":
                setCoverStock(e.target.value)
                break

            case "text_stock":
                setTextStock(e.target.value)
                break

            case "quantity":
                setQuantity(e.target.value)
                break

            case "supplied":
                setQuantity(e.target.files[0])
                formData.append(
                    "supplied",
                    supplied,
                    supplied.name
                );
                break
    

            default:
                break;
        }

        
    }

    const handleSubmit =  (e) => {
        e.preventDefault();
        const data = {customer: customer, description: description,size: size, stock: stock, coverStock: coverStock, textStock: textStock, quantity: quantity , supplied: formData };
        
        // console.log(data)
        mutation.mutate({...data}, {
            onSuccess: () => {
                queryClient.invalidateQueries('jobs')
                
            }
        })
      

        // addJob(customer, description, size, stock,size, coverStock, textStock, quantity)
    }

    return (
        <>
        { mutation.isLoading ? ("Adding Job") : (
            <> 
                {mutation.isError ? ((`Error occured... ${mutation.error.message} `)): null}
                {mutation.isSuccess ? ("New Job Created") : null}
            </>
        )}


        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="form-group col-sm-12">
                    <label>Customer</label>
                    <select className="form-control" value={customer}  name="customer" onChange={handleChange} id="selectcountry">
                        {/* loop through the list of customers */}
                        <option>Select Customer</option>
                        {
                            data ? data.map(cst => (
                                <option key={cst.id} value={cst.id}>{cst.customer}</option>
                            )) : ""
                        }
                    </select>
                </div>


                <div className="form-group col-sm-12">
                    <label for="mobno">Description</label>
                    <textarea type="text" name="description" value={description} onChange={handleChange} className="form-control" id="mobno" placeholder="Job Description.." />
                </div>

                <div className="form-group col-md-6">
                    <label for="email">Quantity</label>
                    <input type="text" name='quantity' value={quantity} onChange={handleChange} className="form-control" id="quantity" placeholder="Quantity" />
                </div>
                <div className="form-group col-md-6">
                    <label for="pno">Size</label>
                    <input type="text" name="size" value={size} onChange={handleChange} className="form-control" id="pno" placeholder="Size" />
                </div>
                <div className="form-group col-sm-12">
                    <label for="city">Stock</label>
                    <input type="text" name="stock" value={stock} onChange={handleChange} className="form-control" id="city" placeholder="Stock" />
                </div>

                <div className="form-group col-md-6">
                    <label for="city">Text Stock</label>
                    <input type="text" name="text_stock" value={textStock} onChange={handleChange} className="form-control" id="city" placeholder="Text Stock" />
                </div>

                <div className="form-group col-md-6">
                    <label for="city">Cover Stock</label>
                    <input type="text" name="cover_stock" value={coverStock} onChange={handleChange} className="form-control" id="city" placeholder="Cover Stock" />
                </div>

                <div className="form-group col-sm-3">
                    <label for="city">Supplied Artwork</label>
                    <input type="file" name="supplied" value={supplied} onChange={handleChange} className="form-control" id="city" placeholder="Cover Stock" />
                </div>
            </div>
            <hr></hr>

            <button type="submit"  className="btn btn-primary">Save</button>
        </form>

        </>
    )

}

export default JobForm