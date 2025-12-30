import FeaturesItems from "./FeaturesItems";

function FeaturesSection() {
  return (
    <section className="flex flex-col md:grid md:grid-cols-2 gap-8 md:px-16 pb-16">
      <div className="max-md:px-8">
        <h3 className="text-3xl text-[hsl(228,39%,23%)] font-bold">
          What's different about Manage?
        </h3>
        <p className="text-gray-500 font-medium">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern-digital product
          teams.
        </p>
      </div>
      <FeaturesItems />
    </section>
  );
}

export default FeaturesSection;
