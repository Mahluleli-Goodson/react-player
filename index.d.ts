import * as React from 'react';

export interface ReactPlayerProps {
  url?: string|array;
  playing?: boolean;
  loop?: boolean;
  controls?: boolean;
  volume?: number;
  muted?: boolean;
  playbackRate?: number;
  width?: string|number;
  height?: string|number;
  style?: Object;
  progressFrequency?: number;
  playsinline?: boolean;
  hidden?: boolean;
  className?: string;
  soundcloudConfig?: {
    clientId: string,
    showArtwork: boolean
  };
  youtubeConfig?: {
    playerVars: Object,
    preload: boolean
  };
  facebookConfig?: {
    appId: string
  };
  dailymotionConfig?: {
    params: Object,
    preload: boolean
  }),
  vimeoConfig?: {
    iframeParams: Object,
    preload: boolean
  };
  vidmeConfig?: {
    format: string
  }),
  fileConfig?: {
    attributes: Object,
    tracks: array,
    forceAudio: boolean,
    forceHLS: boolean,
    forceDASH: boolean
  }),
  wistiaConfig?: {
    options: Object
  }),
  onReady?(): void;
  onStart?(): void;
  onPlay?(): void;
  onPause?(): void;
  onBuffer?(): void;
  onEnded?(): void;
  onError?(error: any): void;
  onDuration?(duration: number): void;
  onSeek?(seconds: number): void;
  onProgress?(state: { played: number, loaded: number }): void;
}

export default class ReactPlayer extends React.Component<ReactPlayerProps, any>{
  seekTo(fraction: number): void;
}
