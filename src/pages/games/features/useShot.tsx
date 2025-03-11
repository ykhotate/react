import { useEffect } from "react";
import { useBulletStore } from "../store/useBulletStore";
import { usePlayerStore } from "../store/usePlayerStore";

const useShot = () => {
	const playerPosition = usePlayerStore((state)=>state.position)
	const moveBullets = useBulletStore((state) => state.moveBullets)
	const setBullet = useBulletStore((state)=> state.setBullet)

	useEffect(() => {
		const handleShoot = (e: KeyboardEvent) => {
			if (e.key === ' ') {
				setBullet(playerPosition.x + 15, playerPosition.y);
			}
		};
		window.addEventListener('keydown', handleShoot);
		return () => window.removeEventListener('keydown', handleShoot);
	}, [playerPosition]);

	useEffect(() => {
		const interval = setInterval(() => {
			moveBullets();
		}, 50);
		return () => clearInterval(interval);
	}, []);
}
export default useShot;

