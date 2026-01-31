const INDUSTRIES = [
    ["Accountant", "/accountant/", 12], ["Adult", "/adult/", 13], ["Architect", "/architect/", 14], ["Automotive", "/automotive/", 15], ["Aviation", "/aviation/", 16],
    ["B2B", null, 17], ["Bank", "/finance/banks/", 18], ["Cannabis & CBD", "/cannabis-cbd/", 19], ["Casino", "/casino/", 20], ["Chiropractor", "/chiropractor/", 21],
    ["Cleaning Services", "/cleaning/", 22], ["Construction", "/construction/", 23], ["Crypto", "/crypto/", 24], ["Cybersecurity", "/cyber-security/", 25], ["Dentist", "/dentist/", 26],
    ["Ecommerce", "/ecommerce/", 27], ["Education", "/education/", 28], ["Electrician", "/electrician/", 29], ["Energy", "/energy/", 30], ["Enterprise", "/enterprise/", 31],
    ["Entertainment", "/entertainment/", 32], ["Events", "/events/", 33], ["Fashion", "/fashion/", 34], ["Finance", "/finance/", 35], ["Financial Advisor", "/finance/adviser/", 36],
    ["Fitness & Nutrition", "/fitness-nutrition/", 37], ["Food", "/food-beverage/", 38], ["Government", "/public-sector/", 39], ["Healthcare", "/healthcare/", 40], ["Hotel", "/hotel/", 41],
    ["HVAC", "/hvac/", 42], ["Insurance", "/insurance/", 43], ["Interior Design", "/interior-design/", 44], ["Landscaping", "/landscaping/", 45], ["Law", "/law/", 46],
    ["Logistics", "/logistics/", 47], ["Luxury", "/luxury/", 48], ["Manufacturing", "/manufacturing/", 49], ["Mortgage Broker", "/finance/mortgage-broker/", 50], ["Moving Company", "/moving-company/", 51],
    ["Pharma", "/pharmaceutical/", 52], ["Plastic Surgery", "/plastic-surgery/", 53], ["Plumbing", "/plumbing/", 54], ["Real Estate", "/real-estate/", 55], ["Recruitment", "/recruitment/", 56],
    ["Retail", "/retail/", 57], ["Roofing", "/roofing/", 58], ["SaaS", "/saas/", 59], ["Small Business", "/small-business/", 60], ["Sports", "/sports/", 61],
    ["Technology", "/technology/", 62], ["Telecom", "/telecoms/", 63], ["Therapist", "/therapist/", 64], ["Tourism", "/travel/", 65], ["Wealth Management", "/finance/wealth-management/", 66], ["Yachting", "/yachting/", 67]
];

export const Industries = () => {
    return (
        <section className="relative w-full py-12 md:py-20 lg:py-24">
            <div className="mx-auto px-6 md:px-12 lg:px-20">
                <div className="mb-12 md:mb-16 text-center md:text-left">
                    <h2 className="text-3xl md:text-[40.8px] font-bold tracking-tight md:tracking-[-0.408px] leading-tight md:leading-[51px] mb-4">
                        Industries We Work With
                    </h2>
                    <p className="max-w-3xl text-sm md:text-base text-white/80 leading-relaxed mx-auto md:mx-0">
                        At Digibazzar, we extend our Digital
                        Marketing Agency in Varanasi expertise
                        across a diverse range of
                        industries, tailoring strategies
                        to meet the unique demands and
                        opportunities each sector
                        presents.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8 lg:gap-10">
                    {INDUSTRIES.map(([label, href, iconNum], index) => {
                        const content = (
                            <div className="flex items-center group">
                                <div className="flex-shrink-0 bg-white/5 p-2 rounded-lg group-hover:bg-amber-400/20 transition-colors">
                                    <img
                                        src={`https://c.animaapp.com/mkz11li0RsXIrT/assets/icon-${iconNum}.svg`}
                                        alt={`${label} icon`}
                                        className="h-8 w-8 md:h-10 md:w-10"
                                    />
                                </div>
                                <h3 className={`ml-4 font-bold tracking-tight text-sm md:text-base leading-snug transition-colors ${href ? "text-white group-hover:text-amber-400" : "text-white/60"}`}>
                                    {label} Digital Marketing
                                </h3>
                            </div>
                        );

                        if (href) {
                            return (
                                <a
                                    key={index}
                                    href={href as string}
                                    className="block"
                                >
                                    {content}
                                </a>
                            );
                        }

                        return (
                            <div key={index} className="block">
                                {content}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
