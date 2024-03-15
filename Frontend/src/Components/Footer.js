import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';

export const Footer = () => {
  return (
    <div>
    <div className='mt-[50px] flex flex-col items-center '>
        <div className='text-[40px] pb-[5px] border-b w-11/12 text-center'>
          Youtube Layer
        </div>
      </div>
      {/* <!-- Footer --> */}
      <footer className="bg-dark text-center text-white ">
        {/* <!-- Grid container --> */}
        <div className="container p-4">

          {/* <!-- Section: Social media --> */}
          <section className="mb-4 flex justify-center gap-3">
            {/* <!-- Facebook --> */}
            <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#3b5998' }} href="#!" role="button"><i className="fab fa-facebook-f w-10 "></i></a>

            {/* <!-- Twitter --> */}
            <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#55acee' }} href="#!" role="button"><i className="fab fa-twitter w-10 "></i></a>

            {/* <!-- Google --> */}
            <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#dd4b39' }} href="#!" role="button"><i className="fab fa-google w-10 "></i></a>

            {/* <!-- Instagram --> */}
            <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#ac2bac' }} href="#!" role="button"><i className="fab fa-instagram w-10 "></i></a>

            {/* <!-- Linkedin --> */}
            <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#0082ca' }} href="#!" role="button"><i className="fab fa-linkedin-in w-10 "></i></a>
            {/* <!-- Github --> */}
            <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#333333' }} href="#!" role="button"><i className="fab fa-github w-10 "></i></a>
          </section>

          <section className="">
            <form action="">
              <div className="row d-flex justify-content-center">
                <div className="col-auto">
                  <p className="pt-2">
                    <strong className='text-yellow-500 text-[20px]'>Sign up for our news letter</strong>
                  </p>
                </div>
                <div className="col-md-5 col-12 my-5">
                  {/* <!-- Email input --> */}
                  <div className="form-outline form-white mb-4">
                    <label className="form-label" htmlFor="form5Example2">Email address :-</label>
                    <input type="email" id="form5Example2" className="form-control ml-4 text-black px-1 border-2  border-green-600 rounded-md" />
                  </div>
                </div>
                <div className="col-auto ">
                  <button type="submit" className="btn btn-outline-light mb-4 ">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </section>

          <section className="mb-4">
            <p>
             Explore our YouTube Layer project for in-depth tutorials and exciting content. Subscribe to stay updated!🙌
            </p>
          </section>

          <section className="">
            <div className="row">
            
            </div>
          </section>

        </div>

        <div className="text-center p-3 text-gray-400" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2024 Copyright : 
          <a className=" text-gray-400" href="/"> YoutubeLayer.com😍</a>
        </div>

      </footer>
    </div>
  );
};
