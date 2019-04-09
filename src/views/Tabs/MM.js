import React from 'react';

import classnames from 'classnames';
import { Container,Alert,Nav,NavItem,FormGroup,Label, Badge,Row,Col,Card,CardHeader,FormText,CardBlock,Table,Button,Modal, ModalHeader, ModalBody, ModalFooter,Input, InputGroup, InputGroupAddon } from "reactstrap";
export default class MM extends React.Component {
    constructor(props) {
    super(props);

    this.state = {
      activeTab: '1',
      displayTable:false
    };
   this.mm={
       market:'',
       sloc:''
   }
    
    this.handleChange = this.handleChange.bind(this);
    this.showTables = this.showTables.bind(this);
    this.saveAsDefault = this.saveAsDefault.bind(this);
  }
 
 handleChange(event){
     this.mm[event.target.name] = event.target.value;
     this.setState(this.mm);
      this.setState({
                    displayTable: false
                });
 }

   saveAsDefault(){
       
   }


 showTables(event){
   event.preventDefault();
   if(this.mm.market!='' && this.mm.sloc!=''){
         this.setState({
                    displayTable: true
                });
   }
   console.log(this.mm.market);

 }

  render() {
    return (
  <div className="complete_width mm_bottom"> 
                    <Row className="test">
                       <Col md="2">
                           <Label for="exampleEmail" >Market :</Label>
                        </Col> 
                        <Col md="6">
                            <InputGroup>
                            <Input type="select" className="w-100" value={this.mm.market} name="market" onChange={this.handleChange} id="ccmonth">
                               <option value="">Select </option>
                               <option value="6">6</option>
                                <option value="8">8</option>
                                <option value="12">12</option>
                            </Input>
                            
                            </InputGroup>
                        </Col>     
                        <span id="passwordLengthErr" className="colorvalidation"> </span>
                        <Col md="4">
                            <Button color="primary" onClick={this.saveAsDefault}  >Save as Default</Button>
                        </Col> 
                    </Row>
                    <Row>
                       <Col md="2">
                           <Label for="exampleEmail" className="pt-1">Plant/Sloc :</Label>
                        </Col> 
                        <Col md="6">
                            <InputGroup>
                            <Input type="select" className="w-100" value={this.mm.sloc} name="sloc" onChange={this.handleChange} id="ccmonth">
                               <option value="">Select </option>
                               <option value="6">6</option>
                                <option value="8">8</option>
                                <option value="12">12</option>
                            </Input>
                            
                            </InputGroup>
                        </Col>     
                        <span id="passwordLengthErr" className="colorvalidation"> </span>
                        <Col md="4">
                                <Button  color="primary"   className="save_button" onClick={this.showTables}>Save</Button>
                            
                        </Col> 
                    </Row>

                  {this.state.displayTable? <div>

                    <p className="test"> <b> List  of Disbursements</b> </p>
                     <Table bordered>
                                <thead>
                                  <tr>
                                    <th>#</th>
                                    <th>Disbursement1</th>
                                    <th>Disbursement2</th>
                                    <th>Disbursement3</th>
                                    <th>Disbursement4</th>
                                    <th>Disbursement5</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row">1</th>
                                    <td>1253</td>
                                    <td>145239</td>
                                    <td>22/09/2018</td>
                                    <td>145239</td>
                                    <td>145239</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">2</th>
                                      <td>1253</td>
                                    <td>145239</td>
                                    <td>22/09/2018</td>
                                    <td>145239</td>
                                    <td>145239</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">3</th>
                                      <td>1253</td>
                                    <td>145239</td>
                                    <td>22/09/2018</td>
                                    <td>145239</td>
                                    <td>145239</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">4</th>
                                      <td>1253</td>
                                    <td>145239</td>
                                    <td>22/09/2018</td>
                                    <td>145239</td>
                                    <td>145239</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">5</th>
                                      <td>1253</td>
                                    <td>145239</td>
                                    <td>22/09/2018</td>
                                    <td>145239</td>
                                    <td>145239</td>
                                  </tr>
                                </tbody>
                              </Table>

                                 <p className="test"> <b>Goods Receipt</b> </p>
                     <Table bordered>
                                <thead>
                                  <tr>
                                    <th>#</th>
                                    <th>Receipt1</th>
                                    <th>Receipt2</th>
                                    <th>Receipt3</th>
                                    <th>Receipt4</th>
                                    <th>Receipt5</th>
                       
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row">1</th>
                                    <td>1253</td>
                                    <td>145239</td>
                                    <td>22/09/2018</td>
                                    <td>22/09/2018</td>
                                    <td>145239</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">2</th>
                                      <td>1253</td>
                                    <td>145239</td>
                                    <td>22/09/2018</td>
                                    <td>22/09/2018</td>
                                     <td>145239</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">3</th>
                                      <td>1253</td>
                                    <td>145239</td>
                                    <td>22/09/2018</td>
                                      <td>1253</td>
                                    <td>145239</td>
                                  </tr>
                                   <tr>
                                    <th scope="row">4</th>
                                      <td>1253</td>
                                    <td>145239</td>
                                    <td>22/09/2018</td>
                                      <td>1253</td>
                                    <td>145239</td>
                                  </tr>
                                   <tr>
                                    <th scope="row">5</th>
                                      <td>1253</td>
                                    <td>145239</td>
                                    <td>22/09/2018</td>
                                      <td>1253</td>
                                    <td>145239</td>
                                  </tr>
                                </tbody>
                              </Table>

                                 <p className="test"> <b>Adavnce Ship Notice</b> </p>
                     <Table bordered>
                                <thead>
                                  <tr>
                                    <th>#</th>
                                    <th>Notice1</th>
                                    <th>Notice2</th>
                                    <th>Notice3</th>
                                    <th>Notice4</th>

                                     <th>Notice5</th>

                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row">1</th>
                                    <td>1253</td>
                                    <td>145239</td>
                                    <td>22/09/2018</td>
                                     <td>145239</td>
                                    <td>22/09/2018</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">2</th>
                                      <td>1253</td>
                                    <td>145239</td>
                                    <td>22/09/2018</td>
                                       <td>1253</td>
                                    <td>145239</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">3</th>
                                      <td>1253</td>
                                       <td>1253</td>
                                    <td>145239</td>
                                    <td>22/09/2018</td>
                                      <td>1253</td>
                                  </tr>
                                   <tr>
                                    <th scope="row">4</th>
                                      <td>1253</td>
                                       <td>1253</td>
                                    <td>145239</td>
                                    <td>22/09/2018</td>
                                      <td>1253</td>
                                  </tr>
                                   <tr>
                                    <th scope="row">5</th>
                                      <td>1253</td>
                                       <td>1253</td>
                                    <td>145239</td>
                                    <td>22/09/2018</td>
                                      <td>1253</td>
                                  </tr>
                                </tbody>
                              </Table> </div>:''}


  </div>
    );
  }
}
