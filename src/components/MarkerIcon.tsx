const MarkerIcon = ({ text }: { text: string }) => {
  return (
    <svg
      width="40"
      height="50"
      viewBox="0 0 40 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1_2)">
        <path
          d="M19.697 50L15.1515 44.3514H24.5455L19.697 50Z"
          fill="#719402"
        />
        <path d="M0 39H40V44.3514H0V39Z" fill="#719402" />
        <rect width="40" height="39" fill="#A8C32D" />
        <text
          fill="white"
          font-family="sans-serif"
          font-size="32"
          letter-spacing="0em"
        >
          <tspan x="9.78125" y="32.028">
            {text}
          </tspan>
        </text>
      </g>
      <defs>
        <clipPath id="clip0_1_2">
          <rect width="40" height="50" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default MarkerIcon;
