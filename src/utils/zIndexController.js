let controller = { next: () => 0 };

export const registerZIndexController = (nextController) => {
  controller = nextController;
};

export const getNextZIndex = () => controller.next();
