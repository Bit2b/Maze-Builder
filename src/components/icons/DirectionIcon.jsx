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
    <svg width={cellSize} height={cellSize} viewBox={`0 0 ${cellSize} ${cellSize}`} fill="none">
      <rect x={pathCenter} y={pathCenter} width={pathWidth} height={pathLength} fill={color} />
      <rect x={pathCenter} y={pathCenter} width={pathLength} height={pathWidth} fill={color} />
    </svg>
  );
};

export const LeftToBottom = () => {
  return (
    <svg width={cellSize} height={cellSize} viewBox={`0 0 ${cellSize} ${cellSize}`} fill="none">
      <rect x={pathCenter} y={pathCenter} width={pathWidth} height={pathLength} fill={color} />
      <rect y={pathCenter} width={pathLength} height={pathWidth} fill={color} />
    </svg>
  );
};

export const TopToLeft = () => {
  return (
    <svg width={cellSize} height={cellSize} viewBox={`0 0 ${cellSize} ${cellSize}`} fill="none">
      <rect x={pathCenter} width={pathWidth} height={pathLength} fill={color} />
      <rect y={pathCenter} width={pathLength} height={pathWidth} fill={color} />
    </svg>
  );
};

export const TopToRight = () => {
  return (
    <svg width={cellSize} height={cellSize} viewBox={`0 0 ${cellSize} ${cellSize}`} fill="none">
      <rect x={pathCenter} width={pathWidth} height={pathLength} fill={color} />
      <rect x={pathCenter} y={pathCenter} width={pathLength} height={pathWidth} fill={color} />
    </svg>
  );
};
