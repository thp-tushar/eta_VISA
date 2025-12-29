import { z } from "zod";

/**
 * ENUMS (must match Prisma EXACTLY)
 */
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

/**
 * CREATE APPLICATION (initial step)
 * Minimal required fields to start an application
 */
export const createETAApplicationSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  dateOfBirth: z.coerce.date(),

  gender: GenderEnum,
  nationality: z.string().min(2),

  email: z.string().email(),
  passportNumber: z.string().min(6),

  passportIssueDate: z.coerce.date(),
  passportExpiryDate: z.coerce.date(),
  issuingCountry: z.string().min(2),
});

/**
 * UPDATE APPLICATION (multi-step form)
 * All fields optional
 */
export const updateETAApplicationSchema = z.object({
  // Personal
  firstName: z.string().min(1).optional(),
  lastName: z.string().min(1).optional(),
  dateOfBirth: z.coerce.date().optional(),
  gender: GenderEnum.optional(),
  nationality: z.string().min(2).optional(),
  maritalStatus: MaritalStatusEnum.optional(),

  // Contact
  email: z.string().email().optional(),
  phone: z.string().optional(),
  addressLine1: z.string().optional(),
  addressLine2: z.string().optional(),
  city: z.string().optional(),
  stateProvince: z.string().optional(),
  postalCode: z.string().optional(),
  country: z.string().optional(),

  // Passport
  passportNumber: z.string().min(6).optional(),
  passportIssueDate: z.coerce.date().optional(),
  passportExpiryDate: z.coerce.date().optional(),
  issuingCountry: z.string().min(2).optional(),

  // Travel
  hasPreviousETA: z.boolean().optional(),
  employmentStatus: EmploymentEnum.optional(),
  purposeOfTravel: PurposeOfTravelEnum.optional(),
  intendedArrival: z.coerce.date().optional(),
  intendedDeparture: z.coerce.date().optional(),
  additionalInfo: z.string().optional(),
});

/**
 * FINAL SUBMIT VALIDATION
 * Used before changing status → PENDING
 */
export const submitETAApplicationSchema = createETAApplicationSchema.extend({
  maritalStatus: MaritalStatusEnum.optional(),
  employmentStatus: EmploymentEnum.optional(),
  purposeOfTravel: PurposeOfTravelEnum.optional(),
  intendedArrival: z.coerce.date(),
  intendedDeparture: z.coerce.date(),
});

/**
 * TYPES (optional but recommended)
 */
export type CreateETAApplicationInput = z.infer<
  typeof createETAApplicationSchema
>;

export type UpdateETAApplicationInput = z.infer<
  typeof updateETAApplicationSchema
>;
