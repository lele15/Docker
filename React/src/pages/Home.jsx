import React from 'react'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1, delay:0.5}}>Bem vindo ao Home!</motion.div>
  )
}

export default Home