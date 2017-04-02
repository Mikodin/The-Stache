import React, { Component, PropTypes } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

import { connect } from 'react-redux';

import Bill from '../Models/Bill';
import { addBill } from '../Actions/addBill.action';
import { deleteBill } from '../Actions/deleteBill.action';

class BillCreator extends Component {
  static propTypes = {
    addBill: PropTypes.func,
    deleteBill: PropTypes.func,
  }
  static defaultProps = {
    addBill: undefined,
    deleteBill: undefined,
  }
  constructor(props) {
    super(props);

    this.state = {
      billName: '',
      billAmount: '',
    };
  }

  addBill = (event) => {
    event.preventDefault();
    const bill = new Bill(this.state.billName, this.state.billAmount);
    this.props.addBill(bill);
  }

  deleteBill = () => {
    this.props.deleteBill(this.state.billName);
  }

  render() {
    const { billName, billAmount } = this.state;

    return (
      <div>
        <Form>
          <FormGroup row>
            <Label for="billName" sm={2}>Bill Name</Label>
            <Col sm={6}>
              <Input
                id="billName"
                name="billName"
                type="text"
                value={billName}
                placeholder="Enter a unique bill name"
                onChange={(event) =>
                    this.setState({ billName: event.target.value })} />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="billAmount" sm={2}>Bill Amount</Label>
                <Col sm={6}>
                  <Input
                    id="billAmount"
                    name="billAmount"
                    type="text"
                    inputMode="numeric"
                    value={billAmount}
                    placeholder="Enter the bill amount"
                    onChange={(event) =>
                        this.setState({ billAmount: event.target.value })} />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col sm={{ size: 6, push: 2, pull: 2, offset: 4 }}>
                      <Button color="primary" onClick={this.addBill}>
                        Add bill
                      </Button>
                    </Col>
                  </FormGroup>

                </Form>
              </div>
    );
  }
}

const mapStateToProps = (state) => ({ bills: state.bills });

export default connect(mapStateToProps, { addBill, deleteBill })(BillCreator);
