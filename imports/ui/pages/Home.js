import React from 'react'

export default Home = () =>(
   <div className="home">
      <div className="container text-center">
         <div className="title">
             <h2>Welcome</h2>
         </div>
         <div className="title">
             <h3>Medi7 Medical Centres</h3>
         </div>
         <div>
               <div>
                   <div className="row">
                       <div>
                        <h4>
                          <strong>Medi7</strong> family medical centres are owned and run by General Practitioners. Medi7 centres aim to provide quality patient care in a comfortable, modern environment.
                        </h4>
                       </div>
                   </div>
                   <br></br>
               </div>
         </div>

         <div>
         <div id="intro">
           <div className="container">
              <div className="row centered">
                 <div className="col-lg-4">
                    <img src="images/services.png"/>
                    <h3>Services</h3>
                    <div className="text-justify">
                       <p>
                          Medi7 medical centres are equipped with a wide range of diagnostic tools and testing procedures. Services vary from centre to centre but commonly include: General Practice, women’s health, men’s health, allergy management, acupuncture, psychiatry & counselling, on-site pathology testing, ECGs, liquid nitrogen (freezing of sunspots & warts), weight management, vaccinations (children & travel) and a variety of para-medical services
                       </p>
                    </div>
                    <br></br>
                    <button className="btn btn-default">Our Services</button>
                    <br></br>
                 </div>
                 <div className="col-lg-4">
                    <br></br>
                    <img width="128" height="128" src="images/appoinment.png" alt=""/>
                    <h3>Appointment </h3>
                    <div className="text-justify">
                       <p>
                           Please call to make an appointment for the doctor of your choice. Patients with appointments are given priority over non-appointment patients. Emergencies are always given the highest priority
                       </p>
                    </div>
                    <br></br>
                    <div className="text-justify">
                       <p>
                          Now you can book an appointment online:
                       </p>
                    </div>
                    <button className="btn btn-default">Appointments Online</button>
                 </div>
                 <div className="col-lg-4 ">
                    <img src="images/information.png" alt=""/>
                    <h3>MEDI7 CLINICS </h3>
                    <div className="text-justify">
                       <p>
                        All Medi7 centres are accredited by AGPAL. Medi7 centres are open for extended hours. Please check with your local centre for specific hours.
                       </p>
                    </div>
                    <button className="btn btn-default">Our Clinics</button>
                    <h3>Health & Allied</h3>
                    <div>
                       <p>Allied health centres at Chadstone, Mooroolbark and St Kilda Rd. Coming soon to Clayton</p>
                    </div>
                    <button className="btn btn-default">Our Clinics</button>
                 </div>
              </div>
              <br></br>
              <hr></hr>
           </div>

 	       </div>
     </div>
   </div>
   </div>
)
