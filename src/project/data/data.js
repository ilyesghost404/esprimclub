import React from 'react';
import './data.css';
import Lottie from "lottie-react";
import lottieAnimation from './assets/Animation - 1724000412867.json';
import Card from './cards/card';
import Wokout from './workout/workout';
import { Link } from 'react-router-dom';

export default function Data(){
    return(
        <>
        {/* home section */}
        <section className='ds-home' >
            <div className='ds-home-text' > 
                <h1>WELCOME TO CLUB</h1>
                <h1>DATA SCIENCE</h1>
                <p>Becoming a part of Scidata </p> <p>means joining a journey of discovery and innovation 🧠</p>
                <p> Our club is more than just a place to learn; it's a community 👥</p>
                <Link to="/form"><button className='ds-btn'>JOIN US</button></Link>
            </div>
            <div className="ds-home-logo">
                <Lottie animationData={lottieAnimation} loop={true} className='lottie' />   
            </div>
        </section>
        <h1 className='ds-a-h'>about club</h1>
            <section className='ds-about' data-aos ="zoom-out-up">
                    <div className='ds-a-text'>
                            <h2>officials rolls in club</h2>
                            <p>
                            Club officials in a Data Science Club play pivotal roles in ensuring the smooth operation and success of the organization. 
                            The President provides overall leadership, setting the vision and goals for the club while inspiring members and making strategic decisions. 
                            The Vice President supports the President, often leading specific projects and stepping in when needed, displaying dependability, collaboration,
                             and problem-solving skills. The Secretary manages documentation, communication, and scheduling, requiring strong organizational abilities and attention to detail.
                              The Treasurer oversees the club’s finances, handling budgeting and expenses with financial acumen, transparency, and trustworthiness. 
                              The Project Manager or Coordinator leads specific initiatives, ensuring projects are completed efficiently by utilizing leadership, organizational skills,
                               and adaptability. The Public Relations Officer manages the club’s external communications,
                             including social media and outreach, demonstrating creativity, strong networking abilities, and persuasive communication.
                            </p>
        
                    </div>
                    <div className='ds-a-text'>
                            <h2>discover skills</h2>
                            <p>
                            Discovering skills in a Data Science Club involves a process of exploration, assessment, and engagement. 
                            Members begin by evaluating their current knowledge and abilities, often through self-assessment tools or discussions with peers and mentors. This helps identify strengths and areas for improvement.
                             By attending workshops, participating in projects, and exploring various aspects of data science—such as machine learning, data visualization,
                              or data engineering—members can uncover new interests and potential skills they may not have initially considered. Engaging in hands-on activities, collaborating with others, 
                              and seeking feedback further refine these skills, allowing members to recognize their capabilities and identify areas where they can excel and contribute meaningfully.
                             Through this process of active exploration and continuous learning, members discover and develop the skills essential for success in the field of data science.
                            </p>
                    </div>
                    <div className='ds-a-text'>
                            <h2>upgrade skills</h2>
                            <p>
                            Upgrading skills in a Data Science Club is a dynamic process that combines structured learning with practical experience. Members can enhance their skills by enrolling in online courses,
                             attending workshops, and participating in bootcamps that offer in-depth knowledge and training on specific topics like programming, machine learning, or data visualization. 
                             Hands-on experience is crucial; working on real-world projects, whether through club initiatives or external competitions, allows members to apply what they've learned and deepen their understanding.
                              Collaboration with peers also plays a key role in skill enhancement, as sharing knowledge and working on group projects can accelerate learning and expose members to different approaches and techniques.
                               Regular feedback from mentors or peers helps identify areas for improvement, while staying updated on industry trends and new technologies ensures that members are continuously advancing their skills.
                             This combination of learning, practice, and reflection is essential for upgrading skills and staying competitive in the ever-evolving field of data science.
                            </p>
                    </div>
                
                
            </section>
            <h1 className='off'>officials club</h1>
            <section className='ds-offcials'>
                <Card />
            </section>
                <h1 className='work'>WORKOUT</h1>
            <section className='ds-workout'>
                <div className='text-workout'>
                    <h1>our workout</h1>
                    <p>A Data Science Club's "workout" can blend physical and mental exercises, fostering both well-being and intellectual growth.
                            Physical activities, like group exercises and fitness challenges, promote health and teamwork, with data tracking offering opportunities for analysis. 
                            On the mental side, coding challenges, data analysis sprints,
                            and workshops provide rigorous intellectual workouts, honing members' problem-solving skills and technical expertise.
                            The integration of data science into fitness, such as analyzing personal
                            health data, merges physical fitness with analytical skills, creating a holistic approach to development within the club.
                    </p>
                </div>
                <Wokout />
            </section>
    </>
    );
}