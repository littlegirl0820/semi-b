import type { Socket } from 'socket.io-client';

export type StartOnline = {
  userName: string;
  socket: Socket;
};

export type StartLocal = {
  userName: string;
  turns: number;
};

export type JoinResponse = {
  result: 'OK' | 'NG';
  reason?: string;
};

export type MemberSvr = {
  username: string;
};

export type MembersSvr = {
  members: MemberSvr[];
};

export type GameSvr = {
  answerer: string;
  turn: 0;
  question?: string;
};

export type StartGame = {
  members: string[];
  answerer: string;
  turn: 0;
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
