import { create } from 'zustand';
import { Position } from '../types';

type BulletsState = {
	bullets: Position[];
};

type BulletAction = {
	setBullet: (x: number, y: number) => void;
	countBullets: () => number;
	moveBullets: () => void;
};

export type BulletStore = BulletsState & BulletAction;

export const useBulletStore = create<BulletStore>((set, get) => ({
	bullets: [],
	setBullet: (x, y) => {
		set((state) => {
			const newBullets = [...state.bullets];

			newBullets.push({ x: x, y: y });

			return { bullets: newBullets };
		});
	},
	countBullets: () => get().bullets.length,
	moveBullets: () => {
		set((state) => {
			const oldBullets = [...state.bullets];
			const newBullets = oldBullets
				.map((b) => ({ ...b, y: b.y - 5 }))
				.filter((b) => b.y > 0);
			return { bullets: newBullets };
		});
	}
}));
