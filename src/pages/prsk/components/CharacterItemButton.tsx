import { Character } from "../types";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useSnackbar } from "notistack";
import { useEffect, useRef, useState } from "react";
import { Query } from "../types/voicevox";
import { voicevoxQueryClient, voicevoxSynthesisClient } from "../../../hooks";

type CharacterItemButtonProps = {
  chara: Character;
};

const CharacterItemButton: React.FC<CharacterItemButtonProps> = ({ chara }) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioData, setAudioData] = useState<Blob>();

  // 文字列からQueryを作り出す
  const createQuery = async (text: string): Promise<Query | null> => {
    const res = await voicevoxQueryClient.post(
      "audio_query_from_preset",
      {},
      { params: { preset_id: 1, text: text } }
    );
    if (res) return res.data;
    return null;
  };

  // Queryから合成音声を作り出す
  const createVoice = async (queryJson: Query): Promise<Blob | null> => {
    const res = await voicevoxSynthesisClient.post("synthesis", queryJson, {
      params: { speaker: 89 },
    });

    if (res) return res.data;

    return null;
  };

  const handleListButton = (character: Character) => {
    closeSnackbar(character.name);
    const text =
      character.name +
      "の誕生日は" +
      character.birthday.replace(/\//g, "月") +
      "日です";
    enqueueSnackbar(text);
    createQuery(text).then((res) => {
      if (res) {
        createVoice(res).then((audio) => {
          if (audio) setAudioData(audio);
        });
      }
    });
  };
  useEffect(() => {
    if (audioRef.current && audioData) {
      audioRef.current.play().then(() => {
        setAudioData(undefined);
      });
    }
  }, [audioData]);
  return (
    <>
      <ListItem key={chara.name} disablePadding>
        <ListItemButton onClick={() => handleListButton(chara)}>
          <ListItemAvatar>
            <Avatar alt={`Avatar n°${chara.name}`} src={chara.iconNowUrl} />
          </ListItemAvatar>
          <ListItemText id={chara.name} primary={chara.name} />
        </ListItemButton>
      </ListItem>
      <audio
        ref={audioRef}
        style={{ display: "none" }}
        controls
        src={audioData ? window.URL.createObjectURL(audioData) : undefined}
      />
    </>
  );
};
export default CharacterItemButton;
