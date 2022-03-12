import MaterialTable from 'material-table';
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

function Form1() {

    let history = useHistory();

    const [user, setuser] = useState([])

    useEffect(() => {
        data()
    }, [])

    function data() {
        axios.get(`http://localhost:9000`)
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

    const columns = [
        {
            title: "_id", field: "_id"
        },
        {
            title: 'name', field: 'name'
        },
        {
            title: 'email', field: 'email'
        },
        {
            title: 'phonenumber', field: 'phonenumber'
        },
        {
            title: "profile_url", field: "profile_url", render: (rowData) => <img src={rowData.profile_url} style={{ width: 120, height: 100}} alt="" />,
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
                        onClick: (event, rowData) => updateuser(rowData._id),

                    },

                    {
                        icon: 'delete',
                        tooltip: 'Delete User',
                        onClick: (event, rowData) => deleteuser(rowData._id)

                    }
                ]}
            />

            <button><Link to='/Create'>Add NewForm</Link></button>

        </div>
    )
}





export default Form1
