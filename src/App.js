import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import Carousel from "./Carousel";

function App() {
  let teams = [
    {
      name: "Rohit rana",
      position: "Associate Director - Operations",
      education: "Mtech - IIT Kharagpur, \n Phd - IIT Roorkee",
      image: "https://www.geeksofgurukul.com/assets/RR-7f666b87.svg",
      info: "It was an easy and straight choice for me to join Geeks of Gurukul and be a part of this tech family which is committed to new technologies and fosters a culture of persistent innovation. By learning from Geeks of Gurukul, you can be confident that you have the most relevant skills needed to succeed in this rapidly evolving tech industry.",
    },
    {
      name: "Manish d pepal",
      position: "Lead Instructor",
      education: "Mtech - IIT Roorkee,\n Phd - IIT Roorkee",
      image: "https://www.geeksofgurukul.com/assets/MP-b277654a.svg",
      info: "Geeks of Gurukul shares my belief in the power of continuous learning and growth, this was my simple reason for joining the family of Geeks of Gururkul. Geeks of Gururkul provides you access to experienced mentors, personalized guidance and like-minded individuals who share your passion for technology."
    },
    {
      name: "Deepika Yadav",
      position: "Director - Curriculum",
      education: "Mtech - IIT Roorkee,\n Phd - IIT Roorkee",
      image: "https://www.geeksofgurukul.com/assets/DY-f44b9873.svg",
      info: "I chose Geeks of Gurukul because of its collaborative and supportive culture and the team- oriented approach where instructors and students work together. Geeks of Gurukul provides a supportive and learning environment which will help you to stay motivated and achieve your learning goals."
    },
    {
      name: "Sandeep kumar",
      position: "Lead Instructor",
      education: "Mtech - IIT Roorkee,\n Phd - IIT Roorkee",
      image: "https://www.geeksofgurukul.com/assets/SK-62bab244.svg",
      info: "My reason for joining Geeks of Gurukul is that it prepares individuals for success in the tech industry which aligns with my desire to make a meaningful impact in one’s lives. Geeks of Gururkul opens doors for various industries and companies. This provides you with various career opportunities."
    },
    {
      name: "Rajiv Rana",
      position: "Lead Student Experience",
      education: "Mtech - IIT Kharagpur,\n Phd - IIT Roorkee",
      image: "https://www.geeksofgurukul.com/assets/RajivR-c295c30f.svg",
      info: "My reason for joining Geeks of Gururkul is personal growth. Joining it as an instructor offers opportunities for my personal growth and development. Geeks of Gururkul focuses on practical learning. Therefore, it makes you industry ready along with clearing your theoretical concepts."
    },
    {
      name: "Bharati Kumari",
      position: "Advisor - Legal",
      education: "Jharkhand high court,\n Dr. Shyamaprasad University Ranchi",
      image: "https://www.geeksofgurukul.com/assets/BK-ec28d218.svg",
      info: "I chose Geeks of Gurukul because of its collaborative and supportive culture and the team- oriented approach where instructors and students work together. Geeks of Gurukul provides a supportive and learning environment which will help you to stay motivated and achieve your learning goals."
    },
    {
      name: "Praveen Sai Teella",
      position: "Lead Instructor",
      education: "Btech - IIT Guwahati",
      image: "https://www.geeksofgurukul.com/assets/PS-85762053.svg",
      info: "Geeks of Gurukul shares my belief in the power of continuous learning and growth, this was my simple reason for joining the family of Geeks of Gururkul. Geeks of Gururkul provides you access to experienced mentors, personalized guidance and like-minded individuals who share your passion for technology."
    },
    {
      name: "Ajay Kumar",
      position: "Director - Curriculum",
      education: "Mtech - IIT Kharagpur",
      image: "https://www.geeksofgurukul.com/assets/AK-b6ad8c78.svg",
      info: "I chose to join Geeks of Gurukul as an instructor because of its exceptional reputation in the tech industry. Geeks of Gururkul’s resources and network allows you to stay connected with industry leaders, thus expanding your career opportunities."
    },
    {
      name: "Arun chauhan",
      position: "Associate Director - Curriculum",
      education: "Mtech - IIT Roorkee,\n Phd - IIT Roorkee",
      image: "https://www.geeksofgurukul.com/assets/AC-86c0a32e.svg",
      info: "The main reason for me joining Geeks of Gurukul as an instructor is the quality education it provides along with the practical experience it gives to the students. Geeks of Gururkul has designed a curriculum that keeps you up-to-date with the latest advancements. By joining Geeks of Gurukul you get the most relevant skills needed for succeeding in this evolving tech world."
    },
  ];


  let cards = teams.map((teamMember) => ({
    content: <Card data={teamMember}/>,
    key: uuidv4()
  }));
  
  return (
    <div className="carousel">
      <Carousel
        cards={cards}
        height="500px"
        width="100%"
        offset={200}
        showArrows={false}
      />
    </div>
  );
}

export default App;
