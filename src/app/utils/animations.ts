export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
}

export const float = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 6,
      ease: 'easeInOut',
      repeat: Infinity
    }
  }
}

export const slideInFromRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
}
