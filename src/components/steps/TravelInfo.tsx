"use client";

import { useFormContext } from "react-hook-form";
import {
  EmploymentEnum,
  PurposeOfTravelEnum,
} from "@/lib/validators/application";

export default function TravelInfo() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Travel Information</h2>

      <label className="flex items-center gap-2">
        <input type="checkbox" {...register("hasPreviousETA")} />
        Have you had a previous ETA?
      </label>

      <div>
        <select {...register("employmentStatus")}>
          <option value="">Employment Status</option>
          {EmploymentEnum.options.map((e) => (
            <option key={e} value={e}>{e}</option>
          ))}
        </select>
        {errors.employmentStatus && (
          <p className="text-red-500 text-sm">
            {errors.employmentStatus.message}
          </p>
        )}
      </div>

      <div>
        <select {...register("purposeOfTravel")}>
          <option value="">Purpose of Travel</option>
          {PurposeOfTravelEnum.options.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
        {errors.purposeOfTravel && (
          <p className="text-red-500 text-sm">
            {errors.purposeOfTravel.message}
          </p>
        )}
      </div>

      <div>
        <input type="date" {...register("intendedArrival")} />
        {errors.intendedArrival && (
          <p className="text-red-500 text-sm">
            {errors.intendedArrival.message}
          </p>
        )}
      </div>

      <div>
        <input type="date" {...register("intendedDeparture")} />
        {errors.intendedDeparture && (
          <p className="text-red-500 text-sm">
            {errors.intendedDeparture.message}
          </p>
        )}
      </div>

      <div>
        <textarea
          {...register("additionalInfo")}
          placeholder="Additional Information (optional)"
        />
        {errors.additionalInfo && (
          <p className="text-red-500 text-sm">
            {errors.additionalInfo.message}
          </p>
        )}
      </div>
    </div>
  );
}
