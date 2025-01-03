import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  100% {
    transform: translateX(250%);
  }
`;

export const Skeleton = styled.div<{
  $height?: number;
  $width?: number;
  $variant?: "primary" | "secondary";
}>`
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  height: ${({ $height = 31 }) => $height}px;
  width: ${({ $width = 100 }) => $width}px;
  background-color: ${({ $variant = "primary" }) =>
    $variant === "primary" ? "#f5f4f4" : "#eeeded"};

  &::after {
    animation: ${shimmer} 1.5s infinite;
    background: linear-gradient(
      to right,
      transparent 0%,
      rgba(255, 255, 255, 0.5) 50%,
      transparent 100%
    );
    content: "";
    height: 100%;
    left: -150%;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;
