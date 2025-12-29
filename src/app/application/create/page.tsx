// src/app/application/create/page.tsx

import ApplicationForm from "@/components/ApplicationForm";

export default function CreateApplicationPage() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">
        Apply for ETA
      </h1>

      <ApplicationForm mode="create" />
    </main>
  );
}
