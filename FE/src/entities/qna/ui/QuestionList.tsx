import { MOCK_QUESTIONS } from '../config/mockData';
import { QuestionCard } from './QuestionCard';

export default function QuestionList() {
  return (
    <div className="flex flex-col gap-8">
      {MOCK_QUESTIONS.map((question) => (
        <QuestionCard key={question.id} data={question} />
      ))}
    </div>
  );
}
