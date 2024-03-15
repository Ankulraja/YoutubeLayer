import React from 'react'

export const ContactUs = () => {
  return (
    <div className=' mx-auto max-w-[500px] my-[80px] mb-[100px]'>
        {/* <!-- Default form contact --> */}
<form className="text-center border border-light p-5 flex flex-col gap-3" >

    <p className="text-2xl ">Contact us</p>

    {/* <!-- Name --> */}
    <input type="text" className="mt-2 h-10 rounded-md px-3" placeholder="Name"/>

    {/* <!-- Email --> */}
    <input type="email" className="h-10 rounded-md px-3" placeholder="E-mail"/>

    {/* <!-- Subject --> */}
    <label>Subject</label>
    <select className="h-10 pl-2 mb-4 text-black">
        <option value="" disabled>Choose option</option>
        <option value="1" selected>Feedback</option>
        <option value="2">Report a bug</option>
        <option value="3">Feature request</option>
        <option value="4">Feature request</option>
    </select>

    {/* <!-- Message --> */}
    <div className="form-group">
        <textarea className="form-control rounded-0 pl-2 pt-2" id="exampleFormControlTextarea2" rows="3" placeholder="Message"></textarea>
    </div>

    {/* <!-- Copy --> */}
    <div className="custom-control custom-checkbox mb-4 ">
        <input type="checkbox" className="custom-control-input" id="defaultContactFormCopy"/>
        <label className="custom-control-label" for="defaultContactFormCopy">Send me a copy of this message</label>
    </div>

    {/* <!-- Send button --> */}
    <button className="py-1 px-3 bg-yellow-500 text-black text-[20px]" type="submit">Send</button>

</form>

    </div>
  )
}
