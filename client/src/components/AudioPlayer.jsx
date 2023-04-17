import React,{useRef} from 'react'
import { BsFillPlayCircleFill, BsFillPauseCircleFill, BsFillSkipStartCircleFill, BsFillSkipEndCircleFill } from 'react-icons/bs';
import { Container } from 'react-bootstrap';


const Player = ( {audioElem, isPlaying, setIsPlaying, currentAudio, setCurrentAudio, audios}) => {
    
    const clickRef = useRef();

    const PlayPause = () => {
        setIsPlaying(!isPlaying);
    }

    const checkWidth = (e)=> {
        let width = clickRef.current.clientWidth;
        const offset = e.nativeEvent.offsetX;
        const divprogress= offset / width * 100;
        audioElem.current.currentTime = divprogress / 100 * currentAudio.length;
    }
    const skipBack = ()=>{
        const index = audios.findIndex(x=>x.id===currentAudio.id);
        if(index===0){
            setCurrentAudio(audios[audios.length-1]);
        }
        else{
            setCurrentAudio(audios[index-1]);
        }
        setIsPlaying(false);

        audioElem.current.currentTime=0;
    }
    const skipToNext = ()=>{
        const index = audios.findIndex(x=>x.id===currentAudio.id);

        if(index===(audios.length-1)){
            setCurrentAudio(audios[0]);
        }
        else{
            setCurrentAudio(audios[index+1]);
        }
        setIsPlaying(false);

        audioElem.current.currentTime=0;
    }
    return (
        <>
            <Container className='player-container'>
                <div className="title">
                    <p>{currentAudio.title}</p>
                </div>
                <div className="navigation">
                    <div className="navigation-wrapper" onClick={checkWidth} ref={clickRef}>
                        <div className="seek-bar" style={{width: `${currentAudio.progress +"%"}`}}></div>
                    </div>
                </div>
                <div className="controls">
                    <BsFillSkipStartCircleFill className='btn-action' onClick={skipBack}/>
                    {isPlaying ? <BsFillPauseCircleFill className='btn-action pp' onClick={PlayPause}/> : <BsFillPlayCircleFill className='btn-action pp' onClick={PlayPause}/>}
                    <BsFillSkipEndCircleFill className='btn-action' onClick={skipToNext}/>
                </div>
            </Container>
        </>
    )
}

export default Player
