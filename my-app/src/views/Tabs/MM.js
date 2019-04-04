import React from 'react';

import classnames from 'classnames';
import { Container,Alert,Nav,NavItem,FormGroup,Label, Badge,Row,Col,Card,CardHeader,FormText,CardBlock,Table,Button,Modal, ModalHeader, ModalBody, ModalFooter,Input, InputGroup, InputGroupAddon } from "reactstrap";
export default class MM extends React.Component {
    constructor(props) {
    super(props);

    this.countHandleChange = this.countHandleChange.bind(this);
    this.state = {
      activeTab: '1'
    };
  }
  countHandleChange(){

  }
 

  render() {
    return (
  <div className="complete_width"> 
                    <Row className="test">
                       <Col md="2">
                           <Label for="exampleEmail" >Market :</Label>
                        </Col> 
                        <Col md="6">
                            <InputGroup>
                            <Input type="select" className="w-100" value="" name="passwordLength" onChange={this.handleChange} id="ccmonth">
                               <option value="">Select </option>
                               <option value="6">6</option>
                                <option value="8">8</option>
                                <option value="12">12</option>
                            </Input>
                            
                            </InputGroup>
                        </Col>     
                        <span id="passwordLengthErr" className="colorvalidation"> </span>
                        <Col md="4">
                            <Button color="primary" type="submit"  >Save as Default</Button>
                        </Col> 
                    </Row>
                    <Row>
                       <Col md="2">
                           <Label for="exampleEmail" className="pt-1">Plant/Sloc :</Label>
                        </Col> 
                        <Col md="6">
                            <InputGroup>
                            <Input type="select" className="w-100" value="" name="passwordLength" onChange={this.handleChange} id="ccmonth">
                               <option value="">Select </option>
                               <option value="6">6</option>
                                <option value="8">8</option>
                                <option value="12">12</option>
                            </Input>
                            
                            </InputGroup>
                        </Col>     
                        <span id="passwordLengthErr" className="colorvalidation"> </span>
                        <Col md="4">
                            <Button color="primary" type="submit"  className="save_button">Save</Button>
                        </Col> 
                    </Row>


                      <p className="test"> <b>Most Recent Transcation</b> </p>
                     <Table bordered>
                                <thead>
                                  <tr>
                                    <th>#</th>
                                    <th>Disbursement</th>
                                    <th>Goods Receipt</th>
                                    <th>Adavnce Ship Notice</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row">1</th>
                                    <td>1253</td>
                                    <td>145239</td>
                                    <td>22/09/2018</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">2</th>
                                      <td>1253</td>
                                    <td>145239</td>
                                    <td>22/09/2018</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">3</th>
                                      <td>1253</td>
                                    <td>145239</td>
                                    <td>22/09/2018</td>
                                  </tr>
                                </tbody>
                              </Table>


  </div>
    );
  }
}
