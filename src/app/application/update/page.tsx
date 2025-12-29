// src/app/application/update/page.tsx

import ApplicationForm from "@/components/ApplicationForm";

interface UpdatePageProps {
  searchParams: {
    id?: string;
  };
}

export default function UpdateApplicationPage({ searchParams }: UpdatePageProps) {
  const applicationId = searchParams.id;

  if (!applicationId) {
    return <p className="p-6">Application ID is required</p>;
  }

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">
        Update ETA Application
      </h1>

      <ApplicationForm
        mode="update"
        applicationId={applicationId}
      />
    </main>
  );
}
