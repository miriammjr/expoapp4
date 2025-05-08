import { createContext, useContext, useState } from "react";
import animalData from "../../../data/animals.json";

export type Animal = {
    name: string;
    animal: string;
    link: string;

}

type AnimalContextType = {
    animals: Animal[];
    addAnimal: (animal: Animal) => void;
    makeNoise: (animal: Animal) => string;
}

const AnimalContext = createContext<AnimalContextType | undefined>(undefined);

export const AnimalProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {

    const [animals, setAnimals] = useState<Animal[]>(animalData as Animal[]);
    
    const addAnimal = (animal: Animal) => {
        setAnimals((prev) => [...prev, animal]);
    };

    const makeNoise = (animal: Animal) => {
        if (animal.animal == "cat") {
            return "meow";
        }
        else if (animal.animal == "dog") {
            return "woof";
        }
        else if (animal.animal == "fish") {
            return "blub";
        }
        else {
            return `vague ${animal.animal} noises`
        }
    };

    return (
        <AnimalContext.Provider value={{ animals, addAnimal, makeNoise }}>
            {children}
        </AnimalContext.Provider>
    );
}

export const useAnimalContext = () => {
    const context = useContext(AnimalContext);
    if (!context) {
        throw new Error("it's erroring and i dont know why :((((");
    }
    return context;
}