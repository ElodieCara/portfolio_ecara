export const Stars = () => {
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

export const Facebook = () => {
  return (
    <>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1000 1000"
        width="30"
        height="30"
        className="icon-FB"
      >
        <defs>
          <linearGradient id="gradient-vertical" x2="1" y2="1">
            <stop offset="0%" stopColor="#00c3ff" />
            <stop offset="50%" stopColor="#77e190" />
            <stop offset="100%" stopColor="#ffff1c" />
          </linearGradient>
        </defs>
        <path
          stroke="url(#gradient-vertical)"
          d="M583.5,341.5h143.4L710.2,500H583.5v459.8H393.2V500h-94.9V341.5h94.9v-95.4 	c0-67.7,16-118.9,48-153.7s84.6-52.2,157.9-52.2h126.7v158.5h-79.2c-14.5,0-26.1,1.2-34.9,3.6c-8.7,2.4-15.1,6.8-19,13.1 	s-6.4,12.7-7.5,19.3s-1.7,15.7-1.7,27.6V341.5L583.5,341.5z"
          className="icon-FB__path"
        />
      </svg>
    </>
  );
};

export const Linkedin = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        fill="#000000"
        width="25"
        height="25"
        version="1.1"
        id="Layer_1"
        viewBox="0 0 310 310"
        xmlSpace="preserve"
        className="icon-In"
      >
        <defs>
          <linearGradient id="gradient-horizontal" x2="1" y2="1">
            <stop offset="0%" stopColor="#a770ef" />
            <stop offset="50%" stopColor="#cf8bf3" />
            <stop offset="100%" stopColor="#fdb99b" />
          </linearGradient>
        </defs>

        <g id="XMLID_801_">
          <path
            stroke="url(#gradient-vertical)"
            id="XMLID_802_"
            d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73   C77.16,101.969,74.922,99.73,72.16,99.73z"
          />
          <path
            stroke="url(#gradient-vertical)"
            id="XMLID_803_"
            d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4   c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"
          />
          <path
            stroke="url(#gradient-vertical)"
            id="XMLID_804_"
            d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599   c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319   c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995   C310,145.43,300.549,94.761,230.454,94.761z"
          />
        </g>
      </svg>
    </>
  );
};
