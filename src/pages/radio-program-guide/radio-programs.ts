export type RadioPrograms = {
  name: string;
  progs: Programs;
};

export type Programs = {
  date: Date;
  prog: Program[];
};

export type Program = {
  desc: string;
  failed_record: number;
  genre: Genre;
  /** 画像を取得できるリンク*/
  img: string;
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
