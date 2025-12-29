"use client";

import { useFormContext } from "react-hook-form";
import {
  GenderEnum,
  MaritalStatusEnum,
} from "@/lib/validators/application";

export default function PersonalInfo() {
  const { register } = useFormContext();

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Personal Information</h2>

      <input {...register("firstName")} placeholder="First Name" />
      <input {...register("lastName")} placeholder="Last Name" />

      <input type="date" {...register("dateOfBirth")} />

      <select {...register("gender")}>
        <option value="">Select Gender</option>
        {GenderEnum.options.map((g) => (
          <option key={g} value={g}>{g}</option>
        ))}
      </select>

      <select {...register("maritalStatus")}>
        <option value="">Marital Status</option>
        {MaritalStatusEnum.options.map((m) => (
          <option key={m} value={m}>{m}</option>
        ))}
      </select>

      <input {...register("nationality")} placeholder="Nationality" />
      <input {...register("email")} placeholder="Email" />
      <input {...register("phone")} placeholder="Phone (optional)" />
    </div>
  );
}
