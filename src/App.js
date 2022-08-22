import react from 'react';
import { useEffect, useState ,useRef } from "react";

import { AudioPlayer } from './Components/AudioPlayer';
import { AudioList } from './Components/AudioList';

import { genreArray } from './info';




const baseUrl="http://localhost:9000";
function App() {
  const [list, setList] = useState(false);
  const [appData1, setAppData] = useState({});
  const [gennn,setGennn]=useState([]);
  const [audioList, setAudioList] = useState([]);
  const [trackIndex, setTrackIndex] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);
  const[more,setMore]=useState(0);

  
 /* var data = require(`${baseUrl}/music/rock/beyondtheline/info.json`);
  console.log("the data",data);*/
 
  /* useEffect=(()=>{

  fetch(`${baseUrl}/music/rock/beyondtheline/info.json`)
  .then((respose)=>{respose.json})
  .then((data)=>console.log(data));

  },[]);
*/


console.log("genrearray",genreArray);


  //fetch appdata
  /*
  useEffect(() => {
    fetch(`${baseUrl}/song/`)
      .then((res) => res.json())
      .then((jsonResp) => {
        console.log("paimonp",{ jsonResp });
        setAppData(jsonResp.appData);
        console.log("here take this".appData1);
        for (var key in appData1.freelicense) {
          //console.log("blah blah",appData1.freelicense[key]);
          console.log("keys",key);
          //setGennn(oldArray => [...oldArray,key]);
          }

          
      
      })
      .catch((error) => {
        console.log({ error });
      });
  }, []);
*/
  
  

  


  console.log('line 31')   ;
    const audioSrc = `${baseUrl}/allsongs/beyondtheline/media/bensound-beyondtheline.mp3`;//this is the adress
    const imgSrc=`${baseUrl}/music/rock/beyondtheline/media/beyondtheline.jpeg`
   /* const audioSrc = "../public/rock/beyondtheline/media/bensound-beyondtheline.mp3"
    const imgSrc = "../public/rock/beyondtheline/media/bensound-beyondtheline.mp3"
    console.log('audioprintsrc'+audioSrc);*/
  
    //const audioRef = useRef(new Audio(audioSrc)); //importing 
   // const intervalRef = useRef();
  

 /* const onBackButtonPress = () => {
    setList(false);
  };//no need for this*/

  /*const onItemSelect = (tab, type) => {
    if (tab in appData) {
      if (type in appData[tab]) {
        const audioList = appData[tab][type];
        setAudioList(audioList);//audio list is the mini sublist in rock or jazz
      } else {
        //to remove old items from array
        setAudioList([]);
      }
    } else {
      //to remove old items from array
      setAudioList([]);
    }

    setList(true);
  };*/


  /*
  const {
   
  } = currentTrackIndex !== -1 ? audioList[currentTrackIndex] : {};*/

  const obj=`${baseUrl}/music/rock/beyondtheline/info.json`;
  console.log("info file",obj);

  const parsedData = obj;
  const title = parsedData.title;
  const artist = parsedData.artist;
  const avatar = "${baseUrl}/music/rock/beyondtheline/media/beyondtheline.jpeg";
 // const audioFile = "";

 /* const onTrackSelect = (index) => {
    setTrackIndex(index);
  };//pput this in the tabs section ontrackselect


  
 
/*console.log('audioprintFile'+audioFile);
  const audioSrc = `${baseUrl}/${audioFile}`;//this is the adress
  console.log('audioprintsrc'+audioSrc);

  const audioRef = useRef(new Audio(audioSrc)); //importing 
  const intervalRef = useRef();*/

  /*const startTimer = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setTrackProgress(audioRef.current.currentTime);
    }, 1000);
  };

  const onChangeTrackProgress = (e) => {
    setTrackProgress(e.target.value);
    audioRef.current.currentTime = e.target.value;
  };
/*
  const nextTrack = () => {
    if (currentTrackIndex < audioList.length - 1) {
      setCurrentTrackIndex((prevIndex) => prevIndex + 1);
      setTrackProgress(0);
    } else {
      setCurrentTrackIndex(0);
    }
  };

  const prevTrack = () => {
    if (currentTrackIndex) {
      setCurrentTrackIndex((prevIndex) => prevIndex - 1);
    } else {
      setCurrentTrackIndex(audioList.length - 1);
    }
  };

  useEffect(() => {
    console.log({ audioFile });
    clearInterval(intervalRef.current);
    setCurrentTrackIndex(trackIndex);
  }, [trackIndex]);

  useEffect(() => {

    if(currentTrackIndex !== -1){
       // if a music is already playing then we will stop it and assign currently selected one
      audioRef.current.pause();
      // new audio initialize
      audioRef.current = new Audio(audioSrc);
      //playing initialize audio
      audioRef.current.play();
      // set isPlaying true when music started playing
      setIsPlaying(true);
      // start progress of the audio
      startTimer();
    }
   

    //setCurrentTrackIndex(trackIndex);
  }, [currentTrackIndex]);
*/
  /*useEffect(() => {
    // if user press play button then we will play the currently selected music
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      // if user press pause button then we will pause the currently playing music
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    }
  }, [isPlaying]);*/

  //console.log({ trackProgress });
/* <!-- <div class="tabs"> tab,type sdsdasdfsfdgsegtadsfdsfsdfsf
      <span class="access access-active">commercial</span>
      <span class="access">free</span>
      <div class="ListContainer">
        {AudioList.map((AudioListItem)=>(
          
          <div classname="a" onClick={onItemSelect}></div>

        ))}
        
      </div>
    </div> -->*/


  return (

    <>
    not loading
    
    <AudioList 
      more={more}
      setMore={setMore}
      />
    
  
 
  
  </>
    );
}

export default App;
