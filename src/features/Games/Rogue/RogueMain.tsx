import React, { useState, useEffect } from 'react';

const GRID_SIZE = 50; // マップサイズ
const TILE_SIZE = 10; // 各タイルのサイズ(px)
const ROOM_COUNT = 5; // 部屋の数
const ROOM_MIN_SIZE = 3;
const ROOM_MAX_SIZE = 6;

// ランダムなマップ生成
const generateMap = () => {
	const map = Array(GRID_SIZE)
		.fill([])
		.map(() => Array(GRID_SIZE).fill('#'));
	const rooms = [];

	for (let i = 0; i < ROOM_COUNT; i++) {
		const width =
			ROOM_MIN_SIZE +
			Math.floor(Math.random() * (ROOM_MAX_SIZE - ROOM_MIN_SIZE));
		const height =
			ROOM_MIN_SIZE +
			Math.floor(Math.random() * (ROOM_MAX_SIZE - ROOM_MIN_SIZE));
		const x = Math.floor(Math.random() * (GRID_SIZE - width - 1)) + 1;
		const y = Math.floor(Math.random() * (GRID_SIZE - height - 1)) + 1;

		rooms.push({ x, y, width, height });
		for (let r = y; r < y + height; r++) {
			for (let c = x; c < x + width; c++) {
				map[r][c] = '.';
			}
		}
	}

	// 部屋を通路でつなぐ
	for (let i = 1; i < rooms.length; i++) {
		const prev = rooms[i - 1];
		const curr = rooms[i];
		let [x1, y1] = [
			prev.x + Math.floor(prev.width / 2),
			prev.y + Math.floor(prev.height / 2)
		];
		const [x2, y2] = [
			curr.x + Math.floor(curr.width / 2),
			curr.y + Math.floor(curr.height / 2)
		];

		while (x1 !== x2) {
			map[y1][x1] = '.';
			x1 += x1 < x2 ? 1 : -1;
		}
		while (y1 !== y2) {
			map[y1][x1] = '.';
			y1 += y1 < y2 ? 1 : -1;
		}
	}

	return { map, startPos: { x: rooms[0].x + 1, y: rooms[0].y + 1 } };
};

const checkMoves = (key: string): { x: number; y: number } => {
	switch (key) {
		case 'ArrowUp':
			return { x: 0, y: -1 };
		case 'ArrowDown':
			return { x: 0, y: 1 };
		case 'ArrowLeft':
			return { x: -1, y: 0 };
		case 'ArrowRight':
			return { x: 1, y: 0 };
		case 'w':
			return { x: 0, y: -1 };
		case 's':
			return { x: 0, y: 1 };
		case 'a':
			return { x: -1, y: 0 };
		case 'd':
			return { x: 1, y: 0 };
		default:
			return undefined;
	}
};

const RogueMain = () => {
	const { map: initialMap, startPos } = generateMap();
	const [map] = useState(initialMap);
	const [playerPos, setPlayerPos] = useState(startPos);

	useEffect(() => {
		const handleKeyDown = (e: { key: string }) => {
			console.log(e);

			const move = checkMoves(e.key);
			if (!move) return;

			const newX = playerPos.x + move.x;
			const newY = playerPos.y + move.y;

			if (map[newY] && map[newY][newX] === '.') {
				setPlayerPos({ x: newX, y: newY });
			}
		};

		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [playerPos, map]);

	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: `repeat(${GRID_SIZE}, ${TILE_SIZE}px)`,
				gap: 2
			}}>
			{map.map((row, y) =>
				row.map((cell, x) => (
					<div
						key={`${x}-${y}`}
						style={{
							width: TILE_SIZE,
							height: TILE_SIZE,
							backgroundColor:
								playerPos.x === x && playerPos.y === y
									? 'blue'
									: cell === '#'
									? 'black'
									: 'white',
							border: '1px solid gray'
						}}
					/>
				))
			)}
		</div>
	);
};

export default RogueMain;
