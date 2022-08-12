import React from "react";
import styled from "styled-components";
import MainVideo from "../assets/Walking Girl.mp4";
import { motion } from "framer-motion";
const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;
const DarkOverLay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;

  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.9)`};
`;

const Title = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text};
  div {
    display: flex;
    flex-direction: row;
  }
  h1 {
    font-family: "kaushan script";
    font-size: ${(props) => props.theme.fontBig};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
  }
  h2 {
    font-family: "Sirin Stencil";
    font-size: ${(props) => props.theme.fontlg};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    font-weight: 300;
    text-transform: capitalize;
  }
`;
const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,

    transition: { delayChildren:2,staggerChildren:0.3,ease: "easeInOut" },
  },
};
const item = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};
const CoverVideo = () => {
  return (
    <VideoContainer>
      <DarkOverLay />
      <Title variants={container} initial="hidden" animate="show">
        <div>
          <motion.h1 variants={item} data-scroll data-scroll-delay="0.4" data-scroll-speed="5">
            D
          </motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-delay="0.2" data-scroll-speed="5">
            o
          </motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-delay="0.1" data-scroll-speed="5">
            H
          </motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-delay="0.08" data-scroll-speed="5">
            u
          </motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-delay="0.06" data-scroll-speed="5">
            n
          </motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-delay="0.04" data-scroll-speed="5">
            g
          </motion.h1>
        </div>
        <motion.h2 variants={item}  data-scroll data-scroll-delay="0.04" data-scroll-speed="4">
          Do. Viet. Hung
        </motion.h2>
      </Title>
      <video src={MainVideo} autoPlay muted loop type="video/mp4"></video>
    </VideoContainer>
  );
};

export default CoverVideo;
