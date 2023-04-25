import { Row, Col, Card, Container, Button } from "react-bootstrap";
import { audioClips } from "../../../assets/audios";
import React, { useState, useRef, useEffect } from "react";
import Player from "../../../components/AudioPlayer";
import DashboardLayout from "../../../components/DashboardLayout";

const Meditate = () => {
  const [audios, setAudios] = useState(audioClips);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudio, setCurrentAudio] = useState(audioClips[0]);

  const audioElem = useRef();

  useEffect(() => {
    if (isPlaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  }, [isPlaying]);

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;
    setCurrentAudio({
      ...currentAudio,
      progress: (ct / duration) * 100,
      length: duration,
    });
  };

  const playAudio = (audio) => {
    setIsPlaying(false);
    setCurrentAudio(audio);
    audioElem.current.currentTime = 0;
  };
  return (
    <>
      <DashboardLayout>
        <Container className="meditate">
          <audio
            src={currentAudio.url}
            ref={audioElem}
            onTimeUpdate={onPlaying}
          ></audio>
          <h1 className="text-center mt-5">Meditate</h1>
          <Row>
            <Col className="mt-5 audio-play-btn">
              <Card className="shadow">
                {audioClips.map((audio) => (
                  <div key={audio.id}>
                    <Row>
                      <Col>
                        <h5 className="ms-4 mt-2 mb-2">{audio.title}</h5>
                      </Col>
                      <Col md={3}>
                        <Button
                          className="ms-4 mt-2 mb-2"
                          onClick={() => playAudio(audio)}
                        >
                          Play
                        </Button>
                      </Col>
                    </Row>
                  </div>
                ))}
              </Card>
            </Col>
            <Col className="mt-5">
              <Player
                className="mt-6"
                audioElem={audioElem}
                audios={audios}
                setAudios={setAudios}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                currentAudio={currentAudio}
                setCurrentAudio={setCurrentAudio}
              />
            </Col>
          </Row>
        </Container>
      </DashboardLayout>
    </>
  );
};

export default Meditate;
