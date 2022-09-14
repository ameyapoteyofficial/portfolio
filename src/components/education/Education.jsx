import "./education.scss"

export default function Education() {
    const data = [
        {
          id: 1,
          name: "Bachelor of Technology, Engineering",
          title: "National Institute of Technology, Trichy",
          img:
            "assets/nitt.png",
          desc:
            "",
        },
        {
          id: 2,
          name: "MS, Computer Science (3.9/4.0)",
          title: "The University of Texas at Dallas",
          img:
            "assets/utd.png",
          desc:
            "",
        },
      ];
    return (
        <div className="education" id="education">
      <h1>Education</h1>
      <div className="eduContainer">
        {data.map((d) => (
          <div className= "card">
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
