import React from 'react';
import MaquinaDeEscrever from '../shared/layout/components/MaquinaDeEscrever';
import Typewriter from 'typewriter-effect'
import DescriptionCard from '../shared/layout/DescriptionCard';

function Home() {

    return (
        <>
        <div class="text-2xl  bg-gray-200 justify-center text-center py-10 container mx-auto">
            <h1 class="text-4xl">💻 Creating the future with lines of code</h1>
            <br/>
          <Typewriter
      
           onInit={(typewriter)=> {
      
           typewriter
            
           .typeString("Hello! Welcome to my Portfolio!")
             
           .pauseFor(1000)
           .deleteAll()
           .typeString("I'm Kayque, programmer and web developer")
           .start();
           }}
           />

           
        </div>
        <div class="container">
            <DescriptionCard title="About me" description="I'm Kayque, programmer and web developer" src="https://cdn.discordapp.com/attachments/995485098336067675/1128991976587542618/pr2.jpeg" alt="testing..." />

            

        </div>
        </>
    )
}

export default Home