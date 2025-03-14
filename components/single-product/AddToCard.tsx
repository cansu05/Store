import { Button } from "../ui/button";

const AddToCard = ({ productId }: { productId: string }) => {
  console.log(productId);
  return (
    <Button className="capitalize mt-8" size="lg">
      add to card
    </Button>
  );
};
export default AddToCard;
