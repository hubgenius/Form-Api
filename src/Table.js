// import React, { useState, useEffect } from 'react';
// import { useHistory, useParams } from "react-router-dom";
// import axios from 'axios';

// const Table = () => {
//     const { id } = useParams();
//     let history = useHistory();

//     const [Fristname, setFristname] = useState('')
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [photo, setphoto] = useState('')
//     const [file, setfile] = useState([])
//     //  this is err validation add in From
//     const [FirstnameErr, setFristnameErr] = useState({});
//     const [emailErr, setemailErr] = useState({})


//     const [allEntry, setAllEntry] = useState([])
//     const submitForm = (e) => {
//         e.preventDefault();
//         const isValid = formValidation()

//         const newEntry = { Fristname, email, password, photo, }

//         if (isValid) {
//             setAllEntry([...allEntry, newEntry])
//             setFristname('');
//             setEmail('')
//             setPassword('')
//             setfile('')
//         }
//     }


//     const formValidation = () => {
//         const FirstnameErr = {};
//         const emailErr = {};
//         let isValid = true;

//         if (Fristname.trim().length < 5) {
//             FirstnameErr.Firstname = "Frist Name is Not Valid"
//             isValid = false;
//         }
//         if (!email.includes("@  ")) {
//             // emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
//             emailErr.email = "@ must have in email";
//             isValid = false;
//         }
//         setFristnameErr(FirstnameErr)
//         setemailErr(emailErr)
//         return isValid

//     }
//     useEffect(() => {
//         getuser()
//     }, [])

//     const getuser = () => {
//         console.log("id----------", id)
//         if (id === undefined || id === null) {
//         } else {
//             axios.get(`http://localhost:9000/`).then((result) => {
//                 console.log("result.data", result.data)
//                 if (result.data.success === true) {
//                     setFristname(result.data.data.name)
//                     setEmail(result.data.data.gmail)
//                     setPassword(result.data.data.password)
//                     setfile(result.data.data.photo_path)
                    
//                 } else {
//                     return;
//                 }

//             })
//         }
//     }

//     function updatebackenddat() {
//         let item = {
//             name: Fristname,
//             gmail: email,
//             password: password,
//             photo: photo
//         }
//         if (id === undefined || id === null) {
//             return;
//         } else {
//             axios.put(`http://localhost:9000/${id}`, item).then((res) => {
//                 console.log("updare", res)

//             })
//         }
//         history.push('/')

//     }

//     // function updatebackenddat() {
//     //     let item = {
//     //         name: Fristname,
//     //         gmail: email,
//     //         phonenumber: phonenumber,
//     //         city: city
//     //     }
//     //     console.log(item)
//     //     axios.post("http://localhost:8000/", item).then((res) => {
//     //         console.log("updare", res)
//     //     })

//     // }    

//     return (

//         <>


//             <p class="oo" ><span>Information Form</span></p>

//             <div>
//                 <img src={file} width="100" height="100" />
//             </div>
//             <form class="MM" onSubmit={submitForm}>
//                 <div class="bb">
//                     <label htmlfor='Fristname'>Enter Your FullName:</label>
//                     <input required type='text' name='Fristname' value={Fristname} onChange={(e) => setFristname(e.target.value)}></input>
//                     <br />
//                     {Object.keys(FirstnameErr).map((key) => {
//                         return <div style={{ color: 'red' }}>{FirstnameErr[key]}</div>
//                     })}
//                 </div>
//                 <br />
//                 <div class='A'>
//                     <lable htmlFor='email'> Email:  </lable>
//                     <input required type='text' name='email' autoComplete='off'
//                         value={email} onChange={(e) => setEmail(e.target.value)} />
//                     <br />
//                     {Object.keys(emailErr).map((key) => {
//                         return <div style={{ color: 'red' }}>{emailErr[key]}</div>
//                     })}
//                 </div>
//                 <br />
//                 <div class='B'>
//                     <label htmlFor="Password" name=" password">Password :</label>

//                     <input type='text' name='password' value={password} onChange={(e) => setPassword(e.target.value)} />

//                 </div>
//                 <br />
//                 <br />
//                 <br />

//                 <button style={{ background: 'gold' }} type='submit' onClick={updatebackenddat}>Submit</button>

//             </form>
//             <br />

//         </>
//     )


// }


