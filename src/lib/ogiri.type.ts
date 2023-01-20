import type { Socket } from 'socket.io-client';

export type StartOnline = {
  userName: string;
  socket: Socket;
  members: Member[];
};

export type JoinResponse = {
  result: 'OK' | 'NG';
  reason?: string;
  members: Member[];
};

export type Member = {
  username: string;
};

export type Members = {
  members: Member[];
};

export type Game = {
  answerer: string;
  turn: 0;
  question?: string;
};

export type StartGame = {
  members: Member[];
  answerer: string;
  turn: number;
  question?: string;
};

export type Answer = {
  username: string;
  answer: string;
};

export type GameResult = {
  answers: Answer[];
};

export type PlayMode = 'local' | 'online';
