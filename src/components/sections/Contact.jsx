import {Revalscroll} from "../RevalScroll";
import { useState } from "react";
//import emailjs from "emailjs-com"
export const Contact=() =>
{
  const [formData,setFormData]=useState({
  name:"",email:"",message:""})
   //const SERVICE_ID= emailservice ("service_jct65jb")
  //const TEMPLATE_ID= templatejs ("template_aq0lpds")
  //const PUBLID_KEY= in acount
  const handleSubmit=(e)=>{
   e.preventDefault()
 // emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target,PUBLID_KEY.then(result)=>{
 // alert('message sent')
  //setFormData({name:"",email:"",message:""})
 // }).catch(()=>{
 // alert("oops ! an error occurred while sending PLS Try Again .")
 // })
  }
  return (
    <>
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center py-20 px-30"
      >
        <Revalscroll>
          <div className="px-4 w-100">
            <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-blue-700 to-gray-300 bg-clip-text text-transparent text-center">
              Let's Talk !
            </h2>
            <form
              action=""
              className="space-y-6" onSubmit={handleSubmit}
            >
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(fv)=>{setFormData({...formData,name:fv.value})}}
                  required
                  className="hover:shadow-[0_2px_8px_rgba(59,130,246,0.4)] w-full bg-white/5 border text-xl border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-gray-900 focus:bg-blue-500/10 font-xl"
                  placeholder="Name / Company..."
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                 
                  onChange={(fv)=>{setFormData({...formData,email:fv.value})}}

                  className="hover:shadow-[0_2px_8px_rgba(59,130,246,0.5)] w-full bg-white/5 border text-xl border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-gray-900 focus:bg-blue-500/10 font-xl"
                  placeholder="E-mail ..."
                />
              </div>
              <div className="relative">
                <textarea
                  type="message"
                  id="message"
                  name="message"
                  value={formData.message}
                  
                  onChange={(fv)=>{setFormData({...formData,name:fv.value})}}
                  required
                  rows={4}
                  className="hover:shadow-[0_2px_8px_rgba(255,255,246,0.2)] w-full bg-white/5 border text-xl border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-gray-900 focus:bg-blue-300/10 font-xl"
                  placeholder="Drop a Message. . . "
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-center text-white px-6 py-3 rounded font-bold font-medium transition-all ease-in relative overflow-hidden hover:-translate-y-1/2 hover:shadow-[0_5px_8px_rgba(255,255,255,0.4)] border hover:border-gray-800"
             onClick={handleSubmit} >
                DELIVER
              </button>
            </form>
          </div>
        </Revalscroll>
      </section>
    </>
  );
};
