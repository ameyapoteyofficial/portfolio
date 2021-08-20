import "./experience.scss";

export default function Experience() {
  const data = [
    {
      id: 1,
      name: "Research Assistant",
      title: "NIT Tiruchirappalli",
      img:
        "assets/nitt.png",
      desc:
        "Contributions include analyzing the gait parameters of Orthopaedic patients and devising a tailored recuperation strategy inlcuding designing a custom spring-based crutch for reducing joint-force imbalances and a faster recovery. ",
    },
    {
      id: 2,
      name: "Software Developer",
      title: "Citicorp",
      img:
        "assets/Citi-logo.png",
      desc:
        "Built micro-services and full-stack web applications for Citi's Foreign Exchange and Local Markets business units. Significant contributions include building a cross-platform enterprise messaging micro-service and revamping the front-end of Citi's Global Data Mining Engine. ",
      featured: true,
    },
    {
      id: 3,
      name: "Student Assistant",
      title: "UT Dallas",
      img:
        "assets/utd.png",
      desc:
        "Worked on annotating and demarcating NLP data sets as a student worker in the Computer Science department. Also helped tutor and guide Undergraduate Students in the Introductory Big Data course. ",
    },
  ];
  return (
    <div className="testimonials" id="experience">
      <h1>Work Experience</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              
              <img
                className="user"
                src={d.img}
                alt=""
              />
              
            </div>
           
            <div className="bottom">
                <h3>{d.title}</h3>
              <h4>{d.name}</h4>
            </div>
            <div className="center">
              {d.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}