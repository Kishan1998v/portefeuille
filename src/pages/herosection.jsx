import React, { useState } from "react";
import SplitText from "../elements/Text/splitText/SplitText";
import "./herosection.css";
import getRandomGreeting from "../helper/randomNo";

const setting = {};
const greetings = [
  { language: "English", greeting: "Hello", pronunciation: "hello" },
  { language: "Spanish", greeting: "Hola", pronunciation: "oh-la" },
  { language: "French", greeting: "Bonjour", pronunciation: "bon-zhoor" },
  { language: "German", greeting: "Hallo", pronunciation: "hah-lo" },
  { language: "Italian", greeting: "Ciao", pronunciation: "chow" },
  { language: "Portuguese", greeting: "Olá", pronunciation: "oh-lah" },
  {
    language: "Chinese (Mandarin)",
    greeting: "你好",
    pronunciation: "nee how",
  },
  {
    language: "Japanese",
    greeting: "こんにちは",
    pronunciation: "kon-nee-chee-wah",
  },
  {
    language: "Korean",
    greeting: "안녕하세요",
    pronunciation: "ann-yeong-ha-seh-yo",
  },
  {
    language: "Russian",
    greeting: "Здравствуйте",
    pronunciation: "zda-rov-stvooy-tye",
  },
  { language: "Arabic", greeting: "مرحبا", pronunciation: "mar-ha-ba" },
  { language: "Hindi", greeting: "नमस्ते", pronunciation: "nuh-mus-tey" },
  { language: "Turkish", greeting: "Merhaba", pronunciation: "mehr-ha-ba" },
  { language: "Swahili", greeting: "Jambo", pronunciation: "jam-bo" },
  { language: "Greek", greeting: "Γειά σας", pronunciation: "yah sas" },
  { language: "Dutch", greeting: "Hallo", pronunciation: "hah-lo" },
];

function HeroSection() {
  let random = getRandomGreeting(greetings.length);
  let [headText, setGreeting] = useState(greetings[random]);
  let [greetingOver,setGreetingOver] = useState({
    't':false,
    'st1':false,
    'st2':false
  });
  return (
    <div className="section-body">
      {(!greetingOver.t && !greetingOver.st1 && !greetingOver.st2) && <div className="welcome-section">
        <SplitText
          text={`${headText.greeting} !`}
          className="welcome-title"
          delay={100}
          duration={1}
          ease="power3.out"
          splitType="words,chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={() => {}}
          fadeOutAfterAnimation = {true}
          fadeOutDelay = {300}               
          fadeOutDuration = {1}              
          onFadeOutComplete ={()=>{setGreetingOver((prev)=>{
            return {
                ...prev,
                't':true
            }
          })}}
        />
        <div className="welcome-subSection">
          <SplitText
            text={`${headText.language}`}
            className="welcome-subTitle"
            delay={200}
            duration={0.6}
            ease="power3.out"
            splitType="words,chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={() => {}}
            fadeOutAfterAnimation = {true}
            fadeOutDelay = {300}               
            fadeOutDuration = {1}              
            onFadeOutComplete ={()=>{setGreetingOver((prev)=>{
            return {
                ...prev,
                'st1':true
            }
          })}}
          />
          <SplitText
            text={`${headText.pronunciation}`}
            className="welcome-subTitle"
            delay={250}
            duration={0.3}
            ease="power3.out"
            splitType="words,chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={() => {}}
            fadeOutAfterAnimation = {true}
            fadeOutDelay = {300}               
            fadeOutDuration = {1}              
            onFadeOutComplete ={()=>{setGreetingOver((prev)=>{
            return {
                ...prev,
                'st2':true
            }
          })}}
          />
        </div>
      </div>}
    </div>
  );
}
export default HeroSection;
