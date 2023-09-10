import ghs from "../images/ghs.png";
export default function About() {
  return (
    <>
      <div className="home-section">
        <div className="col">
          <h1>About Me</h1>
          <img className="ghs" src={ ghs } alt="Ghs Julian"/>
        </div>
        <div className="col">
          <p>
            Hello , It's me Julie a developer and desginer. I am a student of
            univercity . Right now I'm doing a graduatuin in English . As a
            developer i have full experiance . I can desgin your fully site .
            Like Front-End and Back-End both. I also know about databases
            (MySQL).
          </p>
          <div className="flex">
            <a id="hire" href="/projects">
              See Projects
            </a>
            <a id="cv" href="/contact">
              Contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
