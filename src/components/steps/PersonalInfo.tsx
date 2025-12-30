"use client";

import { useFormContext } from "react-hook-form";
import {
  GenderEnum,
  MaritalStatusEnum,
} from "@/lib/validators/application";

export default function PersonalInfo() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Personal Information</h2>

      <div>
        <input {...register("firstName")} placeholder="First Name" />
        {errors.firstName && (
          <p className="text-red-500 text-sm">{errors.firstName.message}</p>
        )}
      </div>

      <div>
        <input {...register("lastName")} placeholder="Last Name" />
        {errors.lastName && (
          <p className="text-red-500 text-sm">{errors.lastName.message}</p>
        )}
      </div>

      <div>
        <input type="date" {...register("dateOfBirth")} />
        {errors.dateOfBirth && (
          <p className="text-red-500 text-sm">{errors.dateOfBirth.message}</p>
        )}
      </div>

      <div>
        <select {...register("gender")}>
          <option value="">Select Gender</option>
          {GenderEnum.options.map((g) => (
            <option key={g} value={g}>{g}</option>
          ))}
        </select>
        {errors.gender && (
          <p className="text-red-500 text-sm">{errors.gender.message}</p>
        )}
      </div>

      <div>
        <select {...register("maritalStatus")}>
          <option value="">Marital Status</option>
          {MaritalStatusEnum.options.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
        {errors.maritalStatus && (
          <p className="text-red-500 text-sm">{errors.maritalStatus.message}</p>
        )}
      </div>

      <div>
        <input {...register("nationality")} placeholder="Nationality" />
        {errors.nationality && (
          <p className="text-red-500 text-sm">{errors.nationality.message}</p>
        )}
      </div>

      <div>
        <input {...register("email")} placeholder="Email" />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div>
        <input {...register("phone")} placeholder="Phone (optional)" />
        {errors.phone && (
          <p className="text-red-500 text-sm">{errors.phone.message}</p>
        )}
      </div>
    </div>
  );
}
