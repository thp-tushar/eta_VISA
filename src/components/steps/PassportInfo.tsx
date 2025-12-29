"use client";

import { useFormContext } from "react-hook-form";

export default function PassportInfo() {
  const { register } = useFormContext();

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Passport Information</h2>

      <input {...register("passportNumber")} placeholder="Passport Number" />

      <input type="date" {...register("passportIssueDate")} />
      <input type="date" {...register("passportExpiryDate")} />

      <input {...register("issuingCountry")} placeholder="Issuing Country" />
    </div>
  );
}
