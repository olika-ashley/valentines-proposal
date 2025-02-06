"use client";

import React, { useState } from 'react';
import { Heart } from 'lucide-react';

const ValentinesDispatch = () => {
  const [response, setResponse] = useState(null);

  return (
    <div className="min-h-screen bg-pink-50/60 p-4 md:p-8">
      <div className="max-w-3xl mx-auto bg-gradient-to-b from-pink-50 to-pink-100/50 shadow-lg p-6 md:p-12">
        {/* Header with arrows */}
        <div className="text-center mb-6">
          <div className="flex justify-center items-center gap-4 text-pink-300">
            <div className="text-2xl">←</div>
            <h3 className="text-sm tracking-wide" style={{ fontFamily: 'Times New Roman, serif' }}>
              St. Valentine's Day : February 14th : The Hall Times
            </h3>
            <div className="text-2xl">→</div>
          </div>
        </div>
          
        {/* Main Title */}
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl mb-2" style={{ fontFamily: 'Times New Roman, serif' }}>
            Nerdy GF creates website to ask her gorgeous BF
          </h1>
          <h2 className="text-2xl md:text-3xl text-white" style={{ fontFamily: 'Times New Roman, serif' }}>
            They're so cute!
          </h2>
        </div>
          
        {/* Special Day Banner */}
        <div className="text-center mb-6">
          <p className="text-xs tracking-[0.2em] text-gray-600">
            EXTRA SPECIAL! BREAKING NEWS!! EXTRA SPECIAL! BREAKING NEWS!!
          </p>
        </div>
          
        {/* Hearts Border */}
        <div className="flex justify-center flex-wrap gap-2 text-pink-300 mb-8">
          {Array(20).fill('♥').map((heart, i) => (
            <span key={i} className="text-pink-300">{heart}</span>
          ))}
        </div>

        {/* Main Question */}
        {!response ? (
          <div className="text-center space-y-8 mb-12">
            <div>
              <h2 className="text-4xl md:text-6xl mb-4 tracking-wide" style={{ fontFamily: 'Times New Roman, serif' }}>
                WILL YOU BE MY
              </h2>
              <h2 className="text-4xl md:text-6xl text-pink-400 font-serif italic mb-2">
                Valentine?
              </h2>
              <p className="text-sm text-gray-500">(say yes or i bite you)</p>
            </div>

            {/* Yes/No Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button 
                onClick={() => setResponse('yes')}
                className="bg-pink-400 hover:bg-pink-500 text-white px-8 py-3 rounded-full transition-all transform hover:scale-105"
              >
                Yes ♥
              </button>
              <button 
                onClick={() => setResponse('no')}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-8 py-3 rounded-full transition-all transform hover:translate-y-20 hover:opacity-0"
              >
                No
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center space-y-4 mb-12 animate-fadeIn">
            {response === 'yes' ? (
              <>
                <h2 className="text-4xl text-pink-500">Yay! ♥</h2>
                <p className="text-xl">I'm the luckiest girl in the world!</p>
              </>
            ) : (
              <p className="text-xl">The 'No' button was just for decoration, you're still mine 🥰</p>
            )}
          </div>
        )}

        {/* Love Message */}
        <div className="text-xs text-gray-500 text-justify mb-8 max-w-2xl mx-auto columns-2 gap-8">
          <p className="mb-4">
            I love you and the air you breathe and the things you do. somehow you've managed to touch my heart in ways i never thought it could be and now, your name is all i can think of when i think about love, your name, the sound of your voice, your touch and your breath on my skin. it's all written down and signed by you. Thank you for being mine, it completes me. I love you.
          </p>
          <p className="mb-4">
          I love you with everything, for everything, in everything. I hope this doesn’t make you feel a type of way. I do love you, with everything in me, all my heart and from the depths of my soul, i feel it in every part of me.
          </p>
        </div>

        {/* Admission Ticket */}
        <div className="border-2 border-pink-200 p-4 rounded-lg max-w-xs mx-auto">
          <div className="border-2 border-dashed border-pink-300 p-4 text-center">
            <h3 className="font-bold mb-2">Valentine's Day</h3>
            <p className="text-sm mb-1">♥</p>
            <p className="text-sm mb-1">No.1</p>
            <p className="text-sm">ADMIT THE LOML</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValentinesDispatch;