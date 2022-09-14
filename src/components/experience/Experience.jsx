import "./experience.scss";

export default function Experience() {
  const data = [
    {
      id: 1,
      name: "Software Engineering Intern",
      title: "Copart",
      img:
        "assets/copart.png",
      desc:
        "Implemented event-driven modules for the Member microservices, enhancing the user payments and refunds interface. Significant contributions include streamline currency conversion process for payments made across currencies, reducing currency conversion issues in production by 10%. ",
    },
    {
      id: 2,
      name: "Software Engineer",
      title: "Citi",
      img:
        "assets/Citi-logo.png",
      desc:
        "Built micro-services and full-stack web applications for Citi's Foreign Exchange and Local Markets business units. Significant contributions include building a cross-platform enterprise messaging micro-service and revamping the front-end of Citi's Global Data Mining Engine. ",
    }
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