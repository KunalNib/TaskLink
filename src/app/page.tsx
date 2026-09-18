// 'use client';
import { Button } from "@/components/ui/button";
import { caller } from "@/trpc/server";
// import { useState } from "react";

const Page =async()=>{

  const users=await caller.getUsers();

  return (
    <div className=" min-h-screen min-w-screen  flex justify-center items-center">
      {/* <Button className="bg-black text-white" > Click Me</Button>
      {JSON.stringify(users)} */}

      Hey There
    </div> 

  )
}

export default Page;