'use client';
import { FeedbackFish } from '@feedback-fish/react';

export default function FeedbackWidget({ userEmail }: { userEmail?: string }) {


  return (
    <div className="fixed bottom-16 left-1/2 z-50 transform -translate-x-1/2">
      <FeedbackFish projectId="aef555de2af14e" userId={userEmail}>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg transition text-sm sm:text-base">
          💬 Feedback
        </button>
      </FeedbackFish>
    </div>
  );
}
