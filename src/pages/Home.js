import React from "react";
import "./Home.css";
import {CardDeck} from "react-bootstrap";
import { Card } from "react-bootstrap";
import myfirebase from "firebase";
import firebaseConfig from "../firebaseconfig";
class Home extends React.Component{
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
              <h2>Tempurature and Humidity</h2>
            </Card.Header>
            <Card.Body>
              <h5>TEMP</h5>
            <h4>{myweather.HomeTemp}</h4>
             
              <h5>HUM</h5>
            <h4>{myweather.HomeHump}</h4>
              
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <h2>Co2</h2>
            </Card.Header>
            <Card.Body>
            <h4>{myweather.HomeCarbon}</h4>
              
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <h2>PM 2.5</h2>
            </Card.Header>
            <Card.Body>
            <h4>{myweather.HomePM}</h4>
             
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
export default Home;
