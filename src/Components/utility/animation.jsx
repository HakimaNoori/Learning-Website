export const SlideRight = (delay) => {
    return {
        hidden: {
            opacity: 0,
            x: "-100",
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1,
                delay: delay,
            },
        },
    };
};

export const Slideleft = (delay) => {
  return {
    hidden: {
      opacity: 0,
      x: "100",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: delay,
      },
    },
  };
};