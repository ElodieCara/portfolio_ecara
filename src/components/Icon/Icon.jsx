const Icon = () => {
  return (
    <div className="icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0"
        y="0"
        viewBox="0 0 443.771 443.772"
        style={{ enableBackground: "new 0 0 512 512" }}
        xmlSpace="preserve"
        className="icon__stars"
      >
        <defs>
          <linearGradient id="gradient-horizontal" x2="1" y2="1">
            <stop offset="0%" stopColor="#a770ef" />
            <stop offset="50%" stopColor="#cf8bf3" />
            <stop offset="100%" stopColor="#fdb99b" />
          </linearGradient>
          <linearGradient id="gradient-vertical" x2="1" y2="1">
            <stop offset="0%" stopColor="#00c3ff" />
            <stop offset="50%" stopColor="#77e190" />
            <stop offset="100%" stopColor="#ffff1c" />
          </linearGradient>
        </defs>
        <g>
          <path
            d="M163.073 3.459C140.557 125.764 122.304 144.016 0 166.532c122.305 22.516 140.557 40.768 163.073 163.073 22.516-122.305 40.768-140.557 163.073-163.073-122.305-22.516-140.558-40.768-163.073-163.073zM340.064 232.896c-14.318 77.781-25.928 89.39-103.708 103.708 77.78 14.319 89.39 25.928 103.708 103.708 14.318-77.78 25.928-89.39 103.707-103.708-77.781-14.318-89.388-25.927-103.707-103.708z"
            fill="url(#gradient-horizontal)"
            data-original="#000000"
            className="icon__stars__path"
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default Icon;
