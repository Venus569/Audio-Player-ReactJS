import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import RepeatIcon from '@mui/icons-material/Repeat';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import { useEffect, useState ,useRef } from "react";
import { AudioList } from './AudioList';
import { green } from '@mui/material/colors';


const baseUrl="http://localhost:9000";
export const AudioPlayer = ({
  more,setMore,appData,currentTrackIndex,setCurrentTrackIndex
}) => {
  console.log("audioplayer starting",appData);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);
  const [volume, setVolume] = useState(0);

 // const[more,setMore]=useState(0);
  //const[currentTrackIndex,setCurrentTrackIndex]=useState(0);
 //console.log("setmore",setMore);



  // ssd;lkfkjplkg;lsdgdgs
 // const [appData, setAppData] = useState({});
  

 /* useEffect(() => {
    console.log("useeffect");
    fetch(`http://localhost:9000/song`)
      .then((jsonResp) => {
        console.log( jsonResp );
        console.log("bro plz",jsonResp.allsongarray);
        setAppData(jsonResp.allsongarray);
        console.log("hassssss",appData);
        audioSrc=`${baseUrl}/${appData[currentTrackIndex].audioFile}`
      
        // return("bruh");



      })
     /* .then((resp)=>{
        console.log("hablass",resp);
        console.log("hablassssss",appData);
        
      })
      .catch((error) => {
        console.log({ error });
      });
  }, []);*/

 // console.log("blah blah blah")
  //console.log("app data?",appData);

  //sdbnkjsnfkjnsjlfnlsdfl


  
  console.log("track index ",currentTrackIndex);
 



  const onPlayPause=() =>{setIsPlaying(!isPlaying)};

  
  //    const audioSrc = `${baseUrl}/allsongs/beyondtheline/media/bensound-beyondtheline.mp3`;//this is the adress
 
  var audioSrc=`${baseUrl}/${appData[currentTrackIndex].audioFile}`
  var imgSrc=`${baseUrl}/${appData[currentTrackIndex].avatar}`
 //var audioSrc=`${baseUrl}/allsongs/beyondtheline/media/bensound-beyondtheline.mp3`
  var audioElement = new Audio(audioSrc);
  const audioRef = useRef(audioElement); //importing 

  const intervalRef = useRef();
  const duration=audioRef.current.duration;
  console.log('gdfgdg',duration);

  const playbutton=()=>{ 
    console.log("playbutton clicked")
    audioRef.current.play();
  }
 

  const currentProgress = (trackProgress / duration) * 100;
  const trackProgressStyling = `linear-gradient(to right, #ffffff ${currentProgress}%, grey ${currentProgress}%)`;
  console.log(audioSrc);
  


  /*const nextTrack = () => {
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
  };*/

  const startTimer = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setTrackProgress(audioRef.current.currentTime);
    }, 1000);
  };

  useEffect(() => {
    // if user press play button then we will play the currently selected music
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      // if user press pause button then we will pause the currently playing music
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    }
  }, [isPlaying]);




  const onChangeTrackProgress = (e) => {
    setTrackProgress(e.target.value);
    audioRef.current.currentTime = e.target.value;
  };

  const onChangeVolume=(e)=>{
    setVolume(e.target.value);
    audioRef.current.volume=volume*0.1;
    

  }

  

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
    }}, [currentTrackIndex]);




  return (
    <>
     <div className="wrapper">
      <div className="top-bar">
        
        <span>{appData[currentTrackIndex].title}</span>
        
      
      <input className='vol-bar'
          type="range"
          min={"0"}
          step={"1"}
          max={10}
          value={volume}
          onChange={onChangeVolume}
          style={{ background: trackProgressStyling }}
        />
        </div>

      <div class="vol-shade"></div>
       
        
      <div className="img-area">
        <img src={imgSrc} alt="no thing found"></img>
      </div>
      <div className="song-details">
       
        
      </div>

      
    

      <div className="progress-area">
      <div className="audio-player-progress">
        <input className='prog-bar'
          type="range"
          min={"0"}
          step={"1"}
          max={duration ? duration : 0}
          value={trackProgress}
          onChange={onChangeTrackProgress}
          style={{ background: trackProgressStyling }}
        />


      
      </div>
        <div className="song-timer">
          <span className="current-time">0:00</span>
          <span className="max-duration">{`${Math.floor(duration/60)} minute ${Math.floor(duration%60)}seconds`}</span>
        </div>
      </div>
      <div className="controls">
        <RepeatIcon id="repeat-plist" className="material-icons" title="Playlist looped"/>
        <SkipPreviousIcon id="prev" className="material-icons"  onClick={()=>{setCurrentTrackIndex(currentTrackIndex-1)}} />
        
        {isPlaying?<><PauseIcon className="material-icons play play-pause"  onClick={onPlayPause}>play</PauseIcon></>:<><PlayArrowIcon className="material-icons play play-pause"  onClick={onPlayPause}>play</PlayArrowIcon></>}
        
        
        <SkipNextIcon id="next" className="material-icons" onClick={()=>{setCurrentTrackIndex(currentTrackIndex+1)}} >skip_next</SkipNextIcon>
        <QueueMusicIcon id="more-music" className="material-icons" onClick={()=>{more==0?setMore(1):setMore(0)}}  >queue_music</QueueMusicIcon>
      </div>

      </div>

     
    </>
  )
}
