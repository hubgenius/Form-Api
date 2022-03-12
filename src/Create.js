import React, { useState, useEffect } from 'react';
import { Button, Form} from 'semantic-ui-react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams, useHistory } from 'react-router-dom'

export default function Create() {
    const [name, setName] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [profile, setProfile] = useState([]);

    const { id } = useParams()
    let history = useHistory();
    useEffect(() => {
        getuser()

    }, [])

    const getuser = () => {
        console.log("id----------", id)
        if (id === undefined || id === null) {
        } else {
            axios.get(`http://localhost:9000/${id}`).then((result) => {
                console.log("result.data", result)
                if (result.data.success === true) {
                    setName(result.data.data[0].name)
                    setEmail(result.data.data[0].email)
                    setPhonenumber(result.data.data[0].phonenumber)
                    setAge(result.data.data[0].age)
                    setProfile(result.data.data[0].profile_url)
                } else {
                    return;
                }

            })
        }
    }
    const postData = () => {
        let FD = new FormData();
        FD.append('name', name);
        FD.append('phonenumber', phonenumber);
        FD.append('email', email);
        FD.append('age', age);
        FD.append('profile_file', profile[0]);
        console.log("profile", profile);
        axios.post('http://localhost:9000', FD)
        history.push("/")
    }
    function updatebackenddat() {
        let FD = new FormData();
        FD.append('name', name);
        FD.append('phonenumber', phonenumber);
        FD.append('email', email);
        FD.append('age', age);
        FD.append('profile_file', profile[0]);

        if (id === undefined || id === null) {
            return;
        } else {
            axios.put(`http://localhost:9000/${id}`, FD).then((res) => {
                console.log("updare", res)

            })
        }
        history.push('/')

    }

    return (
        <div>
            <div className='main'>
                <h2> Information Form</h2>
                <br/>
                <br/>
                <form>

                    {/* <img src={profile} height="100" width="100" alt="" /> */}
                    <div>
                        <label htmlFor='name'>Name :</label>
                        <input value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <br/>
                    <div>
                        <label>Phonenumber :</label>
                        <input  value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} />
                    </div>
                    <br/>
                    <div>
                        <label>Email :</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <br/>
                    <div>
                        <label>Age :</label>
                        <input value={age} onChange={(e) => setAge(e.target.value)} />
                    </div>
                    <br/>
                    <div>

                        <label>Profile :</label>
                        <input placeholder='profile' type='file' name='profile_file' onChange={(e) => setProfile(e.target.files)} />
                    </div>
                    <br/>
                    <Button onClick={updatebackenddat} type='submit'><Link to='/'>Update</Link></Button>
                     <Button onClick={postData} type='submit'>submit</Button>

                </form>
            </div>
        </div>
    )
}