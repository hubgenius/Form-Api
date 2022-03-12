import MaterialTable from 'material-table';
import React, { useState,useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useHistory} from "react-router-dom";

 function Copy() {

    let history = useHistory();
    const [user, setuser] = useState([])
    useEffect(()=>{
    data()
    
    },[])
    function data(){

        axios.get('http://localhost:9000')
            .then(res => {
                const tableData = res.data.data;
                setuser(tableData)
    
            })
    }
   
    
    function deleteuser(_id) {
        console.log(_id);
        axios.delete(`http://localhost:9000/${_id}`, {}).then((result) => {
            console.log("result.data", result);

        })

    }
    function updateuser(_id) {
        console.log(_id);
        history.push(`${_id}`);
        
    }
 
// const data=[
//     {
//         _id:'1',Profile_file:'2'
//     }
// ]
    const columns = [
        {
            title: "_id", field: "_id"
        },
        {
            title:"name",field:"name"
        },
        {
            title:"age",field:"age"
        },
        {
            title:"email",field:"email"
        },
        {
            title:"password",field:"password"
        },
        // {
        //     title: "profile_file", field: "profile_file"
        // },
        {
            title:"profile_url" , field:"profile_url" ,  render: (rowData) => <img src={rowData.profile_url} style={{ width: "25%", heigth:"25%"}} alt=""/>,
        }
       
    ]
 


    return (

        <div>

            <MaterialTable title=" Material Table"
                data={user}
                columns={columns}

                actions={[
                    {
                        icon: 'edit',
                        tooltip: 'Edit User',
                        editable: "rowData",
                        onClick: (event, rowData) => updateuser(rowData._id),

                    },

                    {
                        icon: 'delete',
                        tooltip: 'Delete User',
                        onClick: (event, rowData) => deleteuser(rowData._id)

                    }
                ]}
            />
         
            <button><Link to='/Create'>submit</Link></button>

        </div>
    )
}




export default Copy
