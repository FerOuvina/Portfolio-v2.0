import { useState, useRef, useEffect } from 'react';
import Card from './card';
import Image from 'next/image';
import leftArrow from '../assets/images/LeftArrow.svg';
import rightArrow from '../assets/images/RightArrow.svg';
import playButton from '../assets/images/PlayButton.svg';
import pauseButton from '../assets/images/PauseButton.svg';
import '../stylesheets/AudioPlayer.css';

export default function AudioPlayer() {
  const songs = [
    `Episode 1`,
    `Fleeting`,
    `Hallucinating`,
    `Late Nights`,
    `Too Late`,
  ];
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioDuration, setAudioDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioPlayer = useRef();
  const progressBar = useRef();
  const rangeAnimRef = useRef();

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    return `${minutes}:${seconds}`;
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changeCurrentTime();
    rangeAnimRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeCurrentTime = () => {
    progressBar.current.style.setProperty(
      '--seekBeforeWidth',
      `${(progressBar.current.value / audioDuration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };

  const playSong = () => {
    audioPlayer.current.volume = 0.2;
    audioPlayer.current.play();
    setIsPlaying(true);
    rangeAnimRef.current = requestAnimationFrame(whilePlaying);
  };

  const pauseSong = () => {
    audioPlayer.current.pause();
    setIsPlaying(false);
    cancelAnimationFrame(rangeAnimRef.current);
  };

  const playPauseSong = () => {
    playSong();
    setTimeout(() => {
      pauseSong();
    }, 20);
  };

  const nextSong = () => {
    const currentSongIndex = songs.indexOf(currentSong);
    const nextSongIndex = currentSongIndex + 1;
    if (nextSongIndex === songs.length) {
      setCurrentSong(songs[0]);
    } else {
      setCurrentSong(songs[nextSongIndex]);
    }
    audioPlayer.current.src = `/audio/${currentSong}.mp3`;
    audioPlayer.current.currentTime = 0;
    setCurrentTime((progressBar.current.value = 0));
    cancelAnimationFrame(rangeAnimRef.current);
    audioPlayer.current.onloadeddata = () => {
      isPlaying ? playSong() : playPauseSong();
    };
  };

  const previousSong = () => {
    const currentSongIndex = songs.indexOf(currentSong);
    const previousSongIndex = currentSongIndex - 1;
    if (previousSongIndex < 0) {
      setCurrentSong(songs[songs.length - 1]);
    } else {
      setCurrentSong(songs[previousSongIndex]);
    }
    audioPlayer.current.src = `/audio/${currentSong}.mp3`;
    audioPlayer.current.currentTime = 0;
    setCurrentTime((progressBar.current.value = 0));
    cancelAnimationFrame(rangeAnimRef.current);
    audioPlayer.current.onloadeddata = () => {
      isPlaying ? playSong() : playPauseSong();
    };
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      pauseSong();
    } else {
      playSong();
    }
  };

  const handleChange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changeCurrentTime();
  };

  useEffect(() => {
    const seconds = Math.floor(audioPlayer?.current?.duration);
    setAudioDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  return (
    <Card
      navTitle={'/home/media-player'}
      contentFirst={[
        <span key={'media-player-span1'} className='flex justify-center items-center text-md'>
          Song: {currentSong}
        </span>,
      ]}
      contentH1={[
        <div key={'media-player-container'}>
          <audio src={`/audio/${currentSong}.mp3`} ref={audioPlayer}>
            Your browser does not support the <code>audio</code> element.
          </audio>

          <div className='flex gap-1 justify-evenly'>
            {/* Current Time */}
            <span className='text-sm'>
              {!isNaN(currentTime) && calculateTime(currentTime)}
            </span>

            {/* Progress Bar */}
            <div>
              <input
                type='range'
                className='progressBar'
                defaultValue={0}
                ref={progressBar}
                onChange={handleChange}
              />
            </div>

            {/* Duration */}
            <span className='text-sm'>
              {audioDuration &&
                !isNaN(audioDuration) &&
                calculateTime(audioDuration)}
            </span>
          </div>

          {/* Controls */}
          <div className='flex justify-evenly'>
            <button onClick={previousSong}>
              <Image
                src={leftArrow}
                alt={'leftArrow'}
                width={50}
                height={50}
                title='Previous Song'
              />
            </button>

            <button onClick={handlePlayPause} id={'playButton'}>
              {isPlaying ? (
                <Image
                  src={pauseButton}
                  alt={'pauseButton'}
                  width={50}
                  height={50}
                />
              ) : (
                <Image
                  src={playButton}
                  alt={'playButton'}
                  width={50}
                  height={50}
                />
              )}
            </button>

            <button onClick={nextSong}>
              <Image
                src={rightArrow}
                alt={'rightArrow'}
                width={50}
                height={50}
                title='Next Song'
              />
            </button>
          </div>
        </div>,
      ]}
      id={`mediaCard`}
      width={300}
    ></Card>
  );
}
