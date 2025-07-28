'use client';

import { useEffect } from 'react';
import { FeedbackFish } from '@feedback-fish/react';

export default function FeedbackWidget({ userEmail }: { userEmail?: string }) {
  useEffect(() => {
    console.log('Injecting input font-size style');
    const style = document.createElement('style');
    style.innerHTML = `
      input, textarea, select {
        font-size: 16px !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

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
