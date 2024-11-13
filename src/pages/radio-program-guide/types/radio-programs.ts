export type RadioPrograms = {
	name: string;
	progs: Programs;
};

export type Programs = {
	date: Date;
	prog: Program[];
};

export type Program = {
	/** 番組ID */
	id: string;
	/** 開始日時 */
	ft: string;
	/** 終了日時 */
	to: string;
	/** 開始時刻 */
	ftl: string;
	/** 終了時刻 */
	tol: string;
	/** 放送時間 */
	dur: string;
	/** 一言説明 */
	desc: string;
	/** 不明 */
	failed_record: number;
	/** ジャンル */
	genre: Genre;
	/** 画像を取得できるリンク*/
	img: string;
	/** 説明文 */
	info: string;
	metas: { meta: string };
	/** 演者 */
	pfm: string;
	tag: { item: Tag[] };
	title: string;
	ts_in_ng: number;
	ts_out_ng: number;
	url: string;
	url_link: string;
};
export type Genre = {
	personality: { name: string };
	program: { name: string };
};
export type Metas = {
	meta: string;
};

export type Tag = {
	name: string;
};
