import './App.css';

// Custom made components
import NavBar from './components/NavBar';
import Form from './components/Form';

// Framer Motion modules
import { motion } from 'framer-motion';
// Variants
import { fadeInUp, fadeInSlide } from '../src/variants/variants';

const App = () => {
  return (
    <>
      <section >
        <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }} variants={fadeInUp}>
          <NavBar />
        </motion.div>
        <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }} variants={fadeInSlide}>
        <div className="container pt-5">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <Form />
          </div>
        </div>
          </div>
          </motion.div>
      </section>
    </>
  );
}

export default App;
