interface Props {
  params: {
    id: string;
  };
}

export default function QnADetailPage({ params }: Props) {
  // TODO: params.id를 이용해 데이터 fetch
  const questionId = params.id;

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-4">질문 상세 페이지</h1>
      <p>현재 보고 있는 질문 ID: {questionId}</p>
    </div>
  );
}
