
export default function Contact() {
  return (
    <>
      <div className="home-section">
        <div className="col">
          <h1>Contact Me</h1>
        </div>
        <div className="col">
          <p>
            You can always and anytime contact with me . Here I've dropped my
            contact details so that you can able contact with me . You can also
            find me on social medias . After contacting with me you'll know more
            about myself . Thank You !
          </p>
        </div>
      </div>
      <div className="home-section">
        <div className="col">
          <h1>Contact Address</h1>
          <li>Name : <span>Ghs Julian </span></li>
          <li>Email : <span>ghsjulian@gmail.com </span></li>
          <li>Phone : <span>+88013*******7 </span></li>
          <li>Website : <span>ghsjulian.netlify.app </span></li>
          <li>Facebook : <span>fb/ghs.julian.80/ </span></li>
          <li>Google : <span>Ghs Julian </span></li>
          <li>YouTube : <span>Ghs Julian </span></li>
          <li>Instagram : <span>Ghs Julian </span></li>
          <li>Country : <span>Bangladesh </span></li>
          <li>City : <span>Sylhet </span></li>
          <li>
            District : <span><i>NULL</i> </span>
          </li>
        </div>
        <div className="col">
          <div className="contact-form">
            <input type="text" placeholder="Enter Name" id="name" name="name" />
            <input
              type="email"
              placeholder="Enter Email"
              id="email"
              name="email"
            />
            <textarea
              type="text"
              placeholder="Write Message"
              id="message"
              name="message"
            ></textarea>
            <button type="button" id="btn" name="contact-btn">Contact</button>
          </div>
        </div>
      </div>
    </>
  );
}
