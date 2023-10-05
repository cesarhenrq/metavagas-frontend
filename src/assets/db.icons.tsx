function Magnifier({ fill, width, height, onClick }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
      onClick={onClick}
    >
      <g clipPath="url(#clip0_2503_226)">
        <path
          fill={`var(--${fill})`}
          d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0111 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zm-2.006-.742A6.977 6.977 0 0018 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 004.875-1.975l.15-.15z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_2503_226">
          <path fill="#fff" d="M0 0H24V24H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

function Location({ fill, width, height, onClick, active }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
      onClick={onClick}
      className="location-icon"
      data-cy="location-icon"
    >
      <g clipPath="url(#clip0_2503_222)">
        <path
          data-cy="location-icon-path"
          fill={active ? 'var(--yellow)' : `var(--${fill})`}
          d="M12 20.9l4.95-4.95a7 7 0 10-9.9 0L12 20.9zm0 2.828l-6.364-6.364a9 9 0 1112.728 0L12 23.728zM12 13a2 2 0 100-4 2 2 0 000 4zm0 2a4 4 0 110-8 4 4 0 010 8z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_2503_222">
          <path fill="#fff" d="M0 0H24V24H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

function Computer({ fill, width, height, active }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 16 16"
      className="computer-icon"
      data-cy="computer-icon"
    >
      <g clipPath="url(#clip0_3050_1241)">
        <path
          data-cy="computer-icon-path"
          fill={active ? 'var(--yellow)' : `var(--${fill})`}
          d="M2.667 10.667h10.666V3.333H2.667v7.334zm6 1.333v1.333h2.666v1.334H4.667v-1.334h2.666V12H1.995a.664.664 0 01-.662-.671V2.67c0-.37.304-.671.662-.671h12.01c.366 0 .662.3.662.671v8.658c0 .37-.304.671-.662.671H8.667z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_3050_1241">
          <path fill="#fff" d="M0 0H16V16H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

function Suitcase({ fill, width, height, active }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
      className="suitcase-icon"
      data-cy="suitcase-icon"
    >
      <g clipPath="url(#clip0_2516_328)">
        <path
          data-cy="suitcase-icon-path"
          fill={active ? 'var(--yellow)' : `var(--${fill})`}
          d="M7 5V2a1 1 0 011-1h8a1 1 0 011 1v3h4a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1h4zm2 8H4v6h16v-6h-5v3H9v-3zm11-6H4v4h5V9h6v2h5V7zm-9 4v3h2v-3h-2zM9 3v2h6V3H9z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_2516_328">
          <path fill="#fff" d="M0 0H24V24H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

function Person({ fill, width, height }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
      data-cy="person-icon"
    >
      <g clipPath="url(#clip0_2518_751)">
        <path
          fill={`var(--${fill})`}
          d="M14 14.252v2.09A6 6 0 006 22l-2-.001a8 8 0 0110-7.748v.001zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm6 6v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_2518_751">
          <path fill="#fff" d="M0 0H24V24H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

function Telephone({ fill, width, height }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 17 16"
      data-cy="phone-icon"
    >
      <g clipPath="url(#clip0_3050_1118)">
        <path
          fill={`var(--${fill})`}
          d="M6.765 7.121A7.037 7.037 0 009.4 9.756l.59-.825a.667.667 0 01.862-.198 7.614 7.614 0 003.055.91.667.667 0 01.614.664v2.975a.666.666 0 01-.599.663c-.353.037-.709.055-1.068.055C7.148 14 2.521 9.373 2.521 3.667c0-.359.018-.715.055-1.068A.667.667 0 013.239 2h2.975a.667.667 0 01.664.614 7.615 7.615 0 00.91 3.055.667.667 0 01-.198.863l-.825.59zm-1.681-.438L6.35 5.78a8.94 8.94 0 01-.73-2.446H3.86a8.999 8.999 0 009.327 9.327v-1.758a8.943 8.943 0 01-2.446-.731l-.904 1.266a8.29 8.29 0 01-1.059-.5l-.039-.022a8.37 8.37 0 01-3.134-3.134l-.022-.039a8.296 8.296 0 01-.5-1.059z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_3050_1118">
          <path
            fill="#fff"
            d="M0 0H16V16H0z"
            transform="translate(.521)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

function Message({ fill, width, height }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 17 16"
      data-cy="email-icon"
    >
      <g clipPath="url(#clip0_3050_1102)">
        <path
          fill={`var(--${fill})`}
          d="M2.521 2h12a.667.667 0 01.667.667v10.666a.666.666 0 01-.667.667h-12a.666.666 0 01-.667-.667V2.667A.667.667 0 012.521 2zm11.334 2.825L8.569 9.56 3.188 4.81v7.856h10.666V4.825zM3.527 3.333l5.034 4.442 4.96-4.442H3.529z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_3050_1102">
          <path
            fill="#fff"
            d="M0 0H16V16H0z"
            transform="translate(.521)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

function LocationFooter({ fill, width, height }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 17 16"
    >
      <g clipPath="url(#clip0_3050_1110)">
        <path
          fill={`var(--${fill})`}
          d="M8.521 15.819l-4.243-4.243a6 6 0 118.486 0L8.52 15.818zm3.3-5.186a4.666 4.666 0 10-6.6 0l3.3 3.3 3.3-3.3zm-3.3-1.966a1.333 1.333 0 110-2.667 1.333 1.333 0 010 2.667z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_3050_1110">
          <path
            fill="#fff"
            d="M0 0H16V16H0z"
            transform="translate(.521)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

function Coin({ fill, width, height }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        fill={`var(--${fill})`}
        d="M8 14.667A6.666 6.666 0 118 1.334a6.666 6.666 0 010 13.333zm0-1.334A5.333 5.333 0 108 2.666a5.333 5.333 0 000 10.667zm-2.333-4h3.666a.333.333 0 100-.666H6.667a1.667 1.667 0 010-3.334h.666V4h1.334v1.333h1.666v1.334H6.667a.333.333 0 100 .666h2.666a1.667 1.667 0 010 3.334h-.666V12H7.333v-1.333H5.667V9.333z"
      ></path>
    </svg>
  );
}

function Look({ fill, width, height }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <g clipPath="url(#clip0_2535_2193)">
        <path
          fill={`var(--${fill})`}
          d="M12 3c5.392 0 9.878 3.88 10.82 9-.94 5.12-5.428 9-10.82 9s-9.878-3.88-10.819-9c.94-5.12 5.427-9 10.82-9zm0 16a9.005 9.005 0 008.777-7 9.005 9.005 0 00-17.554 0A9.005 9.005 0 0012 19zm0-2.5a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm0-2a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_2535_2193">
          <path fill="#fff" d="M0 0H24V24H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

function Save({ fill, width, height }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <g clipPath="url(#clip0_2629_3383)">
        <path
          fill={`var(--${fill})`}
          d="M5 2h14a1 1 0 011 1v19.143a.5.5 0 01-.766.424L12 18.03l-7.234 4.536A.5.5 0 014 22.143V3a1 1 0 011-1zm13 2H6v15.432l6-3.761 6 3.761V4z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_2629_3383">
          <path fill="#fff" d="M0 0H24V24H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

function Arrow({ fill, width, height, onClick }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 20 20"
      onClick={onClick}
      className="icon"
      data-cy="arrow"
    >
      <g clipPath="url(#clip0_3054_218)">
        <path
          fill={`var(--${fill})`}
          d="M13.476 9.167l-4.47-4.47 1.179-1.179L16.666 10l-6.481 6.482-1.179-1.179 4.47-4.47H3.333V9.167h10.143z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_3054_218">
          <path fill="#fff" d="M0 0H20V20H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

function DownArrow({ fill, width, height }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        fill={`var(--${fill})`}
        d="M8 8.781l3.3-3.3.943.943L8 10.667 3.758 6.424l.942-.943 3.3 3.3z"
      ></path>
    </svg>
  );
}

function SideArrow({ fill, width, height }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 18 18"
    >
      <path
        fill={`var(--${fill})`}
        d="M9.879 9L6.167 5.287l1.06-1.06L12 9l-4.773 4.773-1.06-1.06L9.879 9z"
      ></path>
    </svg>
  );
}

export {
  Magnifier,
  Location,
  Computer,
  Suitcase,
  Person,
  Telephone,
  Message,
  LocationFooter,
  Coin,
  Look,
  Save,
  Arrow,
  DownArrow,
  SideArrow,
};
