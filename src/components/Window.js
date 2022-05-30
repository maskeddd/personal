export default function Window({ content, title }) {
  return (
    <div className="max-w-lg p-4 bg-Surface0 rounded-3xl mb-12 drop-shadow-lg flex flex-col">
      <div className="mb-4 flex flex-row items-center">
        <div className="w-4 h-4 mr-2 rounded-full bg-Red"></div>
        <div className="w-4 h-4 mr-2 rounded-full bg-Yellow"></div>
        <div className="w-4 h-4 mr-2 rounded-full bg-Green"></div>
        <div className="w-full text-center absolute pr-8">{title}</div>
      </div>
      {content}
    </div>
  );
}
