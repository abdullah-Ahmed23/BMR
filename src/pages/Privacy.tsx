import React from "react";

type PrivacyProps = {
  companyName?: string;
  contactEmail?: string;
  website?: string;
};

export default function PrivacyDisclaimer({
  companyName = "BMR Growth",
  contactEmail = "privacy@bmrgrowth.com",
  website = "www.bmrgrowth.com",
}: PrivacyProps) {
  return (
    <section className="max-w-4xl mx-auto p-6 md:p-10 bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-100">
      <div className="flex items-start gap-4">
        <div className="flex-none w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 grid place-items-center text-white text-2xl font-bold shadow-lg">
          {companyName.split(" ").map(w => w[0]).slice(0,2).join("")}
        </div>
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Privacy Disclaimer</h2>
          <p className="mt-2 text-sm text-slate-600">How {companyName} collects, uses, and protects your personal information.</p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <article className="p-4 rounded-xl border border-gray-100 bg-white">
          <h3 className="font-medium text-lg text-slate-800">1. Information We Collect</h3>
          <p className="mt-2 text-sm text-slate-600">We may collect information you provide directly (name, email, phone, messages) and technical data (IP address, browser, analytics) to deliver and improve our services.</p>
        </article>

        <article className="p-4 rounded-xl border border-gray-100 bg-white">
          <h3 className="font-medium text-lg text-slate-800">2. How We Use Your Information</h3>
          <ul className="mt-2 text-sm text-slate-600 list-inside list-disc space-y-1">
            <li>To provide, operate, and maintain our services.</li>
            <li>To communicate about inquiries, updates, and offers.</li>
            <li>To secure and optimize site performance.</li>
          </ul>
        </article>

        <article className="p-4 rounded-xl border border-gray-100 bg-white">
          <h3 className="font-medium text-lg text-slate-800">3. Data Sharing</h3>
          <p className="mt-2 text-sm text-slate-600">We do not sell or rent personal information. We may share data with trusted service providers when necessary to deliver services, and when required by law.</p>
        </article>

        <article className="p-4 rounded-xl border border-gray-100 bg-white">
          <h3 className="font-medium text-lg text-slate-800">4. Cookies & Tracking</h3>
          <p className="mt-2 text-sm text-slate-600">We use cookies and similar technologies to enhance your experience. You can manage cookie preferences in your browser.</p>
        </article>

        <article className="md:col-span-2 p-4 rounded-xl border border-gray-100 bg-white">
          <h3 className="font-medium text-lg text-slate-800">5. Your Rights</h3>
          <p className="mt-2 text-sm text-slate-600">You can request access, correction, or deletion of your personal data. To exercise these rights, contact us at <a href={`mailto:${contactEmail}`} className="text-indigo-600 underline">{contactEmail}</a>.</p>
        </article>

        <article className="md:col-span-2 p-4 rounded-xl border border-gray-100 bg-white">
          <h3 className="font-medium text-lg text-slate-800">6. Updates</h3>
          <p className="mt-2 text-sm text-slate-600">We may update this disclaimer from time to time. The latest version will be published at {website}.</p>
        </article>
      </div>

      <footer className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="text-sm text-slate-600">&copy; {new Date().getFullYear()} {companyName}. All rights reserved.</div>

        <div className="flex items-center gap-3">
          <a href={`mailto:${contactEmail}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-medium shadow-sm hover:scale-[1.01] transition-transform">Contact</a>
          <a href={`https://${website.replace(/^https?:\/\//,"")}`} target="_blank" rel="noreferrer" className="text-sm text-slate-500 underline">Visit website</a>
        </div>
      </footer>
    </section>
  );
}
