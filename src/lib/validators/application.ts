import { z } from "zod";

export const GenderEnum = z.enum(["MALE", "FEMALE", "OTHER"]);
export const MaritalStatusEnum = z.enum([
  "SINGLE",
  "MARRIED",
  "DIVORCED",
  "WIDOWED",
  "SEPARATED",
]);
export const EmploymentEnum = z.enum([
  "EMPLOYED",
  "UNEMPLOYED",
  "STUDENT",
  "RETIRED",
]);
export const PurposeOfTravelEnum = z.enum([
  "TOURISM",
  "BUSINESS",
  "VISITING_FAMILY",
  "TRANSIT",
  "OTHER",
]);

export const createETAApplicationSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  dateOfBirth: z.coerce.date({
    required_error: "Date of birth is required",
    invalid_type_error: "Invalid date",
  }),
  gender: GenderEnum,
  nationality: z.string().min(2, "Nationality is required"),
  email: z.string().email("Invalid email address"),
  passportNumber: z.string().min(6, "Passport number is required"),
  passportIssueDate: z.coerce.date({
    required_error: "Passport issue date is required",
  }),
  passportExpiryDate: z.coerce.date({
    required_error: "Passport expiry date is required",
  }),
  issuingCountry: z.string().min(2, "Issuing country is required"),
});

export const updateETAApplicationSchema = createETAApplicationSchema.partial();

export type UpdateETAApplicationInput = z.infer<
  typeof updateETAApplicationSchema
>;
