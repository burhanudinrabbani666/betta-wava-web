import { Link } from "react-router";
import { Star20SolidIcon } from "../icons/heroicons-star-20-solid";
import { Trophy16SolidIcon } from "../icons/heroicons-trophy-16-solid";
import { Heart20SolidIcon } from "../icons/heroicons-heart-20-solid";

function VariantNav() {
  return (
    <div>
      <div className="my-5 flex items-center justify-center gap-10">
        <Link to={"#"} className="flex flex-col items-center gap-1">
          <div className="rounded-full bg-gray-200 p-3">
            <Star20SolidIcon fill="" />
          </div>
          <span>Grade A</span>
        </Link>
        <Link to={"#"} className="flex flex-col items-center gap-1">
          <div className="rounded-full bg-gray-200 p-3">
            <Trophy16SolidIcon />
          </div>
          <span>Comp Grade</span>
        </Link>
        <Link to={"#"} className="flex flex-col items-center gap-1">
          <div className="rounded-full bg-gray-200 p-3">
            <Heart20SolidIcon />
          </div>
          <span>Bredding</span>
        </Link>
      </div>
    </div>
  );
}

export default VariantNav;
