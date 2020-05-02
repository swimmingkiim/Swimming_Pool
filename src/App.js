import React, { useEffect } from 'react';
import './scss/App.scss';
import Info from './info.js';
import Title from './component/Title';
import Footer from './component/Footer';
import Card from './component/Card';
import Skill from './component/Skill';
import Image from './component/Image';
import SelfImg from './component/SelfImg';
import SwimmingStatusBar from './component/SwimmingStatusBar';
import PoolLine from './component/PoolLine';

function App() {

  // useEffect(() => {
  //   const xml = new XMLHttpRequest();
  //   xml.onreadystatechange= () => {
  //     if (xml.readyState === 4 && xml.status === 200) {
  //       console.log(xml.responseXML.getElementsByTagName("items")[0]);
  //     }
      
  //   }
  //   xml.open("GET", "https://cors-anywhere.herokuapp.com/http://openapi.copyright.or.kr/openapi/service/rest/ShrWrtgService/getTxtExpWrtgList?ServiceKey=78U44iSdalEUDabnFPAYkuMulakjQLPhT7XKUQ3FHJpFEKUsfKyCvrNhxSbrwttM1905kdxc0NtInzYN08ExKg%3D%3D", true);
  //   xml.send();
  // }, []);

  return (
    <main id="bigWrapper">
      <SwimmingStatusBar />
      <section className="page firstPage">
        <Title name={Info.Title[0]}/>
        <PoolLine brickNum={25} lineNum={5}/>
      </section>
      <section className="page selfIntro">
        <Title name={Info.Title[1]}/>
        <div className="selfIntroContainer">
          <SelfImg content={Info.SelfIntro}/>
          <Card content={Info.SelfIntro}/>
        </div>
      </section>
      <section className="page skills">
        <Title name={Info.Title[2]}/>
        <div className="iconContainer">
          {
            Info.Skills.map((name, index) => {
              return (
                <Image sourceName={name} w="20%" />
              );
            })
          }
        </div>
      </section>
      <section className="page toyProject">
        <Title name={Info.Title[3]}/>
        <div className="projectContainer">
          {
            Info.ToyProject.map((eachCard) => {
              return (
                <Card content={eachCard}/>
              );
            })
          }
        </div>
      </section>
      <Footer content={Info.Footer} />
    </main>
  );
}

export default App;
