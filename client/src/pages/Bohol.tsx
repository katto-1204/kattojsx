import { TourPage } from "@/components/layout/TourPage";
import { TourLoading } from "@/components/ui/TourLoading";
import { useState } from "react";

export default function Bohol() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <TourLoading target="bohol" onComplete={() => setLoading(false)} />}
      <TourPage 
        location="BOHOL"
        days={[4]}
        hotels={["VISTA SUITES PANGLAO"]}
        roommate={false}
      />
    </>
  );
}
