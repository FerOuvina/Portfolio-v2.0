import { useCallback, useEffect, useRef, useState } from 'react';
import Card from './card';
import '../stylesheets/audioPlayer.css';

const SONGS = [
  'Episode 1',
  'Fleeting',
  'Hallucinating',
  'Late Nights',
  'Too Late'
];

const INITIAL_VOLUME = 0.4;

function formatTime(value) {
  if (!Number.isFinite(value) || value < 0) return '0:00';
  const total = Math.floor(value);
  const minutes = Math.floor(total / 60);
  const seconds = total % 60;
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

export default function AudioPlayer() {
  const audioRef = useRef(null);
  const shouldResumeRef = useRef(false);
  const volumeRef = useRef(INITIAL_VOLUME);
  const isMutedRef = useRef(false);
  const [songIndex, setSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(INITIAL_VOLUME);

  const song = SONGS[songIndex];
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  const readDuration = useCallback((audio) => {
    const value = audio.duration;
    if (Number.isFinite(value) && value > 0) {
      setDuration(value);
      return true;
    }
    return false;
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return undefined;

    audio.volume = volumeRef.current;
    audio.muted = isMutedRef.current;
    setCurrentTime(0);
    setDuration(0);

    const syncDuration = () => {
      readDuration(audio);
      if (audio.readyState === 0) audio.load();
    };

    const handleTimeUpdate = () => {
      if (!readDuration(audio)) return;
      setCurrentTime(audio.currentTime);
    };

    const handleEnded = () => {
      shouldResumeRef.current = true;
      setSongIndex((previous) => (previous + 1) % SONGS.length);
      setIsPlaying(true);
    };

    audio.addEventListener('loadedmetadata', syncDuration);
    audio.addEventListener('durationchange', syncDuration);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);

    if (audio.readyState >= 1) syncDuration();

    if (shouldResumeRef.current) {
      audio.play().catch(() => setIsPlaying(false));
    }

    return () => {
      audio.removeEventListener('loadedmetadata', syncDuration);
      audio.removeEventListener('durationchange', syncDuration);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [song, readDuration]);

  const goTo = useCallback((index) => {
    setSongIndex((index + SONGS.length) % SONGS.length);
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    shouldResumeRef.current = audio.paused;

    if (audio.paused) {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const handleSeek = (event) => {
    const audio = audioRef.current;
    const value = Number(event.target.value);
    if (!audio) return;
    audio.currentTime = value;
    setCurrentTime(value);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    const nextMuted = !isMuted;
    audio.muted = nextMuted;
    isMutedRef.current = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleVolume = (event) => {
    const audio = audioRef.current;
    const value = Number(event.target.value);
    if (!audio) return;
    audio.volume = value;
    audio.muted = value === 0;
    volumeRef.current = value;
    isMutedRef.current = value === 0;
    setVolume(value);
    setIsMuted(value === 0);
  };

  return (
    <Card
      navTitle={'/home/media-player'}
      contentFirst={[
        <span
          key={'media-player-title'}
          className='flex items-center gap-2 text-sm'>
          <span className='mediaPlayerLed' data-playing={isPlaying} />
          {song}
        </span>
      ]}
      contentH1={[
        <div key={'media-player-container'} className='mediaPlayer'>
          <audio
            src={`/audio/${encodeURIComponent(song)}.mp3`}
            ref={audioRef}
            preload='auto'
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}>
            Your browser does not support the audio element.
          </audio>

          <div className='mediaPlayerTimeline'>
            <span className='mediaPlayerTime'>{formatTime(currentTime)}</span>

            <input
              type='range'
              className='mediaPlayerSeek'
              style={{ '--seek-progress': `${progress}%` }}
              min={0}
              max={duration || 0}
              step={0.1}
              value={Math.min(currentTime, duration || 0)}
              onChange={handleSeek}
              disabled={!duration}
              aria-label='Seek'
            />

            <span className='mediaPlayerTime'>
              {formatTime(duration)}
            </span>
          </div>

          <div className='mediaPlayerControls'>
            <button
              type='button'
              className='mediaPlayerButton'
              onClick={() => goTo(songIndex - 1)}
              title='Previous song'
              aria-label='Previous song'>
              <svg viewBox='0 0 24 24' aria-hidden='true'>
                <path d='M18 5.5v13L8.5 12 18 5.5zM6 5.5h2v13H6z' />
              </svg>
            </button>

            <button
              type='button'
              className='mediaPlayerButton mediaPlayerButton-primary'
              onClick={togglePlay}
              title={isPlaying ? 'Pause' : 'Play'}
              aria-label={isPlaying ? 'Pause' : 'Play'}>
              {isPlaying ? (
                <svg viewBox='0 0 24 24' aria-hidden='true'>
                  <path d='M8 5h3v14H8zM13 5h3v14h-3z' />
                </svg>
              ) : (
                <svg viewBox='0 0 24 24' aria-hidden='true'>
                  <path d='M7 4.5v15L19.5 12 7 4.5z' />
                </svg>
              )}
            </button>

            <button
              type='button'
              className='mediaPlayerButton'
              onClick={() => goTo(songIndex + 1)}
              title='Next song'
              aria-label='Next song'>
              <svg viewBox='0 0 24 24' aria-hidden='true'>
                <path d='M6 5.5v13L15.5 12 6 5.5zM16 5.5h2v13h-2z' />
              </svg>
            </button>
          </div>

          <div className='mediaPlayerVolume'>
            <button
              type='button'
              className='mediaPlayerVolumeButton'
              onClick={toggleMute}
              title={isMuted ? 'Unmute' : 'Mute'}
              aria-label={isMuted ? 'Unmute' : 'Mute'}>
              {isMuted || volume === 0 ? (
                <svg viewBox='0 0 24 24' aria-hidden='true'>
                  <path d='M4 9v6h3.5L12 19V5L7.5 9H4zm12.5-.9-1.4-1.4-2.1 2.1-2.1-2.1-1.4 1.4L11.6 11l-2.1 2.1 1.4 1.4 2.1-2.1 2.1 2.1 1.4-1.4L13.9 12l2.6-2.1z' />
                </svg>
              ) : (
                <svg viewBox='0 0 24 24' aria-hidden='true'>
                  <path d='M4 9v6h3.5L12 19V5L7.5 9H4zm12.5 3a3.5 3.5 0 0 0-2-3.2v6.3a3.5 3.5 0 0 0 2-3.1zm-2-7.6v2.1a5.5 5.5 0 0 1 0 11v2.1a7.5 7.5 0 0 0 0-15.2z' />
                </svg>
              )}
            </button>

            <input
              type='range'
              className='mediaPlayerSeek mediaPlayerSeek-volume'
              style={{
                '--seek-progress': `${(isMuted ? 0 : volume) * 100}%`
              }}
              min={0}
              max={1}
              step={0.01}
              value={isMuted ? 0 : volume}
              onChange={handleVolume}
              aria-label='Volume'
            />
          </div>
        </div>
      ]}
      id={'mediaCard'}
      minWidth={300}
      maxWidth={400}
    />
  );
}