import { create } from 'zustand';
import { Position } from '../types';

type PlayerState = {
	position: Position;
	width: number;
	height: number;
};

type PlayerAction = {
	setPlayer: (position: Position) => void;
};

export type PlayerStore = PlayerState & PlayerAction;

export const usePlayerStore = create<PlayerStore>()((set) => ({
	position: { x: 150, y: 450 },
	width: 40,
	height: 40,
	setPlayer: (pos) => {
		set({
			position: pos
		});
	}
}));
