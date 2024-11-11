import { useData } from "@/components/data-provider";
import { useEffect } from "react";
import { Howl } from "howler";

export const useSound = () => {
  const { sound, muted } = useData();
  let s: Howl | null = null;

  const play = () => {
    if (sound) {
      const fileURL = URL.createObjectURL(sound);

      s = new Howl({
        src: [fileURL],
        format: [sound.type.split("/")[1]],
        mute: muted,
      });

      s.play();
    }
  };

  useEffect(() => {
    return () => {
      if (s) {
        s.unload();
      }
    };
  }, [sound]);

  useEffect(() => {
    if (s) {
      s.mute(muted);
    }
  }, [muted]);

  return { play };
};
