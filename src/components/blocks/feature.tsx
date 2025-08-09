interface Feature {
  title: string;
  description: string;
  image: string;
  link: string
}

interface FeatureProps {
  heading?: string;
  description?: string;
  feature1?: Feature;
  feature2?: Feature;
  feature3?: Feature;
  feature4?: Feature;
}

const Feature = ({
  heading = "Professional projects delivered by our development team.",
  description = "Our skilled team delivers high-quality, custom-built web solutions tailored to your needs. Using modern technologies and clean design principles, we focus on performance, user experience, and long-term value—ensuring every project drives real results for your business.",
  feature1 = {
    title: "Lanka Polysacks (Pvt) Ltd",
    description:
      "Creating intuitive user experiences with modern interface design principles and user-centered methodologies.",
    image: "./`lps-site.jpg",
    link: "https://lankapolysacks.lk",
  },
  feature2 = {
    title: "iWorld International (Pvt) Ltd",
    description:
      "Building websites that look and function perfectly across all devices and screen sizes.",
    image: "./iworld-site.png",
    link: "https://francium.lk/",
  },
  feature3 = {
    title: "Aqua Trading LLC",
    description:
      "Seamlessly incorporating your brand identity into every aspect of your website's design.",
    image: "./aqua-site.png",
    link: "https://aquatradingllc.com/",
  },
  feature4 = {
    title: "Dynamic General Trading",
    description:
      "Ensuring fast loading times and smooth performance through optimized code and assets.",
    image: "./dgt-site.png",
    link: "https://dynamicgeneraltrading.com/",
  },
}: FeatureProps) => {
  return (
    <section className="bg-gray-900 text-gray-200 ">
      <div className="container m-auto py-10">
        <div className="mb-10 flex flex-col items-center gap-6">
          <h1 className="hidden md:block text-center text-3xl font-semibold lg:max-w-3xl lg:text-5xl">
            {heading}
          </h1>
          <h1 className="md:hidden text-center text-3xl font-semibold lg:max-w-3xl lg:text-5xl">
              Projects delivered by our team
          </h1>
          <p className="text-center text-lg px-5 font-medium text-gray-400 md:max-w-4xl lg:text-xl">
            {description}
          </p>
          
        </div>
        <div className="relative flex justify-center">
          <div className="relative flex w-full flex-col border-gray-800 md:w-1/2 lg:w-full">
        
            <div className="relative flex flex-col lg:flex-row">
              
              <div className="border-muted2 flex flex-col justify-between border-b border-solid p-10 lg:w-3/5 lg:border-r lg:border-b-0">
                <a href={feature1.link} target="_blank" rel="noopener noreferrer">
                  <h2 className="md:text-4xl text-xl text-gray-300 py-2 font-semibold hover:scale-105 hover:underline transition-transform duration-300">{feature1.title}</h2>
                </a>
                <p className="text-gray-300">{feature1.description}</p>
                <img
                  src={feature1.image}
                  alt={feature1.title}
                  className="mt-8 aspect-[1.5] h-full w-full object-contain lg:aspect-[2.4]"
                />
                
              </div>


              <div className="flex flex-col justify-between p-10 lg:w-2/5">
              <a href={feature2.link} target="_blank" rel="noopener noreferrer">
                <h2 className="md:text-4xl text-xl py-2 text-gray-300 font-semibold hover:scale-105 hover:underline transition-transform duration-300">{feature2.title}</h2>
                
                <p className="text-gray-300">{feature2.description}</p>
                <img
                  src={feature2.image}
                  alt={feature2.title}
                  className=" h-full w-full object-contain pb-25"
                />

                </a>
              </div>

            </div>


            <div className="border-muted2 relative flex flex-col border-t border-solid lg:flex-row">
              <div className="border-muted2 flex flex-col justify-between border-b border-solid p-10 lg:w-2/5 lg:border-r lg:border-b-0">
                <a href={feature3.link} target="_blank" rel="noopener noreferrer">
               <h2 className="md:text-4xl text-xl py-2 text-gray-300 font-semibold hover:scale-105 hover:underline transition-transform duration-300">{feature3.title}</h2>
                </a>
                <p className="text-gray-300">{feature3.description}</p>
                <img
                  src={feature3.image}
                  alt={feature3.title}
                  className="mt-8 aspect-[1.45] h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-col justify-between p-10 lg:w-3/5">
                <a href={feature4.link} target="_blank" rel="noopener noreferrer">
                  <h2 className="md:text-4xl text-xl text-gray-300 py-2 font-semibold hover:scale-105 hover:underline transition-transform duration-300">{feature4.title}</h2>
                </a>
                <p className="text-gray-300">{feature4.description}</p>
                <img
                  src={feature4.image}
                  alt={feature4.title}
                  className="mt-8 aspect-[1.5] h-full w-full object-contain lg:aspect-[2.4]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature };
