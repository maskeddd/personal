export default function Window({ content, title }) {
  return (
    <div className="max-w-lg p-4 bg-Surface0 rounded-3xl drop-shadow-lg flex flex-col mx-6">
      <div className="mb-4 flex flex-row items-center">
        <div className="w-4 h-4 mr-2 rounded-full bg-colors-Red"></div>
        <div className="w-4 h-4 mr-2 rounded-full bg-colors-Yellow"></div>
        <div className="w-4 h-4 mr-2 rounded-full bg-colors-Green"></div>
        <div className="w-full text-center absolute pr-8 select-none">
          {title}
        </div>
      </div>
      {content}
    </div>
  );
}
