import React from "react";
import "./Home.css";
import {CardDeck} from "react-bootstrap";
import { Card } from "react-bootstrap";
import myfirebase from "firebase";
import firebaseConfig from "../firebaseconfig";
class PM extends React.Component{
  constructor(props){
    super(props);
    if(myfirebase.app.length){
      myfirebase.initializeApp(firebaseConfig);
    }
    this.state = {
      myweather: []
     
    }
  }
  getData = () => {
    let ref = myfirebase.database().ref('/');
    ref.on('value',snapshot => {
      this.setState({
        myweather: snapshot.val()
      });
    });
  }
  componentDidMount(){
    this.getData();
  }
  render(){
    const {myweather} = this.state;
    return(
      <div class ="content">
      <section class="c1">
        <CardDeck>
          <Card>
            <Card.Header>
              <h2>PM2.5 เครื่องที่ 1 </h2>
            </Card.Header>
            <Card.Body>
              <h4>{myweather.PM}</h4>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <h2>PM2.5 เครื่องที่ 2</h2>
            </Card.Header>
            <Card.Body>
            <h4>{myweather.PM2}</h4>
              
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <h2>PM2.5 เครื่องที่ 3</h2>
            </Card.Header>
            <Card.Body>
            <h4>{myweather.PM3}</h4>
              
            </Card.Body>
          </Card>
        </CardDeck>
        <article className="a1">
          <Card border="primary">
            <Card.Body>
              <Card.Title>กราฟแสดงข้อมูล</Card.Title>
            </Card.Body>
          </Card>
        </article>
      </section>
      </div>
    )
  }
}

export default PM;