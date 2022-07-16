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
              <i title="JavaScript" className="devicon-javascript-plain" />
              <i title="Python" className="devicon-python-plain" />
              <i title="Solidity" className="devicon-solidity-plain" />
              <i title="Markdown" className="devicon-markdown-original" />
              <i title="HTML" className="devicon-html5-plain" />
              <i title="CSS" className="devicon-css3-plain" />
            </div>
          </div>
          <div className="bg-Surface1 p-4 rounded-lg flex flex-col items-center gap-2.5 flex-grow">
            Frameworks
            <div className="flex flex-row text-2xl gap-1.5">
              <i title="Next.js" className="devicon-nextjs-original" />
              <i title="React" className="devicon-react-original" />
              <i title="Express.js" className="devicon-express-original" />
              <i title="Tailwind CSS" className="devicon-tailwindcss-plain" />
            </div>
          </div>
          <div className="bg-Surface1 p-4 rounded-lg flex flex-col items-center gap-2.5 flex-grow">
            Databases
            <div className="flex flex-row text-2xl gap-1.5">
              <i title="MongoDB" className="devicon-mongodb-plain" />
            </div>
          </div>
          <div className="bg-Surface1 p-4 rounded-lg flex flex-col items-center gap-2.5 flex-grow">
            DevOps
            <div className="flex flex-row text-2xl gap-1.5">
              <i title="Git" className="devicon-git-plain" />
              <i title="GitHub" className="devicon-github-original" />
            </div>
          </div>
          <div className="bg-Surface1 p-4 rounded-lg flex flex-col items-center gap-2.5 flex-grow">
            Design
            <div className="flex flex-row text-2xl gap-1.5">
              <i title="Illustrator" className="devicon-illustrator-plain" />
              <i title="Adobe XD" className="devicon-xd-plain" />
            </div>
          </div>
        </div>
      }
    />
  );
}
