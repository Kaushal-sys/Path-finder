import { DashboardData } from './types';

export const initialDashboardData: DashboardData = {
  readinessPercent: 64, // Interactive initial readiness score as specified
  percentile: 88,
  location: "Boston, MA Hub",
  track: "Astrophysics Professor / Research Director",
  summary: "As an elite researcher in Observational Space Dynamics, your theoretical modeling base is world-class. Translating telescope telemetry and signal processing to enterprise cloud grids positions you at the forefront of defense tech and aerospace analytics.",
  skills: [
    {
      name: "Observational Spectroscopy Assets",
      matchPercent: 95,
      status: "success",
      description: "Mastered across multiple observatory runs. Direct crossover with multi-spectral earth imaging diagnostic systems."
    },
    {
      name: "High-Performance Numerical Physics",
      matchPercent: 88,
      status: "success",
      description: "Strong foundation in N-body gravity simulations. Easy conversion to computational aerodynamics and quantitative models."
    },
    {
      name: "Distributed Spark & telemetry Clusters",
      matchPercent: 40,
      status: "warning",
      description: "Understand parallel algorithms in theory. Needs transition from local supercomputer scripts to scalable Kafka / Spark pipelines."
    },
    {
      name: "Cloud MLOps & Kubernetes Pipelines",
      matchPercent: 24,
      status: "gap",
      description: "Critical skill gap for industrial roles. Focus on automated container workloads, secure VPC gateways, and telemetry stacks."
    }
  ],
  trends: [
    {
      name: "Orbital Constellation Analytics",
      demandChange: "+180%",
      demandDirection: "up",
      category: "Aerospace Systems",
      description: "Surge in routing automation and real-time payload telemetry classification programs."
    },
    {
      name: "Quantum Simulation Modeling",
      demandChange: "+125%",
      demandDirection: "up",
      category: "Quantum Computing",
      description: "Accelerating adoption of spatial-grid solvers to replace traditional finite-difference methods."
    },
    {
      name: "Multi-Spectral Image AI",
      demandChange: "+148%",
      demandDirection: "up",
      category: "Computer Vision",
      description: "High industrial demand for satellite terrain transformations analytics and atmospheric modeling."
    },
    {
      name: "Signal Processing Diagnostics",
      demandChange: "+95%",
      demandDirection: "up",
      category: "RF Communications",
      description: "Continuous signal classifier pipelines for high-gain orbital transceivers."
    }
  ],
  activities: [
    {
      id: "act-astro-1",
      type: "optimization",
      title: "Academic Resume Pivot Active",
      subtitle: "Successfully optimized CV for high-tech satellite communications",
      time: "1 hour ago",
      timestamp: Date.now() - 60 * 60 * 1000
    },
    {
      id: "act-astro-2",
      type: "verification",
      title: "Skills Verified: Spectral Analytics",
      subtitle: "Verified expert calibration in multi-spectral optical instruments",
      time: "Yesterday • Verified",
      timestamp: Date.now() - 24 * 60 * 60 * 1000
    },
    {
      id: "act-astro-3",
      type: "optimization",
      title: "Credential Assessment Rendered",
      subtitle: "Parsed 12 published journal papers with matching index of 92/100",
      time: "2 days ago",
      timestamp: Date.now() - 48 * 60 * 60 * 1000
    }
  ],
  jobs: [
    {
      id: "job-astro-1",
      title: "Data Scientist (Aerospace Analytics)",
      company: "SpaceData Corp",
      location: "Boston, MA (Hybrid)",
      type: "Full-Time",
      salary: "$165,000 - $210,050",
      matchPercent: 82,
      description: "Coordinate mathematical model transformations on flight payloads. Integrate telemetry processors with active on-board RF receivers.",
      skills: ["Telemetry Parsing", "Spectrometry Assets", "Python", "Aero Simulation"],
      applied: false
    },
    {
      id: "job-astro-2",
      title: "Senior Quantum Algorithm Instructor",
      company: "TechFirm Network",
      location: "Cambridge, MA",
      type: "Remote / Contract",
      salary: "$140,000 - $185,000",
      matchPercent: 78,
      description: "Deliver curriculum frameworks on spatial simulation matrices and tensor solvers on distributed execution nodes.",
      skills: ["Quantum Modeling", "Numerical Physics", "High-Performance Clusters"],
      applied: false
    },
    {
      id: "job-astro-3",
      title: "Planetarium Education Specialist",
      company: "ScienceEdu Registry",
      location: "Boston, MA",
      type: "Full-Time",
      salary: "$95,000 - $120,000",
      matchPercent: 94,
      description: "Direct next-generation community curricula in aerospace optics, cosmic microwave mapping, and solar telemetry parameters.",
      skills: ["Observational Astronomy", "Public Education", "Curriculum Design"],
      applied: false
    }
  ],
  roadmap: [
    {
      id: "phase-1",
      title: "Phase 1: Academic Data Transition",
      subtitle: "Deconstruct academic telemetry structures into industrial pipelines",
      status: "completed",
      duration: "3 weeks",
      steps: [
        {
          id: "step-1-1",
          title: "Optical Spectrometry and Payload Signal Analytics",
          description: "Calibrate raw signal telemetry streams using standard Python pandas matrices.",
          hours: 12,
          type: "reading",
          completed: true
        },
        {
          id: "step-1-2",
          title: "FITS Telescope Metadata to Big Data Buckets",
          description: "Automate reading spatial matrices from flexible astronomy formats directly into Cloud buckets.",
          hours: 8,
          type: "course",
          completed: true
        }
      ]
    },
    {
      id: "phase-2",
      title: "Phase 2: High Throughput Computations",
      subtitle: "Adopt modern big-data pipelines for real-time astro-computations",
      status: "active",
      duration: "4 weeks",
      steps: [
        {
          id: "step-2-1",
          title: "N-Body Cosmic Gravitational Physics on Spark Nodes",
          description: "Transition traditional scripts from legacy supercomputers to distributed Spark analytics clusters.",
          hours: 15,
          type: "course",
          completed: false
        },
        {
          id: "step-2-2",
          title: "Real-time Telemetry Streams with Apache Kafka",
          description: "Build robust data pipelines to listen to high-throughput satellite trackers using event brokers.",
          hours: 22,
          type: "project",
          completed: false
        }
      ]
    },
    {
      id: "phase-3",
      title: "Phase 3: SpaceTech Industry Deployments",
      subtitle: "Formally deploy astronomical engines into secure cloud containers",
      status: "locked",
      duration: "3 weeks",
      steps: [
        {
          id: "step-3-1",
          title: "Orbital Simulation Engine Scaling on Kubernetes",
          description: "Create robust Helm templates to host physical orbital prediction APIs across cloud pods.",
          hours: 18,
          type: "course",
          completed: false
        },
        {
          id: "step-3-2",
          title: "Zero-Trust Payload Gateway Authentications",
          description: "Enforce strictly restricted boundaries on physical satellite link commands using secure keys.",
          hours: 12,
          type: "project",
          completed: false
        }
      ]
    }
  ]
};
