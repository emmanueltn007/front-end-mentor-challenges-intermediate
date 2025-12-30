function FeaturesItems () {
    const features = [
        {
            index: "01", 
            heading: "Track company-wide progress", 
            description: "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."},
        {
            index: "02",
            heading: "Advanced built-in reports",
            description: "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."
        },
        {
            index: "03",
            heading: "Everything you need in one place",
            description: "Everything you need in one place Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution."
        }
    ]
    return (
        <div className="flex flex-col gap-8 max-md:pl-8">
            {features.map((feature) => {
                return (
                    <div className="flex flex-col gap-4">
                        <div className="max-md:bg-[hsl(13,100%,96%)] flex items-center gap-4 text-lg rounded-l-3xl">
                            <span className="bg-[hsl(12,88%,59%)] text-white px-4 py-1 rounded-3xl">
                                {feature.index}
                            </span>
                            <span className="text-[hsl(228,39%,23%)] font-semibold">
                                {feature.heading}
                            </span>
                        </div>
                        <p className="md:ml-18 text-gray-500 font-medium max-md:pr-8">
                            {feature.description}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}

export default FeaturesItems