import { TourPage } from "@/components/layout/TourPage";
import boholBg from "@assets/generated_images/scenic_view_of_bohol_chocolate_hills.png";

export default function Bohol() {
  return (
    <TourPage 
      location="BOHOL"
      date="MAY 2025"
      bgImage={boholBg}
      days={[4]}
      hotels={["VISTA SUITES PANGLAO (BOHOL)"]}
      companies={[
        { name: "TAGBILARAN 911", color: "#22C55E", bg: "bg-green-50 dark:bg-green-950/20" }
      ]}
      roommate={false}
    />
  );
}
