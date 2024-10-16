import Planet from '../../components/planet/Planet.tsx';
import Hello from '../../components/welcome/Hello.tsx';
import { motion } from 'framer-motion';

function Home() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75, ease: "easeOut" }}>
            <motion.div //not working draggable="true" drag="y" dragConstraints={{ top: 300, bottom: 0 }} dragSnapToOrigin={true} dragPropagation={true}
                initial={{ marginLeft: window.innerWidth > 680 ? "100vw" : 0 }}
                animate={{ marginLeft: 0 }}
                transition={{ duration: 2.2, type: "spring", ease: "easeIn" }}>
                <Planet />
            </motion.div>
            <motion.div
                initial={{ marginTop: 300, opacity: 0 }}
                animate={{ marginTop: 0, opacity: 1 }}
                transition={{ duration: window.innerWidth > 680 ? 0.75 : 0.5, ease: "easeInOut" }}>
                <Hello />
            </motion.div>
        </motion.div>

    );
}

export default Home