"use client";
import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const PromptCard = ({post, handleTagClick, handleEdit , handleDetele}) => {

  const [copied,setCopied] = useState("");

  //handle the copy
  const handleCopy =() =>{
    setCopied(post.prompt);
    console.log(copied);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(()=> setCopied(""),3000);

   
  }


  return (
    <div className="prompt_card">
      <div className="flex justify-between item-start gap-5">
       <div className="flex-1 flex justify-start item-center gap-3 cursor-pointer">

        <Image 
         src={post.creator.image}
         width={40}
         height={40}
         className="roudnded-full object-contain"
        />
       <div className="flex flex-col">
         <h3 className="font-satoshi font-semibold text-gray-900">{post.creator.username}</h3>
         <p className="font-inter text-sm text-gray-900">{post.creator.email}</p>
       </div>
       </div>
       {/** div for the copy button */}
        <div className="copy_btn" onClick={handleCopy}>
         <Image 
          src={copied===post.prompt
          ?'/assets/icons/tick.svg'
          :'/assets/icons/copy.svg'
          }
          width={12}
          height={12}
         />
        </div>
      </div>
      <p className="my-4 font-satoshi text-sm text-gray-700">{post.prompt}</p>
      <p 
      className="font-inter text-sm blue_gradient cursor-pointer"
      onClick={()=> handleTagClick && handleTagClick(post.tag)}
      >#{post.tag}</p>
    </div>
  )
}

export default PromptCard