import React, { Component } from 'react'
import axios from 'axios'

export default class All extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedField: '',
            name:'',age:'',
            email:"",
            password:"",
            id: this.props.match.params.id

        }
    }
    myHandler = (events) => {
        this.setState({
            selectedField: events.target.files[0],
            // name:events.target.value,
            // age:events.target.value,
            // email:events.target.value,
            // password:events.target.value,
        })

    }


    submitHandler = async (event) => {
        event.preventDefault();
        
        var url = "http://localhost:9000/6229bb482bdaf9ed2a7125b7";

        const formdata = new FormData()
        // console.log('hey...',this.state.selectedField)
        formdata.append('profile_file', this.state.selectedField)
        let response = await axios.put(url, formdata)
        this.props.history.push('/')
    }



    render() {
        return (
            <div>
                {/* data:{this.props.match.params.id} */}
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label htmlfor='name'> Name:</label>
                        <input required type='text' name='name'  onChange={this.myHandler}></input>
                    </div>
                    <div>
                        <label htmlfor='age'> Age: </label>
                        <input required type='text' name='age'onChange={this.myHandler}></input>
                    </div>
                                      
                    <div>
                        <lable htmlFor='email'> Email:  </lable>
                        <input required type='text' name='Email' autoComplete='off'
                             onChange={this.myHandler} />
                    </div>
                    <div>
                        <label htmlfor='password'> Password:</label>
                        <input required type='text'   onChange={this.myHandler}></input>
                    </div>

                    <input type='file' name='profile_file' onChange={this.myHandler} />
                    <input type='submit' value="upload" />
                    <div>
                        <button type="submit" onClick={this.submitHandler}> submit</button>
                    </div>
                </form>



            </div>
        )
    }
}


