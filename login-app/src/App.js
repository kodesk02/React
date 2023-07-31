import React from 'react';
import './App.css';
// import MediaQuery from 'react-responsive';
import logo from '../src/logo.png';

class Home extends React.Component {
    
 
  render() {
   
    return (

       <div className="maincontainer">
        <div class="container-fluid">
            <div class="row no-gutter">
               
              
          
                <div class="col-md-6 bg-light">
                    <div class="login d-flex align-items-center py-5">

                       
                        <div class="container">

                        <div className="header d-flex justify-content-center">
                        <img src={logo} alt="logo"/>
                        </div> 

                            <div class="row">
                              
                            
                                <div class="col-lg-10 col-xl-10 mx-auto">
                                    <h4 class="display-8 mb-5">Log In</h4>
                                    
                                    <form>
                                        <div class="form-group mb-4">
                                            <input id="inputEmail" type="email" placeholder=" email id" required="" autofocus="" class="form-control rounded-pill border-2  px-4" />
                                        </div>
                                        <div class="form-group mb-3">
                                            <input id="inputPassword" type="password" placeholder="password" required="" class="form-control rounded-pill border-2 px-4 text-primary" />
                                        </div>
                                        <div class="d-flex bd-highlight justify-content-between ml-3 mb-4">
                                        <div class="custom-control form-check-input mt-2">
                                          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                            <label class="form-check-label " for="flexCheckDefault">
                                              Remember password
                                            </label>

                                           
                                        </div> 
                                        <div class="mt-2 bd-highlight">
                                        <a href="#" class="" >Forgot password</a>
                                        </div>
                                        </div>
                                        <button type="submit" class="btn  btn-block  mb-2 rounded-pill shadow-sm mb-4">Log In</button>

                                        <div class="mx-auto mb-4 d-flex align-items-center justify-content-center mw-100">
                                            ----------------------------  or  ----------------------------------
                                        </div>

                                    {/* ICONS */}
                                    <div class="d-flex justify-content-center align-items-center">    
                                      <div class="border rounded-circle p-2">
                                        <i class="fab fa-google fa-2x "></i>
                                      </div>
                                      <div class="border rounded-circle p-2 ml-4">
                                        <i class="fab fa-twitter fa-2x"></i>
                                      </div>
                                    </div>


                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="col-md-6 d-none d-md-flex bg-image"></div>
            </div>
        </div>
      </div>
      
);
};
};

export default Home;