-- CreateEnum
CREATE TYPE "public"."Gender" AS ENUM ('MALE', 'FEMALE', 'OTHER');

-- CreateEnum
CREATE TYPE "public"."MaritalStatus" AS ENUM ('SINGLE', 'MARRIED', 'DIVORCED', 'WIDOWED', 'SEPARATED');

-- CreateEnum
CREATE TYPE "public"."Employment" AS ENUM ('EMPLOYED', 'UNEMPLOYED', 'STUDENT', 'RETIRED');

-- CreateEnum
CREATE TYPE "public"."PurposeOfTravel" AS ENUM ('TOURISM', 'BUSINESS', 'VISITING_FAMILY', 'TRANSIT', 'OTHER');

-- CreateEnum
CREATE TYPE "public"."ApplicationStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- CreateTable
CREATE TABLE "public"."ETAApplication" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "gender" "public"."Gender" NOT NULL,
    "nationality" TEXT NOT NULL,
    "maritalStatus" "public"."MaritalStatus",
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "addressLine1" TEXT,
    "addressLine2" TEXT,
    "city" TEXT,
    "stateProvince" TEXT,
    "postalCode" TEXT,
    "country" TEXT,
    "passportNumber" TEXT NOT NULL,
    "passportIssueDate" TIMESTAMP(3) NOT NULL,
    "passportExpiryDate" TIMESTAMP(3) NOT NULL,
    "issuingCountry" TEXT NOT NULL,
    "hasPreviousETA" BOOLEAN NOT NULL DEFAULT false,
    "employmentStatus" "public"."Employment",
    "purposeOfTravel" "public"."PurposeOfTravel",
    "intendedArrival" TIMESTAMP(3),
    "intendedDeparture" TIMESTAMP(3),
    "additionalInfo" TEXT,
    "feePaid" BOOLEAN NOT NULL DEFAULT false,
    "feeAmount" DOUBLE PRECISION NOT NULL DEFAULT 7.0,
    "applicationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "public"."ApplicationStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ETAApplication_pkey" PRIMARY KEY ("id")
);
