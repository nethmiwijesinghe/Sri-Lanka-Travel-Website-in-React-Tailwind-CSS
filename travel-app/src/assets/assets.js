import logo from './logonew.png'
import logo_dark from './logo_dark.svg'
import cross_icon from './cross_icon.svg'
import menu_icon from './menu_icon.svg'
import star_icon from './star_icon.svg'
import left_arrow from './left_arrow.svg'
import right_arrow from './right_arrow.svg'
import header_img from './header_img.png'
import brand_img from './brand-photo.jpg'
import project_img_1 from './tot.jpg'
import project_img_2 from './nelum.jpg'
import project_img_3 from './ninear1.jpg'
import project_img_4 from './mirissa.jpg'
import project_img_5 from './pinnawala.jpg'
import project_img_6 from './ruwanwalisaaya.jpg'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'

export const assets = {
    logo,
    logo_dark,
    cross_icon,
    menu_icon,
    star_icon,
    header_img,
    brand_img,
    project_img_1,
    project_img_2,
    project_img_3,
    project_img_4,
    left_arrow,
    right_arrow,
}

export const projectsData = [
    {
      title: "Temple of the tooth",
      price: "Rs.3000.00",
      location: "kandy",
      image:project_img_1
    },
    {
      title: "Nelum Kuluna",
      price: "Rs.4500",
      location: "Colombo",
      image: project_img_2
    },
    {
      title: "Nine Arch Bridge",
      price: "Rs.5800",
      location: "Demodara",
      image: project_img_3
    },
    {
      title: "Unawatuna Beach",
      price: "Rs.5400",
      location: "Galle",
      image: project_img_4
    },
    {
      title: "PInnawala Elephant Opernage",
      price: "Rs.4500",
      location: "Kegalle",
      image: project_img_5
    },
    {
      title: "Ruwanwalisaya",
      price: "Rs.8900",
      location: "Anuradhapura",
      image: project_img_6
    },
    
  ];

  export const testimonialsData = [
    {
        name: "Joy Perera",
        title: "Marketing Manager",
        image: profile_img_1,
        alt: "Portrait of Donald Jackman",
        rating: 5,
        text: "Traveling with kids can be challenging, but this company made it so easy! They helped us plan a family-friendly itinerary with fun activities for all ages. We will definitely book with them again!"
    },
    {
        name: "Dinidu Kariyawasam",
        title: "UI/UX Designer",
        image: profile_img_2,
        alt: "Portrait of Richard Nelson",
        rating: 4,
        text: "Our honeymoon was magical, thanks to this travel company. From romantic beachside dinners to private guided tours, everything was beyond our expectations. Thank you for making our trip so special!."
    },
    {
        name: "James Wanigasooriya",
        title: "Co-Founder",
        image: profile_img_3,
        alt: "Portrait of James Washington",
        rating: 5,
        text: "Traveling with this company was the best decision we made! They took care of every little detail, allowing us to just relax and enjoy. The local experiences and hidden gems they included in our itinerary made the trip unforgettable!"
    }
];