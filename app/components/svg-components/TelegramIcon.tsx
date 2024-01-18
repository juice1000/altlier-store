import telegram_white from '~/../public/icons-white/telegram_white.png';
export default function TelegramIcon({color}: {color?: string}) {
  if (color === 'green') {
    return <></>;
  } else if (color === 'white') {
    return <img src={telegram_white} alt="telegram icon white" />;
  }
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
      <g id="Telegram">
        <circle className="cls-1" cx="27.5" cy="27.5" r="27.5" />
        <path
          className="cls-2"
          d="M40.89,16.33c-.11-.31-.23-.39-.43-.46-.43-.16-1.15.08-1.15.08,0,0-25.7,9.24-27.17,10.26-.32.22-.42.35-.47.5-.25.73.54,1.05.54,1.05l6.62,2.16s.25.04.34-.02c1.51-.95,15.16-9.57,15.95-9.86.12-.04.22,0,.19.09-.32,1.11-12.18,11.65-12.18,11.65,0,0-.05.06-.07.12h-.02s-.62,6.56-.62,6.56c0,0-.26,2.01,1.75,0,1.42-1.42,2.79-2.61,3.48-3.19,2.28,1.57,4.73,3.31,5.79,4.22.53.46.98.53,1.34.52,1-.04,1.28-1.14,1.28-1.14,0,0,4.68-18.85,4.84-21.38.02-.25.04-.4.04-.58,0-.24-.02-.47-.06-.58Z"
        />
      </g>
    </svg>
  );
}
