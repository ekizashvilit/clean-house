import DefaultButton from "../../../components/buttons/DefaultButton";
import { ReactComponent as Cart } from "../../../assets/svg/cart.svg";

const Categories = () => {
  return (
    <div>
      <DefaultButton icon={<Cart />} />
    </div>
  );
};

export default Categories;
