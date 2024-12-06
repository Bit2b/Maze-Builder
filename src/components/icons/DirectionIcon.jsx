const cellSize = 24;
const pathWidth = 1.5;
const pathCenter = (cellSize / 2) - (pathWidth / 2);
const pathLength = cellSize - pathCenter;
const color = "#4ADE80";

export const LeftToRight = () => {
  return (
    <svg width={cellSize} height={cellSize} viewBox={`0 0 ${cellSize} ${cellSize}`} fill="none">
      <rect y={pathCenter} width={cellSize} height={pathWidth} fill={color} />
    </svg>
  );
};

export const TopToBottom = () => {
  return (
    <svg width={cellSize} height={cellSize} viewBox={`0 0 ${cellSize} ${cellSize}`} fill="none">
      <rect x={pathCenter} width={pathWidth} height={cellSize} fill={color} />
    </svg>
  );
};

export const RightToBottom = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 400 400" fill="none">
      <path d="M200 400C200 250 250 200 400 200" stroke={color} strokeWidth="25"/>
    </svg>
  );
};

export const LeftToBottom = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 400 400" fill="none">
      <path d="M0 200C150 200 200 250 200 400" stroke={color} strokeWidth="25"/>
    </svg>
  );
};

export const TopToLeft = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 400 400" fill="none">
      <path d="M200 0C200 150 150 200 0 200" stroke={color} strokeWidth="25"/>
    </svg>
  );
};

export const TopToRight = () => {
  return (    
    <svg width="24" height="24" viewBox="0 0 400 400" fill="none">
      <path d="M400 200C250 200 200 150 200 0" stroke={color} strokeWidth="25"/>
    </svg>
  );
};
