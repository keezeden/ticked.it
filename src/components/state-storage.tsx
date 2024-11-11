"use client";
import { useEffect } from "react";
import { useData } from "./data-provider";

const STORAGE_KEY = "ticked.it";

const DEFAULT_DATA: Task[] = [
  { id: "1", task: "Clean Room" },
  { id: "2", task: "Wash Dishes" },
  { id: "3", task: "Do Laundry" },
];

export const StateStorage = () => {
  const { tasks, setTasks, completed, setCompleted, sound, setSound } = useData();

  const save = () => {
    const data = JSON.stringify({ tasks, completed });
    localStorage.setItem(`${STORAGE_KEY}/tasks`, data);
  };

  const saveFile = () => {
    if (sound) saveFileToLocalStorage(`${STORAGE_KEY}/sound`, sound);
  };

  const load = () => {
    const data = localStorage.getItem(`${STORAGE_KEY}/tasks`);
    const parsed = data ? JSON.parse(data) : {};

    setTasks(parsed.tasks || DEFAULT_DATA);
    setCompleted(parsed.completed || []);
  };

  const loadFile = async () => {
    const soundFromStorage = loadFileFromLocalStorage(`${STORAGE_KEY}/sound`);

    if (soundFromStorage) {
      setSound(soundFromStorage);
    } else {
      const response = await fetch("/level_up.mp3");
      const arrayBuffer = await response.arrayBuffer();
      const defaultSoundFile = new File([arrayBuffer], "levelup.mp3", { type: "audio/mpeg" });

      setSound(defaultSoundFile);
    }
  };

  useEffect(() => {
    load();
    loadFile();
  }, []);

  useEffect(() => {
    save();
    saveFile();
  }, [tasks, completed, sound]);

  return null;
};

const saveFileToLocalStorage = (key: string, file: File) => {
  const reader = new FileReader();
  reader.onload = () => {
    localStorage.setItem(key, JSON.stringify({ data: reader.result, type: file.type }));
  };
  reader.readAsDataURL(file);
};

const loadFileFromLocalStorage = (key: string) => {
  const storedData = localStorage.getItem(key);
  if (!storedData) return null;

  const { data, type } = JSON.parse(storedData) as { data: string; type: string };
  const binary = atob(data.split(",")[1]);
  const array = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return new File([array], "restoredFile", { type });
};
