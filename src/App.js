//import logo from './logo.svg';
import cover1 from './images/book1.jpg';
import cover2 from './images/book2.jpg';
import cover3 from './images/book3.jpeg';
import cover4 from './images/book4.jpg';
import cover5 from './images/book5.jpg';
import cover6 from './images/book6.jpg';
import "bootstrap/dist/css/bootstrap.min.css";

//import './App.css';


function App() {
  return (


    <div className="container">
          <center><div class="alert alert-success" role="alert">
                  Ebook Web Portal with Boostrap
            </div></center>
          

      <div className="row">
          <div className="col-sm">
            Ebook Web Ap
          </div>

          <div class="col-sm"></div>
          
          <div class="col-sm">
          <button class="btn btn-primary" type="button">Login</button> |
           <button class="btn btn-primary" type="button">Sign Up</button>
          </div>
      </div>

              <div className="row">
                  <div className="col-sm">
                    Browser by Author
                  </div>
              </div>

              <div className="row">
                  <div className="col-sm">
                    Author List Name Populate Here
                  </div>
              </div>


              <div className="row">
                  <div className="col-sm">
                    Book List
                  </div>
              </div>


              <div className="row">
                  <div className="col-sm">
                      <img src={cover1} alt="cover1" width="100px" height="150px"/><br/><button type="button" class="btn btn-info">Read</button>
                  </div>
                  <div className="col-sm">
                      <img src={cover2} alt="cover1" width="100px" height="150px"/><br/><button type="button" class="btn btn-info">Read</button>
                  </div>
                  <div className="col-sm">
                      <img src={cover3} alt="cover1" width="100px" height="150px"/><br/><button type="button" class="btn btn-info">Read</button>
                  </div>
                  <div className="col-sm">
                      <img src={cover4} alt="cover1" width="100px" height="150px"/><br/><button type="button" class="btn btn-info">Read</button>
                  </div>
                  <div className="col-sm">
                      <img src={cover5} alt="cover1" width="100px" height="150px"/><br/><button type="button" class="btn btn-info">Read</button>
                  </div>
                  <div className="col-sm">
                      <img src={cover6} alt="cover1" width="100px" height="150px"/><br/><button type="button" class="btn btn-info">Read</button>
                  </div>
                
                </div>

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>


                                  <center><div class="alert alert-success" role="alert">
                                    Ebook Web Portal with Boostrap
                                      </div>
                                </center>
        
            
                                    <div className="row">
                                          <table border="2" cellspacing="0" width="90%" data-toggle="table">
                                            <tr>
                                              <td colSpan="5">Ebook Web App</td>
                                              <td><button class="btn btn-primary" type="button">Login</button> | <button class="btn btn-primary" type="button">Sign Up</button></td>
                                            </tr>

                                            <tr>
                                              <td>Broswer By Author</td>
                                              <td></td>
                                            </tr>

                                            <tr>
                                              <td>AuthorName</td>
                                            </tr>

                                            <tr>
                                              <td>JohN Walson</td>
                                              <td>Robert Kiyosaki</td>
                                              <td>Jasckon</td>
                                              <td>Morison</td>
                                              <td>Chinua Achebe</td>
                                              <td>Broson</td>
                                            </tr>

                                            <tr>
                                              <td>Books List</td>
                                              <td></td>
                                              <td></td>
                                              <td></td>
                                              <td></td>
                                              <td></td>
                                            </tr>

                                            <tr>
                                              <td><img src={cover1} alt="cover1" width="100px" height="150px"/><br/><button class="btn btn-primary" type="button">Read</button></td>
                                              <td><img src={cover2} alt="cover1" width="100px" height="150px"/><br/><button class="btn btn-primary" type="button">Read</button></td>
                                              <td><img src={cover3} alt="cover1" width="100px" height="150px"/><br/><button class="btn btn-primary" type="button">Read</button></td>
                                              <td><img src={cover4} alt="cover1" width="100px" height="150px"/><br/><button class="btn btn-primary" type="button">Read</button></td>
                                              <td><img src={cover5} alt="cover1" width="100px" height="150px"/><br/><button class="btn btn-primary" type="button">Read</button></td>
                                              <td><img src={cover6} alt="cover1" width="100px" height="150px"/><br/><button class="btn btn-primary" type="button">Read</button></td>
                                            </tr>

                                          
                                          </table>
                                    </div>


    </div>







  ); 
}




export default App;
