const color = "green";

export const StartIcon = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 400 400" fill="none">
      <circle cx="200" cy="200" r="120" fill={color} />
      <circle cx="200" cy="200" r="100" fill="white" />
      <circle cx="200" cy="200" r="70" fill={color} />
    </svg>
  );
};

export const EndIcon = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 400 400" fill="none">
      <path d="M190 352L129.378 149.5L250.622 149.5L190 352Z" fill={color} />
      <circle cx="190" cy="110" r="90" fill={color} />
      <circle cx="190" cy="110" r="45" fill="white" />
    </svg>
  );
};
