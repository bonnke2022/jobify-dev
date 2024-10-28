import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "./ui/use-toast";
import { deleteJobAction } from "@/utils/actions";
import { Button } from "./ui/button";

const DeleteBtn = ({ id }: { id: string }) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (id: string) => deleteJobAction(id),
    onSuccess: (data) => {
      if (!data) {
        toast({
          description: "there was an error!!!",
        });
        return;
      }
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
      queryClient.invalidateQueries({ queryKey: ["stats"] });
      queryClient.invalidateQueries({ queryKey: ["charts"] });
      toast({ description: "job deleted" });
    },
  });
  return (
    <Button onClick={() => mutate(id)} size="sm" disabled={isPending}>
      {isPending ? "deleting..." : "delete"}
    </Button>
  );
};

export default DeleteBtn;
