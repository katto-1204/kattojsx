import { TourPage } from "@/components/layout/TourPage";
import { TourLoading } from "@/components/ui/TourLoading";
import { useState } from "react";

export default function Cebu() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <TourLoading target="cebu" onComplete={() => setLoading(false)} />}
      <TourPage 
        location="CEBU"
        days={[1, 2, 3]}
        hotels={["BAI HOTEL"]}
        buffets={["SOMAC", "BUFFET 101", "CAFE BAI", "VIKINGS"]}
        roommate={true}
      />
    </>
  );
}
