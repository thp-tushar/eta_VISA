"use client";

import { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  updateETAApplicationSchema,
  createETAApplicationSchema,
  UpdateETAApplicationInput,
} from "@/lib/validators/application";

import PersonalInfo from "./steps/PersonalInfo";
import PassportInfo from "./steps/PassportInfo";
import TravelInfo from "./steps/TravelInfo";
import ReviewSubmit from "./steps/ReviewSubmit";

interface Props {
  mode: "create" | "update";
  applicationId?: string;
}

export default function ApplicationForm({ mode, applicationId }: Props) {
  const methods = useForm<UpdateETAApplicationInput>({
    resolver: zodResolver(updateETAApplicationSchema.partial()),
    shouldUnregister: false,

    // 🔴 REAL-TIME VALIDATION
    mode: "onTouched",
    reValidateMode: "onChange",
  });

  const { handleSubmit, reset, getValues } = methods;

  const [step, setStep] = useState(1);
  const totalSteps = 4;
  const [loading, setLoading] = useState(false);

  /* -------------------- PREFILL (UPDATE MODE) -------------------- */
  useEffect(() => {
    if (mode === "update" && applicationId) {
      (async () => {
        const res = await fetch(`/api/application/${applicationId}`);
        const data = await res.json();
        reset(data);
      })();
    }
  }, [mode, applicationId, reset]);

  /* -------------------- FINAL SUBMIT -------------------- */
  const onSubmit = async (data: UpdateETAApplicationInput) => {
    setLoading(true);

    // 🔒 STRICT VALIDATION (FINAL)
    try {
      createETAApplicationSchema.parse({
        firstName: data.firstName,
        lastName: data.lastName,
        dateOfBirth: data.dateOfBirth,
        gender: data.gender,
        nationality: data.nationality,
        email: data.email,
        passportNumber: data.passportNumber,
        passportIssueDate: data.passportIssueDate,
        passportExpiryDate: data.passportExpiryDate,
        issuingCountry: data.issuingCountry,
      });
    } catch (err) {
      alert("Please fix the highlighted errors before submitting.");
      setLoading(false);
      return;
    }

    const url =
      mode === "create"
        ? "/api/application/create"
        : "/api/application/update";

    const method = mode === "create" ? "POST" : "PUT";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        id: applicationId,
      }),
    });

    setLoading(false);
    alert("ETA Application submitted successfully");
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 bg-white p-6 rounded shadow"
      >
        {/* -------------------- STEPS -------------------- */}
        {step === 1 && <PersonalInfo />}
        {step === 2 && <PassportInfo />}
        {step === 3 && <TravelInfo />}
        {step === 4 && <ReviewSubmit values={getValues()} />}

        {/* -------------------- NAVIGATION -------------------- */}
        <div className="flex justify-between pt-4">
          {step > 1 && (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="px-4 py-2 border rounded"
            >
              Back
            </button>
          )}

          {step < totalSteps ? (
            <button
              type="button"
              onClick={() => setStep(step + 1)}
              className="px-4 py-2 bg-black text-white rounded"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-green-600 text-white rounded"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          )}
        </div>
      </form>
    </FormProvider>
  );
}
