import React from 'react';


export default function AboutPage() {
  return (
    <div> 
    <body id="body">
        
        <header>
            <h1 id="head">
                WELCOME !!
            </h1>
        </header>
        <p id="p">
            My name is Michael Moonan, I am from New Jersey and I am currently a student at Stevens Institute of Technology pursuing my passion in computer science.
            I thoroughly enjoy solving problems and am constantly seeking to learn new things about the field, and everything and anything about computers strikes a certain nerve in my brain. 
            (I probably played too many video games for my own good as a kid). 
            But that takes me into the origin of my GitHub name, my tag for any and every game I played or account I made was 'DaMoonMan' so when I went to sign up for GitHub I was flabbergasted when met with the dreaded: "damoonman" is taken
            So, i settled with Damoonguy.
            also if you are from Jersey it's pork roll <i>not</i> taylor ham 
        </p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/E1ebJZUOtL8?si=9pn2YNGG10V77nDnautoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <audio id="audio"> 
            <source src="src/zelda.mp3"/>
        </audio>
        <div id="mazegame">
            <p>Hidden maze game (play fair :) ) </p>
            <div class="mazeblock m1">
                Start here
            </div>
            <div class="mazeblock m2"></div>
            <div class="mazeblock m3"></div>
            <div class="mazeblock m4"></div>
            <div class="mazeblock m5"></div>
            <div class="mazeblock m6"></div>
            <div class="mazeblock m7"></div>
            <div class="mazeblock m8"></div>
            <div class="mazeblock m9"></div>
            <div id="end" onmouseover="playSound()" onmouseout="stopSound()" class="mazeblock m10">
                Good Job!
            </div>
        </div>
        <script src="javascript/java.js"></script>
    </body>
</div>
  );
}