// export default Table; 
import React, { useState ,useEffect} from 'react';
import { Button ,} from 'react-bootstrap';
import { useParams,useHistory } from 'react-router-dom'
import axios from 'axios';

const Table = () => {
    const {id} =useParams()
    let history = useHistory();
    const [Fristname, setFristname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [Age, setAge] = useState('')
    const[file,setfile]=useState([])
   
//  this is err validation add in From
    const [FirstnameErr, setFristnameErr] = useState({});
    const [emailErr, setemailErr] = useState({})


    const [allEntry, setAllEntry] = useState([])

    const [show, setshow] = useState(false)
  useEffect(()=>{
      getuser()
      
  }, [])

    // const submitForm = (e) => {
    //     e.preventDefault();
    //     const isValid = formValidation()

    //     const newEntry = { Fristname, email, password, Age,file}

    //     if (isValid) {
    //         setAllEntry([...allEntry, newEntry])
    //         setFristname('');
    //         setEmail('')
    //         setPassword('')
    //         setAge('')
    //         setfile("")
           
    //     }

    // }
    const getuser = () => {
                console.log("id----------", id)
                if (id === undefined || id === null) {
                } else {
                    axios.get(`http://localhost:9000/${id}`).then((result) => {
                        console.log("result.data", result)
                        if (result.data.success === true) {
                            setFristname(result.data.data[0].name)
                            setEmail(result.data.data[0].email)
                            setPassword(result.data.data[0].password)
                            setAge(result.data.data[0].age)
                            setfile(result.data.data[0].profile_url)
                        } else {
                            return;
                        }
        
                    })
                }
            }
            // function post() {
            //     const fD= new FormData() ;                                                      
                                                                                
            //      fD.append("name", Fristname)
            //       fD.append("email", email)
            //        fD.append ("password", password)
            //          fD.append("age",Age)
            //         fD.append("profile_file",file[0])
                
            //     console.log(fD)
            //     axios.post(`http://localhost:9000/`, fD).then((res) => {
            //       console.log("u...", res)
            //     })
              
            //   }
            function updatebackenddat() {
                let item = {
                    name: Fristname,
                    email: email,
                    password: password,
                    age:Age,
                    profile_file:file
                    
                }
                if (id === undefined || id === null) {
                    return;
                } else {
                    axios.put(`http://localhost:9000/${id}`, item).then((res) => {
                        console.log("updare", res)
        
                    })
                }
                history.push('/')
        
            }
        
   

 
    const formValidation = () => {
        const FirstnameErr = {};
        //  const emailValid= {emailValid}
        //  const value={value}
        const emailErr = {};
        let isValid = true;

        if (Fristname.trim().length < 5) {
            FirstnameErr.Firstname = "Frist Name is Not Valid"
            isValid = false;
        }
       

        setFristnameErr(FirstnameErr)
        setemailErr(emailErr)
        return isValid

    }

    return (

        <div>


            <p class="oo" ><span>Information Form</span></p>

            <form class="MM" >
                <div>
                    <img src={file} height="100" width="100" alt=""/>
                </div>
                <div class="bb">
                    <label htmlfor='Fristname'>Enter Your FullName:</label>
                    <input required type='text' name='Fristname' value={Fristname} onChange={(e) => setFristname(e.target.value)}></input>
                    <br />
                   
                </div>
                <br />
                <div class='A'>
                    <lable htmlFor='email'> Email:  </lable>
                    <input required type='text' name='email' autoComplete='off'
                        value={email} onChange={(e) => setEmail(e.target.value)} />
                    <br />
                    {Object.keys(emailErr).map((key)=> {
                        return <div style={{ color: 'red' }}>{emailErr[key]}</div>
                    })}
                </div>
                <br />
                <div class='B'>
                    <label htmlFor="Password" name=" password">Password :</label>

                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

                </div>
                <br/>
                <div class='B'>
                    <label htmlFor="Age" name=" Age">Age :</label>

                    <input type="number" value={Age} onChange={(e)=>setAge(e.target.value)}/>

                </div>
                <div>
                    
                    <label >Profile</label>
                    <input  type='file'  onChange={(e) => setfile(e.target.files)}/>
                </div>
                
         
                <button  type="submit" onClick={updatebackenddat}>submit</button>
      
        
            </form>
            <br />
         
            </div>

    )


}


export default Table;