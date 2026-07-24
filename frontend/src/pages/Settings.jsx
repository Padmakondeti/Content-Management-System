import { toast } from "react-toastify";
import React, {useEffect, useState} from "react";

import {
    getSettings,
    updateSettings
} from "../services/settings.service";


const Settings =()=>{


const [form,setForm]=useState({

    siteName:"",
    siteDescription:"",
    contactEmail:"",
    phone:"",
    footerText:""

});


const [message,setMessage]=useState("");


// Load Settings

useEffect(()=>{

    loadSettings();

},[]);



const loadSettings=async()=>{

    try{

        const data = await getSettings();

        setForm(data.settings);

    }
    catch(error){

        console.log(error);

    }

};



// Handle Input

const handleChange=(e)=>{

    setForm({
        ...form,
        [e.target.name]:e.target.value
    });

};



// Save

const handleSubmit=async(e)=>{

    e.preventDefault();

    try{

        await updateSettings(form);

        toast.success("Settings updated successfully!");

    }
    catch(error){

        toast.error("Failed to update settings!");

    }

};



return (

<div className="container">


<h2>Website Settings</h2>


{
message &&
<p>
{message}
</p>
}



<form onSubmit={handleSubmit}>


<label>
Site Name
</label>

<input
type="text"
name="siteName"
value={form.siteName || ""}
onChange={handleChange}
/>



<label>
Site Description
</label>

<textarea

name="siteDescription"

value={form.siteDescription || ""}

onChange={handleChange}

/>



<label>
Contact Email
</label>

<input

type="email"

name="contactEmail"

value={form.contactEmail || ""}

onChange={handleChange}

/>



<label>
Phone
</label>


<input

type="text"

name="phone"

value={form.phone || ""}

onChange={handleChange}

/>



<label>
Footer Text
</label>


<input

type="text"

name="footerText"

value={form.footerText || ""}

onChange={handleChange}

/>


<button type="submit">
Save Settings
</button>


</form>


</div>

);


};


export default Settings;