import social_media from "../images/social_media.jpg";
import blog from "../images/blog.jpg";
import portfolio from "../images/portfolio.jpg";

export default function Project() {
  return (
    <>
      <div class="home-section">
        <div className="col">
          <br />
          <br />
          <br />
          <p>Theses all are i have made in 2 years . It is my Pleasure ! I always make awesome project and learn new things . In this year i have made many projects . I have given the demo link bellow please check .</p>
        </div>
        <div className="col">
          <h1>Latest Project</h1>
          <li id="list">
            <img src={social_media} alt="Ghs Julian" />
            Social Media Website
            <a href="http://ghs.rf.gd">Demo</a>
          </li>
          <li id="list">
            <img src={blog} alt="Ghs Julian" />
            Beautiful Blog Website
            <a href="/home">Demo</a>
          </li>
          <li id="list">
            <img src={portfolio} alt="Ghs Julian"/>
            Awesome Portfolio Website
            <a href="/home">Demo</a>
          </li>
        </div>
      </div>
    </>
  );
}
