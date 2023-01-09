import type { Socket } from 'socket.io-client';

export type StartOnline = {
  userName: string;
  turns: number;
  socket: Socket;
};

export type JoinResponse = {
  result: 'OK' | 'NG';
  reason?: string;
};

export type Answer = {
  username: string;
  answer: string;
};

export type GameResult = {
  answers: Answer[];
};

export type PlayMode = 'local' | 'online';
