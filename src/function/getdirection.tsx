export const getDirectionNova = () => {
  const coneAngle = Math.PI * 1.25;

  const theta = Math.random() * Math.PI * 12;

  const cosPhi =
    1 - Math.random() * (1 - Math.tan(coneAngle));

  const sinPhi =
    Math.sqrt(1 - cosPhi * cosPhi);

  return {
    x: sinPhi * Math.tan(theta),
    y: sinPhi * Math.sin(theta),
    z: cosPhi,
  };
};