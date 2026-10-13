import { ServiceItem, Testimonial, JobOpening, CaseStudy } from '../types';

export const ASSET_IMAGES = {
  heroSwitchgear: '/src/assets/images/hero_switchgear_1791525099227.jpg',
  serviceElec: '/src/assets/images/service_elec_round_1791525312722.jpg',
  serviceHvac: '/src/assets/images/service_hvac_round_1791525368677.jpg',
  serviceControls: '/src/assets/images/service_controls_round_1791525429876.jpg',
  serviceGenerators: '/src/assets/images/service_generators_round_1791525496669.jpg',
  serviceThermal: '/src/assets/images/service_thermal_round_1791525569797.jpg',
  bannerMachinery: '/src/assets/images/banner_chiller_machinery_1791525208595.jpg',
  archPanelWork: '/src/assets/images/arch_panel_work_1791525131812.jpg',
  bannerTeamHire: '/src/assets/images/banner_team_hire_1791525260476.jpg',
  archCleanPlant: '/src/assets/images/arch_clean_plant_1791525166935.jpg',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'commercial-electrical',
    title: 'Commercial Electrical',
    tagline: 'High-voltage distribution, panel buildouts & code auditing',
    description: 'Wiring, switchgear, distribution, and code auditing',
    image: ASSET_IMAGES.serviceElec,
    capabilities: [
      'Main Switchgear and 480V/277V Distribution',
      'Transformers & Heavy Busway Assemblies',
      'Industrial Lighting Retrofits & Emergency Systems',
      'NEC Code Compliance & Municipal Permitting',
      'Branch Circuit Distribution for Heavy Machinery'
    ],
    specs: [
      { label: 'Voltage Class', value: 'Up to 15kV Medium Voltage' },
      { label: 'Arc Flash Rating', value: 'NFPA 70E Category 4 Compliant' },
      { label: 'Licensing', value: 'FL EC13010299 / GA EN215151' }
    ],
    certifications: ['Master Electrician On-Staff', 'NFPA 70E Certified', 'OSHA 30']
  },
  {
    id: 'mechanical-hvac',
    title: 'Mechanical & HVAC',
    tagline: 'Engineered cooling, boiler arrays & process hydronics',
    description: 'Chillers, boilers, rooftop RTUs, and hydronic piping',
    image: ASSET_IMAGES.serviceHvac,
    capabilities: [
      'Multi-ton Water-Cooled & Air-Cooled Chillers',
      'Packaged Rooftop Units (RTUs) & Make-Up Air',
      'Welded & Grooved Hydronic Loop Piping',
      'High-Pressure Industrial Steam & Boiler Plants',
      'Variable Refrigerant Flow (VRF) Architectures'
    ],
    specs: [
      { label: 'Capacity Range', value: '5 Tons to 1,200+ Tons Chilled Water' },
      { label: 'Piping Standards', value: 'ASME B31.1 & B31.9 Power Piping' },
      { label: 'Refrigerant Recovery', value: 'EPA Universal Section 608' }
    ],
    certifications: ['Universal EPA Certified', 'ASME Certified Welders', 'Certified Air Balancers']
  },
  {
    id: 'automation-controls',
    title: 'Automation & Controls',
    tagline: 'SCADA architectures, custom panel builds & telemetry',
    description: 'PLC integration, SCADA, and building automation',
    image: ASSET_IMAGES.serviceControls,
    capabilities: [
      'Allen-Bradley, Siemens & Modicon PLC Programming',
      'Building Automation Systems (BAS) & BACnet/IP',
      'UL 508A Industrial Control Panel Fabrication',
      'SCADA Integration, Historians & Remote HMI',
      'Variable Frequency Drive (VFD) Calibration'
    ],
    specs: [
      { label: 'Protocols', value: 'BACnet, Modbus TCP, EtherNet/IP, Profinet' },
      { label: 'Panel Rating', value: 'UL 508A Enclosed Control Panels' },
      { label: 'System Uptime', value: 'Redundant Hot-Standby PLC Arrays' }
    ],
    certifications: ['CSIA Member', 'Rockwell Recognized Integrator', 'Niagara 4 Certified']
  },
  {
    id: 'critical-generators',
    title: 'Critical Generators',
    tagline: 'Mission-critical prime & standby power generation',
    description: 'Standby diesel, automatic transfer, and UPS arrays',
    image: ASSET_IMAGES.serviceGenerators,
    capabilities: [
      'Standby Diesel & Natural Gas Genset Turnkey Installs',
      'Automatic Transfer Switches (ATS) & Paralleling Gear',
      'Uninterruptible Power Supply (UPS) Flywheel & Battery',
      'Load Bank Commissioning & 4-Hour Full-Load Burns',
      'Fuel Delivery & Remote Telemetry Monitoring'
    ],
    specs: [
      { label: 'Power Rating', value: '100kW to 3.5MW Prime/Standby' },
      { label: 'Transfer Time', value: '< 10 Seconds Emergency Class 1' },
      { label: 'Fuel Polishing', value: 'Dual-Stage Filtration & Tank Monitoring' }
    ],
    certifications: ['EGSA Certified Technicians', 'NFPA 110 Level 1 Compliant', 'Cummins / CAT Trained']
  },
  {
    id: 'thermal-diagnostics',
    title: 'Thermal Diagnostics',
    tagline: 'Non-invasive predictive infrared maintenance',
    description: 'Infrared thermography, NFPA 70E, and safety audits',
    image: ASSET_IMAGES.serviceThermal,
    capabilities: [
      'Calibrated FLIR High-Resolution Infrared Surveys',
      'NFPA 70B & 70E Predictive Thermal Reports',
      'Harmonic Distortion & Power Quality Power Logging',
      'Switchgear Hot-Spot Isolation & Torque Auditing',
      'Insurance-Mandated Under-Load Electrical Inspections'
    ],
    specs: [
      { label: 'Thermography Level', value: 'ITC Level II & Level III Thermographers' },
      { label: 'Thermal Sensitivity', value: '< 30mK @ 30°C High-Precision' },
      { label: 'Reporting Standards', value: 'ASTM E1934 Standard Guide for IR Inspections' }
    ],
    certifications: ['ITC Level II/III Certified', 'NFPA 70E Qualified Persons', 'NETA Certified Field Techs']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    rating: 5,
    quote: 'Action brought the diagnostic firepower to resolve a persistent voltage sag that three prior contractors couldn’t pinpoint. Their crew worked through the night to safeguard our next morning production shift.',
    author: 'David K.',
    role: 'Manufacturing Plant Operations Manager',
    company: 'Precision Aerostructures Group'
  },
  {
    id: 'test-2',
    rating: 5,
    quote: 'Their communication and schedule adherence are unmatched in commercial contracting. The mechanical and electrical coordination on our 140,000 sq. ft. build was completely frictionless.',
    author: 'Sarah M.',
    role: 'Senior Project Director, Regional GC',
    company: 'Harborstone Construction Management'
  },
  {
    id: 'test-3',
    rating: 5,
    quote: 'The professionalism of their field crew set a benchmark on our job site. Clean, safety-conscious, and thoroughly skilled across heavy chiller piping and main switchgear panels.',
    author: 'Robert P.',
    role: 'Regional Facilities Director',
    company: 'St. Johns Life Science Campus'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-1',
    title: '140,000 Sq. Ft. Cold Storage Logistics Hub',
    client: 'Atlantic Supply Chain Terminal',
    facilityType: 'Industrial Cold Storage & Distribution',
    scope: '3,000A Main Switchgear, Ammonia Chiller Electrical Interlocks, 1.5MW Standby Backup Generator with Dual ATS',
    metric: '0 Hours',
    metricLabel: 'Unscheduled Cold-Chain Downtime',
    summary: 'Turnkey electrical and mechanical integration under a strict 90-day fast-track schedule before perishable food inventory arrival.',
    details: [
      'Installed 3,000A main service with seismic bracing and stainless raceways for washdown areas.',
      'Constructed dual ATS paralleling system ensuring full warehouse transfer in 7.2 seconds.',
      'Achieved zero punch-list items on Day 1 municipal inspection.'
    ]
  },
  {
    id: 'case-2',
    title: 'Regional Healthcare Center Chiller Modernization',
    client: 'Baptist Health Pavilion',
    facilityType: 'Critical Healthcare Infrastructure',
    scope: 'Two 650-Ton Magnetic Bearing Centrifugal Chillers, Variable Speed Hydronic Loop, Hospital Grade Controls',
    metric: '-28%',
    metricLabel: 'Monthly Energy Consumption',
    summary: 'Phased replacement of aging chillers while maintaining active cooling to sterile surgical suites with zero ambient noise disruption.',
    details: [
      'Executed crane lifts and rigging on weekend nights to avoid helipad and ambulance bay interference.',
      'Engineered pre-fabricated grooved pipe spool pieces to compress cutover window from 48 hours to 14 hours.',
      'Commissioned BACnet/IP controls mapped directly into hospital central monitoring station.'
    ]
  },
  {
    id: 'case-3',
    title: 'Fintech Tier III Data Center Emergency Switchgear Overhaul',
    client: 'Coastal Capital Datacenter',
    facilityType: 'Financial Transaction Data Center',
    scope: '480V Main Distribution Board Replacement, Static Transfer Switches, Infrared Audit & Arc Flash Mitigation',
    metric: '100%',
    metricLabel: 'Transaction Continuity Maintained',
    summary: 'Emergency high-voltage breaker failure resolved under active load using bypass switchgear and Level 4 NFPA 70E live protocols.',
    details: [
      'Dispatched emergency MEP crew within 38 minutes of customer initial dispatch call.',
      'Maintained redundant UPS feeds without a single dropped packet across financial transaction networks.',
      'Delivered full thermographic audit and arc flash labels across all 42 distribution panels.'
    ]
  }
];

