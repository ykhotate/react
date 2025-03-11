import { useEffect, useRef } from 'react';
import { useBulletStore, usePlayerStore } from '../store';
import { useShot } from '../features';

const ShootingGame = () => {
	// 描画エリア
	const canvasRef = useRef<HTMLCanvasElement>(null);

	// プレイヤー情報
	const playerPos = usePlayerStore((state) => state.position);
	const playerWid = usePlayerStore((state) => state.width);
	const playerHei = usePlayerStore((state) => state.height);
	const setPlayerPos = usePlayerStore((state) => state.setPlayer);

	// 弾情報
	const bullets = useBulletStore((state) => state.bullets);
	useShot();
	
	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		const handleKeyDown = (e: KeyboardEvent) => {
			let newX = playerPos.x;
			if (e.key === 'ArrowLeft' && playerPos.x > 0) newX -= 20;
			if (
				e.key === 'ArrowRight' &&
				playerPos.x < canvas.width - playerWid
			)
				newX += 20;
			setPlayerPos({ x: newX, y: playerPos.y });
		};

		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, []);

	useEffect(() => {
		const ctx = canvasRef.current?.getContext('2d');
		if (!ctx) return;
		ctx.fillStyle = 'red';
		bullets.forEach((b) => ctx.fillRect(b.x, b.y, 5, 10));
	}, [bullets]);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		const draw = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.fillStyle = 'blue';
			ctx.fillRect(playerPos.x, playerPos.y, playerWid, playerHei);
		};

		draw();
	}, [playerPos]);

	return (
		<canvas
			ref={canvasRef}
			width={300}
			height={500}
			className="border border-black"
		/>
	);
};

export default ShootingGame;
