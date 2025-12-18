'use client';

import { useRouter } from 'next/navigation';

export default function ProjectDetailModalPage() {
  const router = useRouter();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96 h-64">
        <h2 className="text-xl font-bold mb-4">모달 작동 확인</h2>
        <p>프로젝트 디테일 모달 페이지입니다.</p>

        {/* 닫기 버튼 */}
        <button
          onClick={() => router.back()}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          닫기
        </button>
      </div>
    </div>
  );
}
