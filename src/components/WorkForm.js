import { useState,useEffect } from "react";

const h1styling = {
    color: 'darkred'
}




function WorkForm(props)
{
    const [school,setSchool] = useState(props.schoolValue);
    const [phoneNo,setPhoneNo] = useState(props.phoneNoValue);
    const [link,setLink] = useState(props.linkValue);
    const [subName,setSubName] = useState(props.subNameValue);
    const [teacherEmail,setTeacherEmail] = useState(props.teacherEmailValue);

    useEffect(()=>{
        setSchool(props.schoolValue);
        setPhoneNo(props.phoneNoValue);
        setLink(props.linkValue);
        setSubName(props.subNameValue);
        setTeacherEmail(props.teacherEmailValue);
    },[props.schoolValue,props.phoneNoValue,props.linkValue,props.subNameValue,props.teacherEmailValue])


    const arr = [school,phoneNo,link,subName,teacherEmail]; 

    const handleClick = () => {
        props.getState(arr);
    }
    return(
        <div style={{maxWidth:"50%",margin:"0px auto"}}><br></br>
        <h1 class="text-center my-2" style={h1styling}>Work Form</h1><br></br>
            <input type="text" defaultValue={props.schoolValue} onChange={(event)=>setSchool(event.target.value)} class="form-control my-3" placeholder="Enter your school name" required/>
            <input type="number" defaultValue={props.phoneNoValue} onChange={(event)=>setPhoneNo(event.target.value)} class="form-control my-3" placeholder="Enter your phone number" required/>
            <input type="url" defaultValue={props.linkValue} onChange={(event)=>setLink(event.target.value)} class="form-control my-3" placeholder="Enter the work link" required/>
            <input type="text" defaultValue={props.subNameValue} onChange={(event)=>setSubName(event.target.value)} class="form-control my-3" placeholder="Enter your subject name" required/>
            <input type="email" defaultValue={props.teacherEmailValue} onChange={(event)=>setTeacherEmail(event.target.value)} class="form-control my-3" placeholder="Enter your email" required/>
            <button onClick={handleClick} class="btn btn-success d-block mx-auto my-3" type="submit">{props.children}</button>
        </div>
    )
}
export default WorkForm;
