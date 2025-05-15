import { SupabaseNewAnimal } from "@/hooks/useAddAnimals";
import { useGetAnimals } from "@/hooks/useGetAnimals";
import { createContext, useContext, useEffect, useState } from "react";
// import animalData from "../../../data/animals.json";

export type Animal = {
  name: string;
  animal: string;
  link: string;
};

type AnimalContextType = {
  isLoading: boolean;
  animals: Animal[];
  // addAnimal: (animal: Animal) => void;
  addAnimal: (animal: SupabaseNewAnimal) => void;
  // makeNoise: (animal: Animal) => string;
};

const AnimalContext = createContext<AnimalContextType | undefined>(undefined);

export const AnimalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { data, isFetching } = useGetAnimals();
  const [animals, setAnimals] = useState<Animal[]>([]);

  const addAnimal = (animal: Animal) => {
    setAnimals((prev) => [...prev, animal]);
  };

  // const addAnimal = async (animal: SupabaseNewAnimal) => {
  //     addAnimalMutation.mutate(animal);
  // };

  // const makeNoise = (animal: Animal) => {
  //     if (animal.animal == "cat") {
  //         return "meow";
  //     }
  //     else if (animal.animal == "dog") {
  //         return "woof";
  //     }
  //     else if (animal.animal == "fish") {
  //         return "blub";
  //     }
  //     else {
  //         return `vague ${animal.animal} noises`
  //     }
  // };

  useEffect(() => {
    if (data && !isFetching) {
      console.log("Fetched data: ", data);
      setAnimals(data as Animal[]);
    }
    if (isFetching) {
      console.log("Fetching data");
    }
  }, [data, isFetching]);

  return (
    <AnimalContext.Provider
      value={{ isLoading: isFetching, animals, addAnimal }}
    >
      {children}
    </AnimalContext.Provider>
  );
};

export const useAnimalContext = () => {
  const context = useContext(AnimalContext);
  if (!context) {
    throw new Error("it's erroring and i dont know why :((((");
  }
  return context;
};
