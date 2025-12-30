"use client";

import { useFormContext } from "react-hook-form";

export default function PassportInfo() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Passport Information</h2>

      <div>
        <input {...register("passportNumber")} placeholder="Passport Number" />
        {errors.passportNumber && (
          <p className="text-red-500 text-sm">
            {errors.passportNumber.message}
          </p>
        )}
      </div>

      <div>
        <input type="date" {...register("passportIssueDate")} />
        {errors.passportIssueDate && (
          <p className="text-red-500 text-sm">
            {errors.passportIssueDate.message}
          </p>
        )}
      </div>

      <div>
        <input type="date" {...register("passportExpiryDate")} />
        {errors.passportExpiryDate && (
          <p className="text-red-500 text-sm">
            {errors.passportExpiryDate.message}
          </p>
        )}
      </div>

      <div>
        <input {...register("issuingCountry")} placeholder="Issuing Country" />
        {errors.issuingCountry && (
          <p className="text-red-500 text-sm">
            {errors.issuingCountry.message}
          </p>
        )}
      </div>
    </div>
  );
}
