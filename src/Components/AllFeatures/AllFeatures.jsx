import React from 'react'
import './allFeatures.scss'
import { motion} from "framer-motion";

const AllFeatures = () => {
  
  return (
    <motion.div
    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, ease: "backInOut", delay: 0 }}
    className='AllFeatures'>
      <p>
        <span>• Integrated with all website’s builder</span>
        allowing merchants to manage their store and app from one app.
      </p>
      <p>
        <span className='left'>• Customer Reviews</span>
        Our app allows merchants to easily collect and display customer reviews, increasing trust and social proof for their store.
      </p>
      <p>
        <span>• All – in – one</span>
        you can find all apps in one place without searching too much.
      </p>
    </motion.div>
  )
}

export default AllFeatures