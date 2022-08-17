import gsap from "gsap";
import React, { useLayoutEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import styled from "styled-components";
import { useRef } from "react";
import { motion } from "framer-motion";

import img1 from '../assets/Images/1.webp'
import img2 from '../assets/Images/2.webp'
import img3 from '../assets/Images/3.webp'
import img4 from '../assets/Images/4.webp'
import img5 from '../assets/Images/5.webp'
import img6 from '../assets/Images/6.webp'
import img7 from '../assets/Images/7.webp'
import img8 from '../assets/Images/8.webp'
const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
`;
const Tit1e = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "kaushan script";
  color: ${(props) => props.theme.text};
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};
  font-weight: 300;
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 6;
`;
const Left = styled.div`
  width: 35%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  min-height: 100vh;
  z-index: 5;

  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: ${(props) => props.theme.font1g};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
  }
`;

const Right = styled.div`
  position: absolute;
  left: 35%;
  padding-left: 30%;
  min-height: 100vh;

  background-color: ${(props) => props.theme.grey};
  /* width: 65%; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  h1 {
    width: 5rem;
    margin: 0 2rem;
  }
`;

const Item = styled(motion.div)`
    width: 20rem;
    margin-right: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img{
        width: 100%;
        height: auto;
        cursor: pointer;
    }
    h1{
        display: inline-block;
        width: fit-content;
        font-weight: 500;
        text-align: center;
        cursor: pointer;
    }
`
const Product = ({img, title = ''})=>{
    return(

        <Item
            initial={{filter:'grayscale(100%)'}}
            whileInView={{filter:'grayscale(0%)'}}
            transition={{duration:0.5}}
            viewport={{once:false,amount:'all'}}
        >
            <img src={img} alt={title} />
            <h1>{title}</h1>
        </Item>
    )
}
const Shop = () => {
    gsap.registerPlugin(ScrollTrigger);

    const ref = useRef(null);
    const horizontalRef = useRef(null);
  
    useLayoutEffect(() => {
      let element = ref.current;
      let scrollingElement = horizontalRef.current;
  
      let pinWrapWidth = scrollingElement.offsetWidth;
  
      let t1 = gsap.timeline();
  
      setTimeout(() => {
        t1.to(element, {
          scrollTrigger: {
            trigger: element,
            start: "top top",
            end: pinWrapWidth,
            scroller: ".App", // locomotive element
            scrub: true,
            pin: true,
            // markers:true,
          },
          // we have to increase scrolling height of this section same as the scrolling element width
          height: `${scrollingElement.scrollWidth}px`,
          ease: "none,",
        });
  
        // Horizontal Scrolling
        t1.to(scrollingElement, {
          scrollTrigger: {
            trigger: scrollingElement,
            start: "top top",
            end: pinWrapWidth,
            scroller: ".App", // locomotive element
            scrub: true,
  
            // markers:true,
          },
          // we have to increase scrolling height of this section same as the scrolling element width
          x: -pinWrapWidth,
          ease: "none,",
        });
        ScrollTrigger.refresh();
      }, 1000);
  
      return () => {
        // Let's clear instances
        t1.kill();
        ScrollTrigger.kill();
      };
    }, []);
  return (
    <Section ref={ref}>
      <Tit1e data-scroll data-scroll-speed="-1">
        New Arrivals
      </Tit1e>
      <Left>
        <p>
          The brand new collection is current1y being developed in USA. We
          create our products using best quality material, including the use of
          some of the pure fabrics to make our products. All products are made
          using the best materials, from the finest cotton to the finest
          fabrics.
          <br /> <br />
          We have lots of different clothing options like shoes, jackets and
          dresses. Not only clothes but we also provide unique Jewellery as
          well. It is great for us to carry our new clothes all around the
          country and look different.
        </p>
      </Left>
      <Right ref={horizontalRef}>
        <Product img={img1} title="xyz"/>
        <Product img={img2} title="xyz"/>
        <Product img={img3} title="xyz"/>
        <Product img={img4} title="xyz"/>
        <Product img={img5} title="xyz"/>
        <Product img={img6} title="xyz"/>
        <Product img={img7} title="xyz"/>
        <Product img={img8} title="xyz"/>
      </Right>
    </Section>
  );
};

export default Shop;