import { gsap } from 'gsap';
import { getNextZIndex } from '@/utils/zIndexController';

const savedPositions = new Map();

const defaultFromVars = { opacity: 0.01, scale: 0.95 };
const defaultToVars = { x: 0, y: 0, duration: 0.3, scale: 1, opacity: 1 };

const resolveElement = (target) =>
  typeof target === 'string' ? document.querySelector(target) : target;

export const saveCardPosition = (target) => {
  const element = resolveElement(target);
  if (!element || !element.id) return;

  const { transform } = window.getComputedStyle(element);
  let x = 0;
  let y = 0;
  if (transform && transform !== 'none') {
    const matrix = new DOMMatrixReadOnly(transform);
    x = matrix.m41;
    y = matrix.m42;
  }

  savedPositions.set(element.id, { x, y });
};

export const getSavedCardPosition = (target) => {
  const element = resolveElement(target);
  if (!element) return null;
  return savedPositions.get(element.id) || null;
};

export const resetCardPosition = (target) => {
  const element = resolveElement(target);
  if (!element || !element.id) return;
  savedPositions.set(element.id, { x: 0, y: 0 });
};

export const minimizeCard = (target) => {
  saveCardPosition(target);
  gsap.to(target, {
    scale: 0.1,
    x: -300,
    y: 1000,
    duration: 0.6,
  });
};

export const openCardTween = (selector, fromVars, toVars) => {
  const savedPosition = getSavedCardPosition(selector);
  gsap.fromTo(
    selector,
    fromVars,
    savedPosition ? { ...toVars, ...savedPosition } : toVars
  );
};

export const openCard = (selector, options = {}) => {
  const { from = defaultFromVars, to = defaultToVars } = options;
  const nextZIndex = getNextZIndex();

  openCardTween(selector, from, {
    ...to,
    position: 'absolute',
    display: 'flex',
    zIndex: nextZIndex,
  });
};
