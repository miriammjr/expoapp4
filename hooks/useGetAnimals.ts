import { supabase } from "@/utils/supabase";
import { useQuery } from "@tanstack/react-query";

export const useGetAnimals = () => {
  return useQuery({
    queryKey: ["animals"],
    queryFn: async () => {
      const { data, error } = await supabase.from("animals").select("*");

      if (error) {
        throw new Error(error.message);
      } else {
        console.log("It's not erroring so here's the data: ", data);
      }
      return data;
    },
    // staleTime: 1000 * 60 * 10,
  });
};
