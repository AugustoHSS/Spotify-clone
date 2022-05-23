import React, { useState } from 'react';
import { StyledAudioPlayer } from './style';

export default function home() {
  const [currentMusicIndex, setCurrentMusicIndex] = useState(0);
  const playlist = [
    { name: '', src: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/zhiya.mp3' },
    { name: '', src: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/ziyounvshen.mp3' },
    { name: '', src: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/wuyuwuqing.mp3' },
    { name: '', src: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/suipian.mp3' },
    { name: '', src: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/yonghengdegangwan.mp3' },
  ];
  function handleClickNext() {
    if (currentMusicIndex === playlist.length - 1) {
      setCurrentMusicIndex(0);
      return;
    }
    setCurrentMusicIndex(currentMusicIndex + 1);
  }
  function handleClickPrevious() {
    if (currentMusicIndex === 0) {
      setCurrentMusicIndex(0);
      return;
    }
    setCurrentMusicIndex(currentMusicIndex - 1);
  }
  return (
    <div>
      <p>
        currentMusicIndex:
        {currentMusicIndex}
      </p>
      <StyledAudioPlayer
        onEnded={() => handleClickNext()}
        autoPlayAfterSrcChange
        showSkipControls
        showJumpControls={false}
        src={playlist[currentMusicIndex].src}
        onClickPrevious={() => handleClickPrevious()}
        onClickNext={() => handleClickNext()}
      />
    </div>
  );
}
