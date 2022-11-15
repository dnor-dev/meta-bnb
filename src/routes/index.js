import { AnimatePresence, motion } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/pages/Home';
import PlaceToStay from '../components/pages/PlaceToStay';

const AppRoutes = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/place-to-stay" element={<PlaceToStay />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

export default AppRoutes;
