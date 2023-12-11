import testIcon from '../../../public/icons/moneys.svg';

interface LinksProps {
  onShill(): void;
  onFud(): void;
}
export default function Links(props: LinksProps) {
  return (
    <div className="flex justify-between">
      <div>
        <div className="flex gap-6">
          <button
            onClick={props.onShill}
            className="btn homepage-btn btn-dark text-emerald pixel-font pointer-events-auto"
          >
            SHILL
          </button>
          <button
            onClick={props.onFud}
            className="btn homepage-btn btn-light pixel-font pointer-events-auto"
          >
            FUD
          </button>
        </div>
        <div className="mt-16">
          <div className="flex gap-8">
            <img
              className="icon pointer-events-auto"
              src={testIcon}
              alt="testIcon"
            />
            <img
              className="icon pointer-events-auto"
              src={testIcon}
              alt="testIcon"
            />
            <img
              className="icon pointer-events-auto"
              src={testIcon}
              alt="testIcon"
            />
            <img
              className="icon pointer-events-auto"
              src={testIcon}
              alt="testIcon"
            />
            <img
              className="icon pointer-events-auto"
              src={testIcon}
              alt="testIcon"
            />
            <img
              className="icon pointer-events-auto"
              src={testIcon}
              alt="testIcon"
            />
          </div>
        </div>
      </div>
      <span className="text-8xl font-bold arrow-down">&darr;</span>
    </div>
  );
}
