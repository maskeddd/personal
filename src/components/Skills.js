import Window from "./Window";

export default function Skills() {
  return (
    <Window
      title="Skills"
      content={
        <div className="flex flex-row flex-wrap gap-4 select-none">
          <div className="bg-Surface1 p-4 rounded-lg flex flex-col items-center gap-2.5 flex-grow">
            Languages
            <div className="flex flex-row text-2xl gap-1.5">
              <i title="JavaScript" className="devicon-javascript-plain"></i>
              <i title="Python" className="devicon-python-plain"></i>
              <i title="Solidity" className="devicon-solidity-plain"></i>
              <i title="Markdown" className="devicon-markdown-original"></i>
              <i title="HTML" className="devicon-html5-plain"></i>
              <i title="CSS" className="devicon-css3-plain"></i>
            </div>
          </div>
          <div className="bg-Surface1 p-4 rounded-lg flex flex-col items-center gap-2.5 flex-grow">
            Frameworks
            <div className="flex flex-row text-2xl gap-1.5">
              <i title="Next.js" className="devicon-nextjs-original"></i>
              <i title="React" className="devicon-react-original"></i>
              <i title="Express.js" className="devicon-express-original"></i>
              <i title="Tailwind CSS" className="devicon-tailwindcss-plain"></i>
            </div>
          </div>
          <div className="bg-Surface1 p-4 rounded-lg flex flex-col items-center gap-2.5 flex-grow">
            Databases
            <div className="flex flex-row text-2xl gap-1.5">
              <i title="MongoDB" className="devicon-mongodb-plain"></i>
            </div>
          </div>
          <div className="bg-Surface1 p-4 rounded-lg flex flex-col items-center gap-2.5 flex-grow">
            DevOps
            <div className="flex flex-row text-2xl gap-1.5">
              <i title="Git" className="devicon-git-plain"></i>
              <i title="GitHub" className="devicon-github-original"></i>
            </div>
          </div>
          <div className="bg-Surface1 p-4 rounded-lg flex flex-col items-center gap-2.5 flex-grow">
            Design
            <div className="flex flex-row text-2xl gap-1.5">
              <i title="Illustrator" className="devicon-illustrator-plain"></i>
              <i title="Adobe XD" className="devicon-xd-plain"></i>
            </div>
          </div>
        </div>
      }
    />
  );
}
