"use client";

import { useFormContext } from "react-hook-form";
import {
  EmploymentEnum,
  PurposeOfTravelEnum,
} from "@/lib/validators/application";

export default function TravelInfo() {
  const { register } = useFormContext();

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Travel Information</h2>

      <label className="flex items-center gap-2">
        <input type="checkbox" {...register("hasPreviousETA")} />
        Have you had a previous ETA?
      </label>

      <select {...register("employmentStatus")}>
        <option value="">Employment Status</option>
        {EmploymentEnum.options.map((e) => (
          <option key={e} value={e}>{e}</option>
        ))}
      </select>

      <select {...register("purposeOfTravel")}>
        <option value="">Purpose of Travel</option>
        {PurposeOfTravelEnum.options.map((p) => (
          <option key={p} value={p}>{p}</option>
        ))}
      </select>

      <input type="date" {...register("intendedArrival")} />
      <input type="date" {...register("intendedDeparture")} />

      <textarea
        {...register("additionalInfo")}
        placeholder="Additional Information (optional)"
      />
    </div>
  );
}
