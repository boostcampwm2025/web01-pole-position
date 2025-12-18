const BambooHeader = () => {
  return (
    <div className="flex flex-row justify-between w-full">
      <span className="text-gray-500">
        익명으로 자유롭게 이야기를 나눠보세요
      </span>
      <button className="bg-blue-700 px-4 py-2 rounded-xl text-white cursor-pointer">
        새 글 작성
      </button>
    </div>
  );
};

export default BambooHeader;
