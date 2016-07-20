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
              <li><a href="#">Positions Available</a></li>
              <li><a href="#">Rooms for Lease</a></li>
              <li><a href="#">Contact Us</a></li>
      		</ul>
      	</div>
  	</div>
  </nav>
)
