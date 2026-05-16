import create from 'zustand';

const useStore = create(() => ({
  image: '',
  setImage: (image: string) => ({ image }),
}));

export { useStore };