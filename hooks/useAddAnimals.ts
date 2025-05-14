import { Animal } from "@/components/ui/ContextProvider";
import { supabase } from "@/utils/supabase";
import { useMutation, useQueryClient } from "@tanstack/react-query";


export type SupabaseNewAnimal = Omit<Animal, 'id'>;

export const useAddAnimal = (newAnimal: Animal) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (newAnimal) => {
            const {data, error} = await supabase 
                .from('animals')
                .insert(newAnimal)
            if (error) {
                throw new Error(error.message)
            }
            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['animals']})
        },
    })
}