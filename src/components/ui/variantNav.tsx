import { Link } from "react-router";
import { Star20SolidIcon } from "../icons/heroicons-star-20-solid";
import { Trophy16SolidIcon } from "../icons/heroicons-trophy-16-solid";
import { Heart20SolidIcon } from "../icons/heroicons-heart-20-solid";
import { Card } from "./card";

function VariantNav() {
  return (
    <Card size="sm" className="m-3">
      <div className="flex items-center justify-center gap-10">
        <Link to={"#"} className="flex flex-col items-center gap-1">
          <div className="rounded-full bg-gray-100 p-3">
            <Star20SolidIcon fill="#EE0B0B" stroke="none" />
          </div>
          <span>Grade A</span>
        </Link>
        <Link to={"#"} className="flex flex-col items-center gap-1">
          <div className="rounded-full bg-gray-100 p-3">
            <Trophy16SolidIcon fill="#F3E008" stroke="none" />
          </div>
          <span>Comp Grade</span>
        </Link>
        <Link to={"#"} className="flex flex-col items-center gap-1">
          <div className="rounded-full bg-gray-100 p-3">
            <Heart20SolidIcon fill="#F800A9" stroke="none" />
          </div>
          <span>Bredding</span>
        </Link>
      </div>
    </Card>
  );
}

export default VariantNav;
