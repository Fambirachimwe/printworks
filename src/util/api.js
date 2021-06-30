import axios from 'axios';
import { url } from "./constants";


// const header = `Authorization: Bearer ${token}`

export const fetchCustomers = async () => {
    const res = await fetch(`${url}/customers`, {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    });

    return res.json()

}


export const fetchDesigners = async () => {
    const res = await fetch(`${url}/users`, {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    })

    return res.json()
}


export const fetchJobs = async () => {
    const res = await fetch(`${url}/jobs`, {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    })

    return res.json()
}


export const fetchJobsByID = async (id) => {
    // console.log(id)
    const res = await fetch(`${url}/jobs/${id}`, {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    })

    return res.json()
}


export const addJob = async ({ ...data }) => {
    const response = await fetch(
      `${url}/jobs/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(data),
      }
    );
  
    if (!response.ok) {
    //   throw new Error(response.json().message);
        console.log("error occured")
    }
  
    return response.json();
};


export const deleteJob = async(id) => {
    const response = await fetch(
        `${url}/jobs/${id}`,
        {
            method: "DELETE",
            headers: {
              "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
           
          }
    )

    if (!response.ok) {
        //   throw new Error(response.json().message);
        console.log("error occured")
    }
      
    return true;
}



export const loginPost = async (email, password) => {
    const res = await axios.post(`${url}/auth/local`, {
        identifier: email,
        password: password
    })

    return res
}