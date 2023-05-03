import React from 'react';
import imageName from "../../assets/Prof-pic.jpg"


const Bio = () => {
    return (
        <div className="w-100 mt-auto text-dark p-4">
            <div className="container text-center mb-5">

                <h2>About Me</h2>
                <img className="left" src={imageName} alt="Headshot" align="left"/>
                <p>
                        My name is Alex Nash, and I'm currently in the UCF coding bootcamp, focusing on full-stack web development. My skillsets include HTML, CSS, JavaScript, and Python. I am
                    also proficient in a range of libraries and technologies, including jquerry, MongoDB, Node.js, React, and more. After the camp concludes, I will be seeking to continue my
                    training in Python as well as getting into C++.
                </p>
                <p>
                        My previous work experience includes multiple years in the food industry, where I worked both front and back of house positions. I also taught music professionally for several years,
                    working with several high-school marching bands in the Orlando area, as well as several independent ensembles. Coming into 2023, I am looking to make a career change and find emplyment
                    within the tech industry.
                </p>
                <p>
                        After the conclusion of the bootcamp, I will be seeking employment in any full-stack, front-end, or back-end positions. Though I am very new to the world of coding, I have a strong work ethic
                    and can pick up new skills quickly. I believe these qualities will make me an asset to any team I am a part of.
                </p>
            </div >
        </div >
    );
};
export default Bio;