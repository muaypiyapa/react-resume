import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid'
import picture from './picture.jpg'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid container spacing={0}>
          <Grid item sm={12} md={4}>
            <div className="column">
              <img src={picture} className="img" alt={"pic"}></img>
              <div className="text center bold">Piyapa Issaranont</div>
              <div className="text center">Muay</div>
              <div className="text center">189/197 Mb. Perfect place Sukhumvit 77 - Ladkrabang Road, Rachatewa, Bangphli, Samutprakarn 10540</div>
              <div className="text center bold header">Objective</div>
              <div className="text detail">To work in the position of UX/UI design or fontend web development with a company specialising in computer software, to be in team that everyone specialise in their skills, to be cooperative with each other well, to be responsible for the team’s goals.</div>
              <div className="text center bold header">hobbie {'&'} interest</div>
              <div className="text">
                <ul className="list">
                  <li>Computer Technology</li>
                  <li>User Interface Design</li>
                  <li>Cafe hopping</li>
                </ul>
              </div>
              <div className="text center bold header">Activities</div>
              <div className="text">
                <ul className="list">
                  <li>Cheerleading of Faculty of Engineering ( 2016 )</li>
                  <li>Participated in the Engineering Expo 2017 Innovative Awards “Smart Society”</li>
                </ul>
              </div>
            </div>
          </Grid>
          <Grid item sm={12} md={8} >
            <div className="column">
              <div className="text center bold name">Piyapa issaranont</div>
              <div className="text center bold header">Education</div>
              <div className="text detail bold">BACHELOR’S DEGREE IN INFORMATION ENGINEERING (2015-2019)</div>
              <div className="text detail">King’s Mongkut’s Institute of Technology Ladkrabang <br/> Bangkok, Thailand</div>
              <div className="text detail bold header">GPA: 2.93</div>
              <div className="text detail bold">HIGH SCHOOL CERTIFICATE IN MATHEMATICS AND SCIENCE <br/> (2012-2014)</div>
              <div className="text detail">Assumption college Samutprakarn Samutprakarn, Thailand</div>
              <div className="text detail bold header">GPA: 3.80</div>
              <div className="text center bold header">Experience</div>
              <div className="text detail bold">COURSES</div>
              <div className="text">Web technology (HTML, XML, Javascript), Data structure and Algorithm, Database (SQL, NoSQL, Firebase)</div>
              <div className="text detail bold">WORKS</div>
              <div className="text">
                <ul className="list">
                  <li>Work and travel USA, 2016 got “Employee of the month”</li>
                  <li>Summer Internship as a user interface design and developer at Muze innovation ( 6 months )</li>
                </ul>
              </div>
              <div className="text center bold header">Skills</div>
              <div className="text detail bold">TECHNICAL SKILLS</div>
              <div className="text">Information Architect Design, Wireframing, User Interface Design, HTML / CSS, Javascript, React, Sketch application, Git ( version control )</div>
              <div className="text detail bold">LANGUAGE SKILLS</div>
              <div className="text">
                <ul className="list">
                  <li>Thai: Native language</li>
                  <li>English: Good ( Listening, Reading ), Intermediate ( Speaking ), Basic ( Writting )</li>
                </ul>
              </div>
              <div className="text detail bold">PERSONAL</div>
              <div className="text">Optimistic, Self conﬁdence, Punctuality, Honesty, Agile framework, Flexibility and adaptability, Communication and presentation</div>
            </div>
            
          </Grid>
          
        </Grid>
      </div>
    );
  }
}

export default App;
