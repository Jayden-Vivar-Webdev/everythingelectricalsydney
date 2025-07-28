'use client';

import { useEffect } from 'react';
import { FeedbackFish } from '@feedback-fish/react';

export default function FeedbackWidget({ userEmail }: { userEmail?: string }) {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      /* Prevent zoom on inputs/textareas by increasing font size */
      .feedbackfish-widget input,
      .feedbackfish-widget textarea {
        font-size: 16px !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="fixed bottom-15 left-1/2 z-50 transform -translate-x-1/2 scale-80">
      <FeedbackFish projectId="aef555de2af14e" userId={userEmail}>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg transition">
          💬 Feedback
        </button>
      </FeedbackFish>
    </div>
  );
}
