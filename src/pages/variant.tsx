import { cn } from "@/lib/utils";
import { useParams } from "react-router";

const tagColor: Record<string, string> = {
  competitiongrade: "bg-yellow-200",
  gradea: "bg-red-200",
  breeding: "bg-green-200",
};

export default function Variant() {
  const { slug } = useParams();

  return (
    <div className="h-screen overflow-scroll">
      <ul className="flex flex-wrap items-center justify-center gap-2">
        {Array.from({ length: 10 }).map((_, index) => (
          <li key={index} className="max-w-30 shadow-xs shadow-neutral-300">
            <img
              src="https://3ufa9hkbld.ucarecd.net/100fe086-7d88-4d29-8a75-337716455e5c/-/scale_crop/300x300/"
              alt="Alien Blue"
            />

            <div className="flex flex-col gap-1 p-2">
              <span
                className={cn(
                  "w-fit rounded-2xl px-2 text-xs",
                  tagColor[slug?.split("-").join("") ?? ""],
                )}
              >
                Variant
              </span>
              <div className="">
                <h1 className="text-sm font-light">
                  Multiolor plakat (Competiton Grade)
                </h1>
                <span>Rp: 500.000</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
