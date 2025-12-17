import BambooCard from "./variation/BambooCard";
import BlogCard from "./variation/BlogCard";
import NoticeCard from "./variation/NoticeCard";
import ProjectCard from "./variation/ProjectCard";
import QnaCard from "./variation/QnaCard";

interface FeedTypeProps {
  feedType: "blog" | "notice" | "bamboo" | "project" | "qna";
}

const FeedCard = ({ feedType }: FeedTypeProps) => {
  if (feedType === "blog") {
    return (
      <div className="flex flex-col gap-2 bg-white shadow px-4 py-4 rounded-xl w-full h-fit">
        <BlogCard />
      </div>
    );
  }

  if (feedType === "notice") {
    return (
      <div className="flex flex-col gap-2 bg-blue-600 shadow px-4 py-4 rounded-xl w-full h-fit">
        <NoticeCard />
      </div>
    );
  }

  if (feedType === "bamboo") {
    return (
      <div className="flex flex-col gap-4 bg-green-100 shadow px-4 py-4 rounded-xl w-full h-fit">
        <BambooCard />
      </div>
    );
  }

  if (feedType === "project") {
    return (
      <div className="flex flex-col gap-0 bg-white shadow px-4 py-4 rounded-xl w-full h-fit">
        <ProjectCard />
      </div>
    );
  }

  if (feedType === "qna") {
    return (
      <div className="flex flex-col gap-0 bg-white shadow px-4 py-4 rounded-xl w-full h-fit">
        <QnaCard />
      </div>
    );
  }
};

export default FeedCard;
