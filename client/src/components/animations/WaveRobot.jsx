import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import waveRobotAnimation from "../../assets/waverobot.json";

const WaveRobot = () => {
  const animation = useRef(null);
  useEffect(() => {
    console.log("useEffect called");
    lottie.loadAnimation({
      container: animation.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: waveRobotAnimation,
    });
    return () => lottie.stop();
  }, []);

  return <div style={{ height: 250 }} ref={animation}></div>;
};

export default WaveRobot;
