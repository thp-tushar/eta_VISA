// src/app/application/[id]/page.tsx

import { prisma } from "@/lib/prisma";

interface PageProps {
  params: {
    id: string;
  };
}

export default async function ViewApplicationPage({ params }: PageProps) {
  const application = await prisma.eTAApplication.findUnique({
    where: { id: params.id },
  });

  if (!application) {
    return <p className="p-6">Application not found</p>;
  }

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">
        ETA Application Details
      </h1>

      <div className="space-y-2">
        <p><strong>First Name:</strong> {application.firstName}</p>
        <p><strong>Last Name:</strong> {application.lastName}</p>
        <p><strong>Passport Number:</strong> {application.passportNumber}</p>
        <p><strong>Status:</strong> {application.status}</p>
      </div>
    </main>
  );
}
