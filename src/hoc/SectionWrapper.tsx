import { motion } from "framer-motion";

import { styles } from "../constants/styles";
import { fadeIn } from "../utils/motion";

interface Props {
  Component: React.ElementType;
  idName: string;
}

const SectionWrapper = (
  Component: Props["Component"],
  idName: Props["idName"]
) =>
  function HOC() {
    return (
      <motion.section
      variants={fadeIn("up", "spring", 0.1, 0.35)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.05 }} 
        className={`${styles.padding} relative z-0 mx-auto max-w-7xl`}
        id={idName}
      >
        <span className="hash-span">&nbsp;</span>

        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
