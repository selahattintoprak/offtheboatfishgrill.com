export default [
  {
    title: "APPETIZERS",
    description: null,
    items: [
      { title: "CHIPS & SALSA", description: null, price: "$3.95" },
      { title: "CHIPS & GUAC (6 oz)", description: null, price: "$6.95" },
      { title: "", description: null, price: "" },
      { title: "", description: null, price: "" },

    ],
    footer:
      "Additional charges for those using third party maintenance vendors such as ARI, Element, GE Capital, ect..",
  },
  {
    title: "Emergency Roadside Service",
    description: "Work performed roadside or at your location",
    items: [
      { title: "Service Truck Fee", description: "Applied to all service calls", price: "$70" },
      {
        title: "Emergency Road Service Labor Rate",
        description: "Weekends and Holidays 3 Hour Minimum",
        price: "$145/hr",
      },
    ],
    footer: (
      <>
        <h4 style={{ color: "red" }} className="text-center">
          **24 / 7 / 365 Available for our Fleet Clients**
        </h4>{" "}
        Our Fleet clients can rest assured we have their backs at all times, any time of day, any day of the year
        including weekends and Holidays! (Above Rates Apply)
      </>
    ),
  },
  {
    title: "Inspections",
    description: "Pricing does not include repairs if required",
    items: [
      { title: "Federal DOT Inspection", description: "", price: "$115" },
      { title: "Missouri State Safety Inspection", description: "", price: "$12" },
      { title: "GVIP Emissions Test", description: "", price: "$24" },
      { title: "IDOD Inspection", description: "", price: "$1O" },
      {
        title: "Pre-Buy Inspection",
        description:
          "Determines if the vehicle is safe to drive on public roadways.  Additional charge for computer diagnostic health report and/or further in depth component inspection(s)",
        price: "$115",
      },
    ],
  },
  {
    title: "Diagnostic Fees",
    description: "We charge the appropriate hourly rate for all diagnostics. See above to determine your rate.",
    items: [
      {
        title: "Computer Hookup",
        description: "This fee is in addition to our hourly rate. See above to determine your rate.",
        price: "$145",
      },
    ],
  },
  {
    title: "Welding and Fabrication",
    description: "(Supplies and Materials not included)",
    items: [
      { title: "Hourly Rate", description: "", price: "$115/hr" },
      { title: "Hydraulic Hose Crimp", description: "(Price does not include hourly labor rate)", price: "$20/end" },
    ],
  },
];
