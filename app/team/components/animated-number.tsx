import { motion } from "framer-motion"

interface AnimatedNumberProps {
  value: number
}

export function AnimatedNumber({ value }: AnimatedNumberProps) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {value}
    </motion.span>
  )
}

