import Window from "./Window";
import a from "devicon";

export default function Skills() {
  return (
    <Window
      title="Skills"
      content={
        <div className="flex flex-row flex-wrap gap-4">
          <div className="bg-Surface1 p-4 rounded-lg flex flex-col items-center gap-2.5 flex-grow">
            Languages
            <div className="flex flex-row text-2xl gap-1.5">
              <i title="JavaScript" class="devicon-javascript-plain"></i>
              <i title="Python" class="devicon-python-plain"></i>
              <i title="Solidity" class="devicon-solidity-plain"></i>
              <i title="Markdown" class="devicon-markdown-original"></i>
              <i title="HTML" class="devicon-html5-plain"></i>
              <i title="CSS" class="devicon-css3-plain"></i>
            </div>
          </div>
          <div className="bg-Surface1 p-4 rounded-lg flex flex-col items-center gap-2.5 flex-grow">
            Frameworks
            <div className="flex flex-row text-2xl gap-1.5">
              <i title="Next.js" class="devicon-nextjs-original"></i>
              <i title="React" class="devicon-react-original"></i>
              <i title="Express.js" class="devicon-express-original"></i>
              <i title="Tailwind CSS" class="devicon-tailwindcss-plain"></i>
            </div>
          </div>
          <div className="bg-Surface1 p-4 rounded-lg flex flex-col items-center gap-2.5 flex-grow">
            Databases
            <div className="flex flex-row text-2xl gap-1.5">
              <i title="MongoDB" class="devicon-mongodb-plain"></i>
            </div>
          </div>
          <div className="bg-Surface1 p-4 rounded-lg flex flex-col items-center gap-2.5 flex-grow">
            DevOps
            <div className="flex flex-row text-2xl gap-1.5">
              <i title="Git" class="devicon-git-plain"></i>
              <i title="GitHub" class="devicon-github-original"></i>
            </div>
          </div>
          <div className="bg-Surface1 p-4 rounded-lg flex flex-col items-center gap-2.5 flex-grow">
            Design
            <div className="flex flex-row text-2xl gap-1.5">
              <i title="Illustrator" class="devicon-illustrator-plain"></i>
              <i title="Adobe XD" class="devicon-xd-plain"></i>
            </div>
          </div>
        </div>
      }
    />
  );
}
