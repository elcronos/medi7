import React from 'react'

export default Nav = () =>(
  <nav className="navbar navbar-default" role="navigation">
  	<div className="container-fluid">
      	<div className="navbar-header">
      		<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
      		</button>
      		<a className="navbar-brand" href="#">
            <img src="images/logo.jpg" alt="Logo Medi7" className="logonav img-circle img-responsive"/>
          </a>
      	</div>

      	<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      		<ul className="nav navbar-nav">
  				<li className="active"><a href="#">Rosters</a></li>
          		<li><a href="#">Appointments</a></li>
              <li><a href="#">Positions Available</a></li>
              <li><a href="#">Rooms for Lease</a></li>
              <li><a href="#">Contact Us</a></li>
          		<li className="dropdown">
          			<a href="#" className="dropdown-toggle" data-toggle="dropdown">Medi 7 Clinics <b className="caret"></b></a>
          			<ul className="dropdown-menu">
    					  <li><a href="#">Bentleigh</a></li>
    					  <li><a href="#">Chadstone</a></li>
    					  <li><a href="#">Clayton</a></li>
    					  <li className="divider"></li>
    					  <li><a href="#">Mooroolbark</a></li>
    					  <li className="divider"></li>
    				      <li><a href="#">St Kilda Rd</a></li>
            			</ul>
            		</li>
      		</ul>
      	</div>
  	</div>
  </nav>
)
