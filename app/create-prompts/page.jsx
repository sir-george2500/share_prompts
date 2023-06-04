'use client'
import { useSession } from "next-auth/react";
import { useState } from "react";
import Router from "next/router";
import Form from "@components/Form";

const CreatePrompt = () =>{
   const [submitting,setSubmitting]=useState(false);
   const [post, setPost] = useState({
    prompt:'',
    tag :''
   })

   const createPrompt = async (e) => {

   }
  return(

    <Form  
     type="Create Post"
     post={post}
     setPost={setPost}
     submitting={submitting}
     handleSubmitting={createPrompt}
    />
  )
}

export default CreatePrompt;