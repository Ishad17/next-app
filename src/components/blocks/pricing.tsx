// components/Pricing.tsx

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const Pricing = () => {
  const pricingPlans = [
    {
      title: "Starter",
      price: "$100 to $200",
      // billing: "/month",
      features: [
        "Up to 5 Pages",
        "Mobile-Responsive Design",
        "Best SEO Optimization",
        "Best Speed Optimization",
        "WhatsApp, Email Integration ",
        "Contact & Inquiry Forms",
        "Delivery in 7–10 Business Days"
      ],
      borderColor: "border-zinc-700",
      buttonText: "Get Started",
    },
    {
      title: "Professional",
      price: "$400 to $600",
      // billing: "/month",
      features: [
        "Unlimited Pages",
        "Fully Custom UI/UX Design",
        "Advanced SEO & Speed Optimization",
        "Custom Functionality",
        "eCommerce Integration ",
        "User Authentication, Admin Pane",
        "Priority Support & Maintenance", 
      ],
      borderColor: "border-zinc-700",
      buttonText: "Get Started",
    },
    {
      title: "Custom Plan",
      price: "Starts at $200",
      billing: "",
      features: [
        "Full-Stack Development",
        "Custom UI/UX Design",
        "Real-Time Features (Chat, Dashboards)",
        "User Authentication",        
        "Advanced Database Architecture",
        "Ongoing Support & Maintenance",
        "Delivery Timeline Based on Scope",
      ],
      borderColor: "border-zinc-700",
      buttonText: "Contact Sales",
    },
  ];

  return (
     <section className="text-center bg-gray-200">
    <div className="container m-auto dark py-18 px-14">
     
        <h2 className="text-3xl font-bold">Pricing Plans</h2>
        <p className="text-xl pt-1">Choose the plan that's right for you</p>
    

      {/* <div className="w-40 mx-auto mt-6">
        <Tabs defaultValue="monthly" className="w-full">
          <TabsList className="justify-center">
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="yearly">Yearly</TabsTrigger>
          </TabsList>
        </Tabs>
      </div> */}

      <section className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-8 mt-8">
        {pricingPlans.map((plan, index) => (
          <Card
            key={index}
            className={`w-80 flex bg-teal-600 text-gray-900 flex-col py-10 ${plan.borderColor}`}
          >
            <CardHeader>
              <CardTitle className="text-lg text-zinc-700 dark:text-zinc-100">
                {plan.title}
              </CardTitle>
              <div className="flex gap-0.5">
                <h3 className="text-3xl font-bold">{plan.price}</h3>
                <span className="flex flex-col justify-end text-sm mb-1">
                  {plan.billing}
                </span>
              </div>
              <p className="text-sm text-gray-foreground pt-1.5 h-12">
                {plan.title === "Basic"
                  ? "For individuals, freelancers, and small businesses"
                  : plan.title === "Pro"
                  ? "Perfect for growing businesses looking to scale their web presence"
                  : "Dedicated support and infrastructure to fit your needs"}
              </p>
            </CardHeader>

            <CardContent className="flex flex-col h-48 gap-2 pt-0">
              {plan.features.map((feature, i) => (
                <div key={i} className="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-red-800"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  <p className="text-sm text-zinc-700 dark:text-zinc-800">
                    {feature}
                  </p>
                </div>
              ))}
            </CardContent>
            <div className="pl-12">
                <Button className="w-4/5 relative hover:scale-105">
                  <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#95e9de] to-[#017e6d] opacity-75 blur" />
                  {plan.buttonText}
                </Button>
              </div>
          </Card>
        ))}
      </section>
    </div>
      </section>
  );
};

export default Pricing;