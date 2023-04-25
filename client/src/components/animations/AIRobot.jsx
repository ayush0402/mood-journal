import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import aiRobotAnimation from "../../assets/airobot.json";

const AIRobot = () => {
  const animation = useRef(null);
  useEffect(() => {
    console.log("useEffect called");
    lottie.loadAnimation({
      container: animation.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: aiRobotAnimation,
    });
    return () => lottie.stop();
  }, []);

  return <div style={{ height: 250 }} ref={animation}></div>;
};

export default AIRobot;
