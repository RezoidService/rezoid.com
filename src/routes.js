import AboutUs from "layouts/pages/landing-pages/about-us";
import AcRepair from "pages/Presentation/Services/Appliance/ACRepair";
import RefrigeratorRepair from "pages/Presentation/Services/Appliance/RefrigeratorRepair";
import WashingMachineRepair from "pages/Presentation/Services/Appliance/WashingMachineRepair";
import WaterPurifier from "pages/Presentation/Services/Appliance/WaterPurifier";
import BathroomCleaning from "pages/Presentation/Services/HouseKeeping/BathroomCleaning";
import HomeCleaning from "pages/Presentation/Services/HouseKeeping/HomeCleaning";
import KitchenCleaning from "pages/Presentation/Services/HouseKeeping/KitchenCleaning";
import OfficeCleaning from "pages/Presentation/Services/HouseKeeping/OfficeCleaning";
import SofaCleaning from "pages/Presentation/Services/HouseKeeping/Sofa Cleaning";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import CarpetCleaning from "pages/Presentation/Services/HouseKeeping/CarpetCleaning";
import GeneralPestControl from "pages/Presentation/Services/PestControl/GeneralPestControl";
import CockroachPestControl from "pages/Presentation/Services/PestControl/CockroachPestControl";
import TermiteControl from "pages/Presentation/Services/PestControl/TermiteControl";
import RodentControl from "pages/Presentation/Services/PestControl/RodentControl";
import MosquitoControl from "pages/Presentation/Services/PestControl/MosquitoControl";
import OtherPestControl from "pages/Presentation/Services/PestControl/OtherPestControl";
import HealthInsurance from "pages/Presentation/Services/Insurance/HealthInsurance";
import LifeInsurance from "pages/Presentation/Services/Insurance/LifeInsurance";
import GeneralInsurance from "pages/Presentation/Services/Insurance/GeneralInsurance";
import VehicleInsurance from "pages/Presentation/Services/Insurance/VehicleInsurance";
import Loans from "pages/Presentation/Services/RestofServices/Loans";
import ElectricalWorks from "pages/Presentation/Services/RestofServices/ElectricalWorks";
import Interiors from "pages/Presentation/Services/RestofServices/Interiors";
import RealEstate from "pages/Presentation/Services/RestofServices/RealEstate";
import Painting from "pages/Presentation/Services/RestofServices/Painting";
import HomeStay from "pages/Presentation/Services/RestofServices/HomeStay";
import Renovation from "pages/Presentation/Services/RestofServices/Renovation";


const routes = [

  {
    name: "About us",
    route: "/sections/page-sections/features",
    component: <AboutUs />,

  },
  {
    name: "Service",
    dropdown: true,
    collapse: [
      {
        name: "Washing machine repair",
        route: "/service/washing-machine-repair",
        component: <WashingMachineRepair />,
      },
      {
        name: "Refrigerator Repair",
        route: "/service/refrigerator-repair",
        component: <RefrigeratorRepair />,
      },
      {
        name: "AC Repair",
        route: "/service/ac-repair",
        component: <AcRepair />,
      },
      {
        name: "Water Purifier",
        route: "/service/water-purifier",
        component: <WaterPurifier />,
      },
      {
        name: "Kitchen Cleaning",
        route: "/service/kitchen-cleaning",
        component: <KitchenCleaning />,
      },
      {
        name: "Office Cleaning",
        route: "/service/office-cleaning",
        component: <OfficeCleaning />,
      },
      {
        name: "Bathroom Cleaning",
        route: "/service/bathroom-cleaning",
        component: <BathroomCleaning />,
      },
      {
        name: "Home Cleaning",
        route: "/service/home-cleaning",
        component: <HomeCleaning />,
      },
      {
        name: "Sofa Cleaning",
        route: "/service/sofa-cleaning",
        component: <SofaCleaning />,
      },
      {
        name: "Carpet Cleaning",
        route: "/service/carpet-cleaning",
        component: <CarpetCleaning />,
      },
      {
        name: "General Pest Control",
        route: "/service/general-pest-control",
        component: <GeneralPestControl />,
      },
      {
        name: "Cockroach Pest Control",
        route: "/service/cockroach-pest-control",
        component: <CockroachPestControl />,
      },
      {
        name: "Termite Control",
        route: "/service/termite-control",
        component: <TermiteControl />,
      },
      {
        name: "Rodent Control",
        route: "/service/rodent-control",
        component: <RodentControl />,
      },
      {
        name: "Mosquito Control",
        route: "/service/mosquito-control",
        component: <MosquitoControl />,
      },
      {
        name: "Other Pest Control",
        route: "/service/other-pest-control",
        component: <OtherPestControl />,
      },
      {
        name: "Health Insurance",
        route: "/service/health-insurance",
        component: <HealthInsurance />,
      },
      {
        name: "Life Insurance",
        route: "/service/life-insurance",
        component: <LifeInsurance />,
      },
      {
        name: "General Insurance",
        route: "/service/general-insurance",
        component: <GeneralInsurance />,
      },
      {
        name: "Vehicle Insurance",
        route: "/service/vehicle-insurance",
        component: <VehicleInsurance />,
      },
      {
        name: "Loans",
        route: "/service/Loans",
        component: <Loans />,
      },
      {
        name: "Electrical Works",
        route: "/service/electrical-works",
        component: <ElectricalWorks />,
      },
      {
        name: "Interiors",
        route: "/service/interiors",
        component: <Interiors />,
      },
      {
        name: "Real Estate",
        route: "/service/real-estate",
        component: <RealEstate />,
      },
      {
        name: "Painting",
        route: "/service/Painting",
        component: <Painting />,
      },
      {
        name: "Home Stay",
        route: "/service/home-stay",
        component: <HomeStay />,
      },
      {
        name: "Renovation",
        route: "/service/renovation",
        component: <Renovation />,
      },

    ],
  },
  {
    name: "Contact",
    route: "/sections/page-sections/",
    component: <ContactUs />,
  },
];

export default routes;