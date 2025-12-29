"use client";

import { UpdateETAApplicationInput } from "@/lib/validators/application";

interface Props {
  values: UpdateETAApplicationInput;
}

export default function ReviewSubmit({ values }: Props) {
  return (
    <div className="space-y-3">
      <h2 className="text-xl font-semibold">Review & Submit</h2>

      <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
        {JSON.stringify(values, null, 2)}
      </pre>

      <p className="text-sm text-gray-600">
        Please review all details before final submission.
      </p>
    </div>
  );
}
