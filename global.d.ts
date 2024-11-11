type Task = {
  id: string;
  task: string;
  date?: string;
};

declare module "*.mp3" {
  const src: string;
  export default src;
}
