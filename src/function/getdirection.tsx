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


export const getDirectionNova1 = () => {
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


export const getDirectionNova11 = () => {
    const t = Math.random();

  const angle =
    t * Math.PI/2 * 1 * 11;

  const radius =
    t * 2;

  return {
    x: Math.cos(angle) * radius,
    y: 2.3,
    z: Math.sin(angle) * radius,
  };
};



export const getDirectionSplash = () => {
  const angle = Math.random() * Math.PI * 2;

  // Horizontalni spread
  const radius = 0.7 + Math.random() * 0.5;

  // Malo čestica ide više gore, većina nisko
  const y =
    Math.random() * 0.8 + 0.15;

  const direction = new THREE.Vector3(
    Math.cos(angle) * radius,
    y,
    Math.sin(angle) * radius
  ).normalize();

  return {
    x: direction.x,
    y: direction.y,
    z: direction.z,
  };
};