export const CAREER_ROLES: JobOpening[] = [
  {
    id: 'role-1',
    title: 'Commercial Journeyman Electrician',
    type: 'Full-Time / Direct Hire',
    location: 'Jacksonville, FL & Regional Job Sites',
    experience: '4+ Years Commercial Experience',
    compensation: '$34.00 – $42.00 / hr + Overtime & Per Diem',
    description: 'Lead electrical installations on high-profile commercial, healthcare, and industrial projects. Read architectural blueprints, bend EMT/Rigid conduit up to 4", pull heavy wire, and terminate main distribution switchgear.',
    requirements: [
      'Valid Journeyman Electrician license or verifiable 4+ years commercial commercial field experience',
      'Proficiency with high-voltage switchgear, motor control centers (MCC), and 480V distribution',
      'Active OSHA 10 or OSHA 30 card (Action will provide renewal)',
      'Clean driving record and ability to pass drug screen'
    ],
    benefits: [
      '100% Company-Paid Medical, Dental & Vision for employee',
      '401(k) with 5% immediate company match',
      'Late-model company service van with fuel card & toll transponder',
      'Annual tool allowance ($800/yr) & boot reimbursement',
      'Paid continuous education and Master Electrician prep courses'
    ]
  },
  {
    id: 'role-2',
    title: 'Master Commercial Mechanical / Chiller Tech',
    type: 'Full-Time / Direct Hire',
    location: 'Jacksonville, FL / NE Florida',
    experience: '5+ Years Commercial Chiller Experience',
    compensation: '$38.00 – $48.00 / hr + Truck & Benefits',
    description: 'Diagnose, commission, and overhaul commercial water-cooled chillers, rooftop RTUs, cooling towers, and boiler systems. Work with leading brands including Trane, York, Carrier, and Daikin.',
    requirements: [
      'Universal EPA Section 608 Certification required',
      'Demonstrated experience with centrifugal, screw, and magnetic bearing chillers',
      'Strong diagnostic skills with hydronic pumping systems and VFD drives',
      'Clean driving record'
    ],
    benefits: [
      'Top-of-market hourly wages with guaranteed 40-hour weeks year-round',
      'Company truck equipped with vacuum pumps, recovery machines, and specialized tools',
      'Comprehensive health coverage starting on Day 30',
      'Annual factory training in manufacturer facilities'
    ]
  },
  {
    id: 'role-3',
    title: 'Industrial Automation & PLC Controls Specialist',
    type: 'Full-Time / Direct Hire',
    location: 'Northeast Florida',
    experience: '3+ Years Industrial Controls',
    compensation: '$85,000 – $105,000 / yr Salary',
    description: 'Design, program, and commission Allen-Bradley / Siemens PLC logic, SCADA interfaces, and building automation protocols across regional manufacturing and logistics clients.',
    requirements: [
      'Experience with RSLogix 5000 / Studio 5000, FactoryTalk, or Siemens TIA Portal',
      'Ability to read and modify electrical control schematics',
      'Knowledge of VFDs, instrumentation (4-20mA, 0-10V), and industrial networks'
    ],
    benefits: [
      'Flexible schedule, modern engineering laptop & software licenses',
      '401(k) retirement plan with company match',
      'Quarterly performance bonuses based on project milestone completions'
    ]
  },
  {
    id: 'role-4',
    title: 'Apprentice Electrician / MEP Trainee',
    type: 'Full-Time / Paid Training',
    location: 'Jacksonville, FL',
    experience: 'Entry-Level / 0–2 Years',
    compensation: '$20.00 – $26.00 / hr (Tiered Scale)',
    description: 'Earn while you learn. Pair with veteran journeymen on real commercial job sites. We pay 100% of your accredited 4-year electrical or mechanical apprenticeship tuition.',
    requirements: [
      'High school diploma or GED equivalent',
      'Strong work ethic, reliability, and passion for hands-on technical trades',
      'Valid driver license and dependable transportation'
    ],
    benefits: [
      '100% Company-funded ABC or NEFBA 4-Year Apprenticeship tuition',
      'Guaranteed hourly pay raises with each completed curriculum semester',
      'Full healthcare, retirement, and safety gear package from Day 1'
    ]
  }
];

export const SAFETY_STATS = [
  { value: '0.68', label: 'Experience Mod Rate (EMR)', sub: 'Top 5% in industry benchmark' },
  { value: '1,420+', label: 'Days Without Lost-Time Incident', sub: 'Audited across all field crews' },
  { value: '100%', label: 'NFPA 70E Safety Certified Crews', sub: 'Annual high-voltage re-certification' },
  { value: 'OSHA 30', label: 'Supervisor Standard', sub: 'Every foreman holds OSHA 30 certification' }
];
