import React from "react";
import "./Home.css";
import {CardDeck} from "react-bootstrap";
import { Card } from "react-bootstrap";
import myfirebase from "firebase";
import firebaseConfig from "../firebaseconfig";


class temp extends React.Component{
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
              <h2>Tempurature and Humidity เครื่องที่ 1 </h2>
            </Card.Header>
            <Card.Body>
            <h5 >อุณหภูมิ (องศา)</h5>
            <h4>{myweather.Tempurature}</h4>
            
              <h5 class ="h005">ความชื้น</h5>
              <h4>{myweather.Humidity}</h4>
              
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <h2>Tempurature and Humidity เครื่องที่ 2</h2>
            </Card.Header>
            <Card.Body>
            <h5>อุณหภูมิ (องศา)</h5>
            <h4>{myweather.Tempurature2}</h4>
             
              <h5 class ="h005">ความชื้น</h5>
              <h4>{myweather.Humidity2}</h4>
              
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <h2>Tempurature and Humidity เครื่องที่ 3</h2>
            </Card.Header>
            <Card.Body>
            <h5>อุณหภูมิ (องศา)</h5>
            <h4>{myweather.Tempurature3}</h4>
              
              <h5 class ="h005">ความชื้น</h5>
              <h4>{myweather.Humidity3}</h4>
              
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



export default temp;

