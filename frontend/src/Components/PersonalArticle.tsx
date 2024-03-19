import { Link } from "react-router-dom";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";

interface ArticleProps {
  postId: string; // Renamed key to postId
  title: string;
  content: string;
  name: string;
}

function PersonalArticle({ postId, title, content, name }: ArticleProps) {
  return (
    <div className="flex justify-center ">
      <div className="space-y-4 border-2 border-gray-300 p-5 rounded-3xl bg-gray-100">
        <div className="space-y-2">
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Article
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight lg:text-4xl text-gray-700">
            {title}
          </h2>
          <p className="text-gray-500 dark:text-gray-400">{content}</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {" "}
          {/* Make them 2 in a row */}
          <div className="flex items-center space-x-2">
            <img
              src={avatar2}
              alt="Author"
              width="32"
              height="32"
              className="rounded-full"
            />
            <div className="space-y-0.5">
              <h4 className="text-sm font-semibold">{name}</h4>
              <time className="text-sm font-normal">
                November {Math.floor(Math.random() * 31 + 1)}, 2023
              </time>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalArticle;
