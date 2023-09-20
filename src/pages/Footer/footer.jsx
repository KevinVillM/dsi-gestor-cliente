import React from "react";

export default function Footer(){
    const footerStyle = {
        backgroundColor: "#f1f1f1",
      };
    
      return (
        <div className="container my-5">
          <footer className="text-center text-white " style={footerStyle}>
            <div className="container pt-4">
  
    <section className=" container absolute">
   
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-facebook-f"></i></a>

      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-twitter"></i></a>

     
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-google"></i></a>

      
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-instagram"></i></a>


      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-linkedin"></i></a>
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-github"></i></a>
    </section>
 
  </div>
 

  <div className="text-center text-white p-5   absolute" style={{ backgroundColor: "#214A87" }}>
    © 2020 Copyright:
    <a className="text-white" href="https://mdbootstrap.com/">SGDP.com</a>
  </div>
</footer>
  
</div>
    )
}