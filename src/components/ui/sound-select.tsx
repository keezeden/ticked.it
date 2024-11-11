"use client";
import { AudioLines, Volume2, VolumeX } from "lucide-react";
import { Button } from "./button";
import { useData } from "../data-provider";

export const SoundSelect = () => {
  const { muted, setMuted, setSound } = useData();

  const onSelect = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "audio/*";
    input.onchange = (e) => {
      const files = (e.target as HTMLInputElement).files;
      if (files && files.length > 0) {
        console.log(files[0]);

        setSound(files[0]);
      }
    };
    input.click();
  };

  const onMute = () => {
    setMuted(!muted);
  };

  return (
    <>
      <Button onClick={onMute} variant="outline" size="icon">
        {muted ? <VolumeX /> : <Volume2 />}
      </Button>
      <Button onClick={onSelect} variant="outline" size="icon">
        <AudioLines />
      </Button>
    </>
  );
};
