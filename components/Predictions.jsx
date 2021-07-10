import React, { Component } from "react";
import { Container, Grid, Header, List, Table} from "semantic-ui-react";
import prediction1 from '../binance-coin.json';
import prediction2 from '../bitcoin.json';
import prediction3 from '../bitcoin-cash.json';
import prediction4 from '../cardano.json';
import prediction5 from '../dogecoin.json';
import prediction6 from '../ethereum.json';
import prediction7 from '../polkadot.json';
import prediction8 from '../ripple.json';
import prediction9 from '../tether.json';

class App extends Component {

    render() {
      return (
        <div className="shadow border p-2 rounded mt-2 mb-2 bg-light">
        <h1>Binance Coin Predictions</h1>
        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>id</Table.HeaderCell>
              <Table.HeaderCell>coin_prices</Table.HeaderCell>
              <Table.HeaderCell>Date</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
  
          <Table.Body>
            {prediction1.map(el => {
              return (
                <Table.Row key={el.id}>
                  <Table.Cell>{el.id}</Table.Cell>
                  <Table.Cell>{el.coin_prices}</Table.Cell>
                  <Table.Cell>{el.Date}</Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
        <h1>Bitcoin Predictions</h1>
        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>id</Table.HeaderCell>
              <Table.HeaderCell>coin_prices</Table.HeaderCell>
              <Table.HeaderCell>Date</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
  
          <Table.Body>
            {prediction2.map(el => {
              return (
                <Table.Row key={el.id}>
                  <Table.Cell>{el.id}</Table.Cell>
                  <Table.Cell>{el.coin_prices}</Table.Cell>
                  <Table.Cell>{el.Date}</Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
        <h1>Bitcoin-Cash Predictions</h1>
        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>id</Table.HeaderCell>
              <Table.HeaderCell>coin_prices</Table.HeaderCell>
              <Table.HeaderCell>Date</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
  
          <Table.Body>
            {prediction3.map(el => {
              return (
                <Table.Row key={el.id}>
                  <Table.Cell>{el.id}</Table.Cell>
                  <Table.Cell>{el.coin_prices}</Table.Cell>
                  <Table.Cell>{el.Date}</Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
        <h1>Cardano Predictions</h1>
        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>id</Table.HeaderCell>
              <Table.HeaderCell>coin_prices</Table.HeaderCell>
              <Table.HeaderCell>Date</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
  
          <Table.Body>
            {prediction4.map(el => {
              return (
                <Table.Row key={el.id}>
                  <Table.Cell>{el.id}</Table.Cell>
                  <Table.Cell>{el.coin_prices}</Table.Cell>
                  <Table.Cell>{el.Date}</Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
        <h1>Dogecoin Predictions</h1>
        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>id</Table.HeaderCell>
              <Table.HeaderCell>coin_prices</Table.HeaderCell>
              <Table.HeaderCell>Date</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
  
          <Table.Body>
            {prediction5.map(el => {
              return (
                <Table.Row key={el.id}>
                  <Table.Cell>{el.id}</Table.Cell>
                  <Table.Cell>{el.coin_prices}</Table.Cell>
                  <Table.Cell>{el.Date}</Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
        <h1>Ethereum Predictions</h1>
        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>id</Table.HeaderCell>
              <Table.HeaderCell>coin_prices</Table.HeaderCell>
              <Table.HeaderCell>Date</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
  
          <Table.Body>
            {prediction6.map(el => {
              return (
                <Table.Row key={el.id}>
                  <Table.Cell>{el.id}</Table.Cell>
                  <Table.Cell>{el.coin_prices}</Table.Cell>
                  <Table.Cell>{el.Date}</Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
        <h1>Polkadot Predictions</h1>
        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>id</Table.HeaderCell>
              <Table.HeaderCell>coin_prices</Table.HeaderCell>
              <Table.HeaderCell>Date</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
  
          <Table.Body>
            {prediction7.map(el => {
              return (
                <Table.Row key={el.id}>
                  <Table.Cell>{el.id}</Table.Cell>
                  <Table.Cell>{el.coin_prices}</Table.Cell>
                  <Table.Cell>{el.Date}</Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
        <h1>Ripple Predictions</h1>
        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>id</Table.HeaderCell>
              <Table.HeaderCell>coin_prices</Table.HeaderCell>
              <Table.HeaderCell>Date</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
  
          <Table.Body>
            {prediction8.map(el => {
              return (
                <Table.Row key={el.id}>
                  <Table.Cell>{el.id}</Table.Cell>
                  <Table.Cell>{el.coin_prices}</Table.Cell>
                  <Table.Cell>{el.Date}</Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
        <h1>Tether Predictions</h1>
        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>id</Table.HeaderCell>
              <Table.HeaderCell>coin_prices</Table.HeaderCell>
              <Table.HeaderCell>Date</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
  
          <Table.Body>
            {prediction9.map(el => {
              return (
                <Table.Row key={el.id}>
                  <Table.Cell>{el.id}</Table.Cell>
                  <Table.Cell>{el.coin_prices}</Table.Cell>
                  <Table.Cell>{el.Date}</Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
        </div>
      );
    }
  }
  
  export default App;