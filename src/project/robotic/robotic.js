import React from 'react';
import './robotic.css';
import Lottie from "lottie-react";
import lottieAnimation from './assets/Animation - 1724172144147.json';
import Card from './cards/card';
import Wokout from './workout/workout';


export default function Robotic(){

    return(
        <>
            {/* home section */}
            <section className='r-home' >
                <div className='r-home-text' > 
                    <h1>WELCOME TO CLUB</h1>
                    <h1>ROBOTIC</h1>
                    <p>"Diving into the future with wires and circuits! 🤖 </p> 
                    <p>Join Club Robotic ESPRIMROBOTS for a tech-filled adventure.Innovate, code, and build with us💛</p>
                    <button className='r-btn'>JOIN US</button>
                </div>
                <div className="r-home-logo">
                    <Lottie animationData={lottieAnimation} loop={true} className='lottie' />
                </div>
            </section>
            <h1 className='r-a-h'>about club</h1>
            <section className='r-about' data-aos ="zoom-out-up">
                    <div className='r-a-text'>
                            <h2>officials rolls in club</h2>
                            <p>
                            In a Robotics Club, the roles of officials are crucial in ensuring smooth operations and fostering a collaborative environment for innovation. 
                            The **Club President** leads the team, setting the overall vision and objectives, coordinating activities, and ensuring that the club adheres to its mission.
                             The **Vice President** supports the president, taking charge of day-to-day operations and stepping in when the president is unavailable.
                              The **Treasurer** is responsible for managing the club’s finances, including budgeting for projects, securing funding, and ensuring financial transparency.
                               The **Secretary** handles administrative tasks, such as documenting meetings, maintaining communication among members, and organizing club records. 
                               The **Project Managers** guide the technical teams, overseeing the progress of robotic projects and ensuring deadlines are met. 
                            Together, these roles create a structured environment that encourages creativity, teamwork, and the achievement of club goals.
                            </p>
        
                    </div>
                    <div className='r-a-text'>
                            <h2>discover skills</h2>
                            <p>
                            In a Robotics Club, discovering and developing skills is a key focus that drives both personal and group growth.
                             Members have the opportunity to explore a wide range of technical and soft skills, often uncovering talents they may not have realized they possessed.
                              Through hands-on experience with robotics projects, they can develop technical expertise in areas such as programming, mechanical design, electronics,
                               and artificial intelligence. Collaboration on team projects fosters problem-solving, critical thinking, and innovation,
                                as members learn to tackle complex challenges together. Beyond technical abilities, the club environment helps members hone leadership,
                                 communication, and project management skills, as they work in diverse roles, from leading a team to presenting ideas. 
                                 This journey of skill discovery not only advances individual capabilities but also prepares members for future endeavors in both academic and
                                  professional settings, making the club a transformative space for growth and learning.
                            </p>
                    </div>
                    <div className='r-a-text'>
                            <h2>upgrade skills</h2>
                            <p>
                            Upgrading skills in a Robotics Club is an ongoing process that empowers members to continuously enhance their knowledge and expertise. 
                            Through a mix of workshops, hands-on projects, and collaboration with peers, members can refine their existing abilities while expanding into new areas of learning.
                             Whether it’s advancing programming proficiency, mastering more complex mechanical designs, or delving deeper into automation and AI,
                              the club offers a structured yet flexible environment for skill enhancement. Working on progressively challenging projects allows members to push their limits,
                               improving their problem-solving techniques and technical dexterity.
                                Mentorship from experienced members and interaction with industry professionals further accelerates skill development, 
                                helping individuals stay current with the latest advancements in robotics. This constant upgrading of skills not only makes members
                             more adept at tackling intricate robotic challenges but also positions them to excel in a rapidly evolving technological landscape.
                            </p>
                    </div>
                
                
            </section>
                <h1 className='off'>officials club</h1>
                <Card />
                <h1 className='work'>WORKOUT</h1>
            <section className='r-workout'>
                <div className='text-workout'>
                    <h1>our workout</h1>
                    <p>A In a Robotics Club, "workouts" can be seen as intense periods of hands-on practice and learning, where members actively engage in projects 
                        to strengthen their skills. These workouts are designed to simulate real-world challenges, requiring members to apply their technical knowledge in a fast-paced,
                         problem-solving environment. Whether it's building and programming a robot from scratch or participating in competitions,
                          these sessions push members to think critically and creatively, while collaborating effectively under pressure. Regular workouts help to reinforce
                           learned concepts, improve team dynamics, and build resilience, all while fostering a spirit of innovation. 
                           By engaging in these challenging exercises, members enhance their ability to troubleshoot, adapt, and execute their ideas with precision,
                         effectively "training" for both future projects and real-world applications in robotics and engineering.
                    </p>
                </div>
                <Wokout />
            </section>
                
            
            
        </>
    );
}