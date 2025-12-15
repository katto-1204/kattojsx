import { TourPage } from "@/components/layout/TourPage";
import cebuBg from "@assets/generated_images/scenic_view_of_cebu_city_philippines.png";

export default function Cebu() {
  return (
    <TourPage 
      location="CEBU"
      date="MAY 2025"
      bgImage={cebuBg}
      days={[1, 2, 3]}
      hotels={["BAI HOTEL (CEBU)", "VISTA SUITES PANGLAO"]}
      buffets={["SOMAC (CEBU)", "BUFFET 101 (CEBU)", "CAFE BAI HOTEL (CEBU)", "VIKINGS (CEBU)"]}
      companies={[
        { name: "WORLD TECH", color: "#EF4444", bg: "bg-red-50 dark:bg-red-950/20" },
        { name: "RIVAN IT", color: "#0EA5E9", bg: "bg-sky-50 dark:bg-sky-950/20" },
        { name: "CODECHUM", color: "#3B82F6", bg: "bg-blue-50 dark:bg-blue-950/20" },
        { name: "MATA", color: "#000000", bg: "bg-gray-50 dark:bg-white/10" },
      ]}
      roommate={true}
    />
  );
}
