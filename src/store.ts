import create from 'zustand';
interface Car {
  id: number;
  name: string;
  type: string;
  datesAvailable: string[];
  location: string;
}
type Store = {
  cars: Car[];
  setCars: (cars: Car[]) => void;
};
const useStore = create<Store>()((set) => ({
  cars: [],
  setCars: (cars) => set({ cars }),
}));
export { useStore };