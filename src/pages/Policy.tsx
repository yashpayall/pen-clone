import { useParams } from "react-router-dom";

export default function Policy() {
  const { type } = useParams();
  const titleMap: any = {
    shipping: "Shipping Policy",
    returns: "Returns Policy",
    privacy: "Privacy Policy"
  };
  const title = titleMap[type || ""] || "Policy";

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <p className="text-gray-700">
        This is our {title.toLowerCase()}. All content is original and provided as sample text.
        Replace with your own policies to suit your store and legal requirements.
      </p>
    </main>
  );
}
