import twitter_white from '~/../public/icons-white/twitter_white.png';
export default function TwitterIcon({color}: {color?: string}) {
  if (color === 'green') {
    return <></>;
  } else if (color === 'white') {
    return <img src={twitter_white} alt="twitter icon white" />;
  } else {
    return (
      <svg
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 55 55"
        width="36"
        height="36"
      >
        <defs>
          <style>{`.cls-1,.cls-2{stroke-width:0px;}.cls-2{fill:#fff;}`}</style>
        </defs>
        <g id="Twitter">
          <circle className="cls-1" cx="27.5" cy="27.5" r="27.5" />
          <path
            className="cls-2"
            d="M44.69,43.01c-.1-.19-.24-.35-.37-.52-.61-.8-1.21-1.6-1.82-2.41-.87-1.15-1.74-2.31-2.61-3.46-1.26-1.67-2.53-3.34-3.79-5.01-.53-.7-1.06-1.4-1.6-2.11h0c-.6-.8-1.2-1.59-1.81-2.39-.47-.62-.93-1.24-1.4-1.85-.08-.1-.08-.18.02-.27.12-.12.23-.25.34-.37.58-.67,1.17-1.34,1.75-2.01.38-.44.77-.88,1.15-1.32h0c.53-.59,1.05-1.19,1.58-1.78.65-.74,1.29-1.49,1.94-2.23.57-.65,1.14-1.29,1.71-1.94.77-.88,1.54-1.76,2.31-2.65.19-.22.41-.43.57-.68.03-.02.07-.05.06-.09-.02-.05-.07-.03-.11-.03-1.72,0-3.44,0-5.17,0h0c-.06.02-.09.07-.13.11-.32.37-.64.74-.97,1.11-.46.53-.93,1.05-1.39,1.58-.57.65-1.14,1.31-1.71,1.96-.46.53-.93,1.05-1.39,1.58-.58.66-1.16,1.33-1.74,1.99-.37.43-.76.85-1.12,1.29-.28.33-.27.34-.53,0-.92-1.22-1.83-2.44-2.75-3.66-1.24-1.64-2.48-3.27-3.72-4.91-.26-.34-.51-.7-.8-1.02-.06-.06-.14-.03-.21-.03-1.91,0-3.81,0-5.72,0-1.6,0-3.2,0-4.81,0-.06,0-.17-.06-.2.07.37.49.74.97,1.11,1.46h0c.04.06.07.11.12.17.76.99,1.52,1.98,2.27,2.97.61.8,1.22,1.6,1.83,2.4,1.09,1.42,2.18,2.84,3.27,4.26.73.95,1.45,1.9,2.18,2.85.71.93,1.42,1.86,2.13,2.79.05.07.09.11.02.19-.35.4-.7.8-1.05,1.2-.39.45-.78.9-1.17,1.34-.34.39-.68.77-1.02,1.16-.59.68-1.18,1.35-1.78,2.03-.47.53-.93,1.06-1.4,1.59-.56.64-1.12,1.29-1.69,1.94-.48.55-.96,1.09-1.44,1.63-.58.66-1.16,1.33-1.74,1.99-.31.36-.62.71-.92,1.07-.03.03-.09.06-.02.12,1.75,0,3.51,0,5.26,0h0c.06-.02.09-.06.13-.11.37-.42.75-.85,1.12-1.27.57-.65,1.13-1.3,1.7-1.95.47-.53.93-1.06,1.4-1.6.58-.66,1.16-1.33,1.74-1.99.37-.43.75-.86,1.12-1.29-.01-.01-.02-.02-.03-.04h0,0s0,0,0,0c0,.01.01.03.03.04.18-.2.36-.39.53-.59.56-.64,1.12-1.29,1.68-1.94.1-.12.15-.11.25.01.45.6.91,1.19,1.37,1.79.83,1.08,1.65,2.17,2.48,3.25,1,1.31,2.01,2.63,3.01,3.94.45.58.9,1.16,1.36,1.74.04,0,.07,0,.11,0,3.46,0,6.92,0,10.39,0,.02,0,.05,0,.07,0,.14,0,.09-.06.03-.12ZM21,31.6s-.03-.01-.04,0c.01,0,.03,0,.04,0,0,0,0,0,0,0ZM35.59,39.91L16.42,14.92h3.02l19.01,25.04-2.87-.04Z"
          />
        </g>
      </svg>
    );
  }
}
