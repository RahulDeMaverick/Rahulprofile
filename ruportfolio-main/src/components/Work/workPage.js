import React from 'react'
import Fade from "react-reveal/Fade"
import neu from "../../images/neu.jpg"
import tcs from "../../images/tcs.jpeg"

const WorkPage = () => {
    return (
        <div>
        <Fade bottom>
          <div className="max-w-7xl mx-auto mt-10 flex text-white xxs:flex-col sm:flex-row">
            <div className="h-full w-full object-none overflow-hidden rounded-xl">
              <img src={tcs}></img>
            </div>
            <div className="m-5">
              <h2 className="text-sm opacity-50">March 2018 - August 2021</h2>
              <h1 className="text-md font-bold font-poppins xxs:text-lg sm:text-4xl">
                Tata Consultancy Services
              </h1>
              <h1 className="text-sm font-poppins xxs:text-sm sm:text-3xl">
              Software Developer
              </h1>
              <ol className="text-lg mt-4 opacity-50 xxs:text-sm sm:text-lg">

               <li>Developed and maintained microservices in Java, Groovy, and Node JS consumed by multiple systems following design patterns and Service-oriented architecture</li>
               <li>Created a new rule engine that reduced the order kick-out rate during streaming from source systems. By successful implementation of the project, it reduced the cost by 120k USD per year</li>
            

              </ol>
              
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <div className="max-w-7xl mx-auto mt-10 flex text-white xxs:flex-col sm:flex-row">
            <div className="h-full w-full object-none overflow-hidden rounded-xl">
              <img src={neu}></img>
            </div>
            <div className="m-5">
              <h2 className="text-sm opacity-50">October 2021 - Currently Working</h2>
              <h1 className="text-md font-bold font-poppins xxs:text-lg sm:text-4xl">
                Northeastern University
              </h1>
              <h1 className="text-sm font-poppins xxs:text-sm sm:text-3xl">
                Library Assistant
              </h1>
              <ol className="text-lg mt-4 opacity-50 xxs:text-sm sm:text-lg">

<li>Developed and maintained microservices in Java, Groovy, and Node JS consumed by multiple systems following design patterns and Service-oriented architecture</li>
<li>Created a new rule engine that reduced the order kick-out rate during streaming from source systems. By successful implementation of the project, it reduced the cost by 120k USD per year</li>


</ol>
              
            </div>
          </div>
        </Fade>
      </div>
    )
}

export default WorkPage