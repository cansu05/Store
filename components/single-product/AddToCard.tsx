import { Button } from "../ui/button";

const AddToCard = ({ productId }: { productId: string }) => {
  return (
    <Button className="capitalize mt-8" size="lg">
      add to card
    </Button>
  );
};
export default AddToCard;
