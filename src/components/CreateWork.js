import { useState } from "react";
import WorkForm from "./WorkForm";
import Axios from "axios";
import Logout from './Logout';


const h2styling = {
    color: 'darkblue'
}




function CreateWork()
{
    const [arr,setArr] = useState([]); //arr= [raj,raj@gmail.com,1]

    const getState = (childData) => { //childData => [raj,raj@gmail.com,1]
        setArr(childData); //
    }

    const handleSubmit = () => {
        const data = {school: arr[0], phoneNo: arr[1], link: arr[2], subName: arr[3], teacherEmail: arr[4]}
        Axios.post("https://mernfinalproject16-t-196backenddeployment.onrender.com/teacherRoute/create-work",data)
        .then((res)=>{
            if(res.status === 200){
                alert("Work added successfully");
                window.location.reload();}
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
    }
    return (
        <div class="bg-secondary">
        <form onSubmit={handleSubmit}>
            <WorkForm getState={getState} schoolValue="" phoneNoValue=""
                linkValue="" subNameValue="" teacherEmailValue="">
                    Create Work
                    </WorkForm>
                
        </form>
        
        <center><br></br>
                <Logout />
            </center>


        <footer class="bg-warning mt-5"><br></br>
        <div style={h2styling} class="row">
            <div class="col-12 col-lg-3">
                <h3>&ensp;Quick Links</h3><strong><br></br>
                <p>&ensp;&ensp;About us</p>
                <p>&ensp;&ensp;Courses</p>
                <p>&ensp;&ensp;Resources</p>
                <p>&ensp;&ensp;Blog</p>
                <p>&ensp;&ensp;Support</p></strong>
            </div>

            <div style={h2styling} class="col-12 col-lg-3">
                <h3>Popular Courses</h3><strong><br></br>
                <p>Appian Developer</p>
                <p>AWS Solutions Architect Associate</p>
                <p>Full Stack MERN</p>
                <p>AWS Cloud Practitioner</p></strong>
            </div>

            <div style={h2styling} class="col-12 col-lg-3">
                <h3>Popular Blogs</h3><strong><br></br>
                <p>Appian Developer Certification Course in Bangalore: A Comprehensive Guide</p>
                <p>Exploring Different Types of AWS Jobs for Freshers</p>
                <p>Full Stack Developer Course in Bangalore</p>
                <p>Appian Certifications for Freshers: Which Level is Best? - List Included</p>
                <p>MEAN vs MERN: Choosing the Best JavaScript Stack for Web Development</p></strong>
            </div>

            <div style={h2styling} class="col-12 col-lg-3">
                <h3>&ensp;&ensp;&ensp;&ensp;&ensp;Powered by</h3><br></br>
                &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<img src={require('./ethnuslogo.png')} alt="logo" />
            </div>
        </div><br></br><br></br>

        <p><span class="text-light">&ensp;&copy; Learnmithra. All Rights Reserved</span>
        <span class="h4 text-light float-end">Privacy Policy Terms & Conditions&ensp;</span></p><br></br>
    </footer>
        
        
        
        </div>
    )
}
export default CreateWork;