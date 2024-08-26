import React from 'react';
import './card.css';
import { useState } from 'react';
import {motion} from 'framer-motion'
import { AnimatePresence } from 'framer-motion';
import Image from './images/default-avatar-profile-icon-of-social-media-user-vector.png'




export default function Cards(){
    const [open ,setOpen]=useState(null)
    const items = [
        { id: 1, title: 'Card 1' , image : Image },
        { id: 2, title: 'Card 2' , image : Image },
        { id: 3,title: 'Card 3' , image : Image },
        { id: 4,title: 'Card 4' , image : Image },
        
      ];
    return(
        <section className="ds-cards">
            <div className="cards-child">
                {items.map(item => (
                <motion.div className="card" layoutId={item.id} onClick={() => setOpen(item.id)}>
                     <img src={Image} alt={item.title} />
                     <p>tab to see details</p>
                </motion.div>
                ))}
                {open === 1 && (
                    <AnimatePresence>
                        <motion.div layoutId={open} className="card-content1" >
                            <div></div>
                            <div>
                                <img src={Image} alt="prev" />
                                <motion.h2 className="poste" >president</motion.h2>
                                <motion.h3 className="name" >foulen</motion.h3>
                                <motion.p className="email" >foulen@gmail.com</motion.p>
                            </div>
                            <div>
                            <motion.button onClick={() => setOpen(null)} >close</motion.button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                )}
                {open === 2 && (
                    <AnimatePresence>
                        <motion.div layoutId={open} className="card-content2" >
                        <div></div>
                            <div>
                                <img src={Image} alt="prev" />
                                <motion.h2 className="poste" >vice president</motion.h2>
                                <motion.h3 className="name" >foulen</motion.h3>
                                <motion.p className="email" >fffffoulen@gmail.com</motion.p>
                            </div>
                            <div>
                            <motion.button onClick={() => setOpen(null)} >close</motion.button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                )}
                {open === 3 && (
                    <AnimatePresence>
                        <motion.div layoutId={open} className="card-content3" >
                        <div></div>
                            <div>
                                <img src={Image} alt="prev" />
                                <motion.h2 className="poste" >media </motion.h2>
                                <motion.h3 className="name" >foulen</motion.h3>
                                <motion.p className="email" >foulen@gmail.com</motion.p>
                            </div>
                            <div>
                            <motion.button onClick={() => setOpen(null)} >close</motion.button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                )}
                {open === 4 && (
                    <AnimatePresence>
                        <motion.div layoutId={open} className="card-content4" >
                        <div></div>
                            <div>
                                <img src={Image} alt="prev" />
                                <motion.h2 className="poste" >secretaire</motion.h2>
                                <motion.h3 className="name" >foulen</motion.h3>
                                <motion.p className="email" >foulen@gmail.com</motion.p>
                            </div>
                            <div>
                            <motion.button onClick={() => setOpen(null)} >close</motion.button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                )}
                {open === 5 && (
                    <AnimatePresence>
                        <motion.div layoutId={open} className="card-content4" >
                        <div></div>
                            <div>
                                <img src={Image} alt="prev" />
                                <motion.h2 className="poste" >president</motion.h2>
                                <motion.h3 className="name" >foulen</motion.h3>
                                <motion.p className="email" >foulen@gmail.com</motion.p>
                            </div>
                            <div>
                            <motion.button onClick={() => setOpen(null)} >close</motion.button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                )}
            </div>
        </section>

    );
}