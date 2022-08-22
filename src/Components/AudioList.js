import React, { useState, useEffect } from 'react';
//npm i @fortawesome/fontawesome-svg-core install svg core
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faFileAudio } from "@fortawesome/free-solid-svg-icons";
import { AudioPlayer } from './AudioPlayer';


export const AudioList = ({more,setMore}) => {
   
    console.log("value of more",more);
    //console.log("received",appData);
    const [appData2,setAppData2]=useState([]);
    const [flag,setFlag]=useState(false);
    const[currentTrackIndex,setCurrentTrackIndex]=useState(0);
    const enoughState=[];
    
   
    const baseUrl="http://localhost:9000";

    
      
      useEffect(()=>{
        console.log("useffect executed");
      fetch(`http://localhost:9000/song`)
        .then((res) => res.json())
        .then((jsonResp) => {
          
          console.log({ jsonResp });
          console.log("pppppp",jsonResp.allsongarray);
          (jsonResp.allsongarray).forEach(element => {
            setAppData2(oldArray => [...oldArray,element] );
          });
          setFlag(true);
          //setAppData2(jsonResp.allsongarray);
          //enoughState=jsonResp.allsongarray;
  
  
  
        })
        .catch((error) => {
          console.log({ error });
        });
      },[]);
  

    console.log("component executed");
   // setAppData([{"audioFile":"./allsongs/beyondtheline/media/bensound-beyondtheline.mp3","avatar":"./allsongs/beyondtheline/media/beyondtheline.jpeg","artist":"Joey","title":"Beyond the line"},{"audioFile":"./allsongs/goinghigher/media/bensound-goinghigher.mp3","avatar":"./allsongs/goinghigher/media/goinghigher.jpeg","artist":"Rizwan Khan","title":"Beyond the line"},{"audioFile":"./allsongs/happyrock/media/bensound-happyrock.mp3","avatar":"./allsongs/happyrock/media/happyrock.jpeg","artist":"Rachel Green","title":"Happy Rock"},{"audioFile":"./allsongs/punky/media/bensound-punky.mp3","avatar":"./allsongs/punky/media/punky.jpeg","artist":"Phoebe","title":"Punky"}])
  return (
    <><div className={more==1?"tabs show":"tabs hide"}>
    <button className="goBack" onClick={()=>setMore(!more)}><FontAwesomeIcon icon={faArrowLeft} /></button>
    
    <span className="access ">All Songs</span>
   
    <div className="ListContainer">
      {
        
        
        appData2.map(element => (
          <button className='ListItem' onClick={()=>{setCurrentTrackIndex(appData2.indexOf(element))}}>
            <img src={`${baseUrl}/${element.avatar}`} />
            <p>{element.title}</p>
            </button>        ))

        }

  
      
    </div>
  </div>
  {
    flag&&
  <AudioPlayer more={more}
      setMore={setMore}
      appData={appData2}
      currentTrackIndex={currentTrackIndex}
      setCurrentTrackIndex={setCurrentTrackIndex}
      />}
</>
  )
}
