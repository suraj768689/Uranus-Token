import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './body.css';

const Body=()=>{
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, // Adjust slide duration as needed
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return(
        <div>
            <div className="image">
                <img src="https://meme-token-gilt.vercel.app/assets/uranus-BetmuAOr.jpeg" alt="image" />
            </div>
            
            <div className="content">
                <div className="logo-overlay">
                  <img src="https://meme-token-gilt.vercel.app/assets/29231-B1Z16x30.png" alt="logo" className="logo" />
                </div>
                <h2>$URANUS Web</h2>
                <p>
                  Welcome to the wild side of crypto - where memes aren't just dreams, and astrology isn’t just your daily horoscope.
                </p>
                <p>
                   Uranus, the ruler of Aquarius, starts 2024 in retrograde, going direct on{" "}
                   <strong>Saturday, January 27</strong>, then retrogrades again on{" "}
                   <strong>Sunday, September 1</strong>. This suggests ongoing evolution in your home life and personal growth.
                </p>
                <p>
                  <strong>Uranus champions individuality, social justice, and authenticity.</strong> During its retrograde, focus on living by your values and perhaps engage more actively in humanitarian efforts.
                </p>
                <p>
                  In 2024, the location of the Sun on the March equinox is in the constellation of Pisces but also on the border of Aquarius. So,{" "}
                  <strong>we are slowly moving into a new age, from Pisces to Aquarius.</strong>
                </p>
                <p>
                <strong>Aquarius is ruled by Uranus, the planet that governs innovation, technology, and surprising events.</strong> Uranus perfectly mirrors Aquarius' distinctive attitude, complementing the nontraditional nature of these visionary air signs.
               </p>
               <ul>
                  <li>Everyone Loves to we going to Uranus.</li>
                  <li>The liquidity injections just keep coming into Uranus.</li>
                  <li>Don’t pass gas (it’s gonna be giant)</li>
                  <li>Hold onto Uranus</li>
                  <li>Disclaimer: This is all in good fun – a blend of memes, astrology, and crypto. We will not go moon, we going to Uranus.</li>
               </ul>
               <p>In Crypto We Trust, But In Uranus, We Believe!</p>
               <p>The Memeifesto</p>
               <p>Welcome to the wild side of crypto - where memes aren't just dreams, and astrology isn’t just your daily horoscope.</p>

               {/* Slider section */}
               <Slider {...settings}>
                  <div className="image-card">
                     <img src="https://persistventure.notion.site/image/https%3A%2F%2Fi.ytimg.com%2Fvi%2F-KJZCYW_pN8%2Fsddefault.jpg?table=block&id=09c3d574-9bd9-4e5b-a18c-7924656752ce&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=500&userId=&cache=v2" alt="Image 1" />
                  </div>
                  <div className="image-card">
                      <img src="https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2F1b1f0650-faa3-4ad8-83a8-cb8546080154%2FUntitled.png?table=block&id=5d8b0f6e-1a90-4603-99ca-5f82cd31bdc6&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=2000&userId=&cache=v2" alt="Image 2" />
                  </div>
                  <div className="image-card">
                     <img src="https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2F4d6ff0c5-fb06-41e2-91ea-611a6b227c8f%2FUntitled.png?table=block&id=a49515d9-58bb-4c79-833d-f50cddb5d455&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=2000&userId=&cache=v2" alt="Image 3" />
                  </div>
                  <div className="image-card">
                     <img src="https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2Fbf2f4077-f535-4195-9efb-52756a98070f%2FUntitled.png?table=block&id=89bfc120-2c14-43d7-9470-835afc89abb2&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=1420&userId=&cache=v2" alt="Image 4" />
                  </div>
                  <div className="image-card">
                     <img src="https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2Faa5d7905-001d-4421-a62b-20d06dc94e56%2FUntitled.png?table=block&id=8f87aebd-40c4-40da-bf39-1a6189c260e1&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=1420&userId=&cache=v2" alt="Image 5" />
                  </div>
                  <div className="image-card">
                     <img src="https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2F855fd03b-cb37-4e2c-8214-fef34086a412%2FUntitled.png?table=block&id=ac349807-48b8-4bb7-ad5b-3602ca7fa421&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=800&userId=&cache=v2" alt="Image 6" />
                  </div>
                  <div className="image-card">
                     <img src="https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2F7c8c6796-19f1-40a3-9ed9-9392ec086769%2FUntitled.png?table=block&id=86243842-6f26-41a3-9f93-bb80a78f3fb2&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=1420&userId=&cache=v2" alt="Image 7" />
                  </div>
                  <div className="image-card">
                     <img src="https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2F1790eb96-29b6-4fb6-9c90-e7c58c2b19c0%2FUntitled.png?table=block&id=de2220c1-8ccd-426a-9fad-7efe5266ce14&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=1290&userId=&cache=v2" alt="Image 8" />
                  </div>
                  <div className="image-card">
                     <img src="https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2F8b5aca2f-a69d-45ae-b403-a1a7db496f98%2FUntitled.png?table=block&id=ad352b03-5c03-471b-a134-d6f2c7ffcb9b&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=660&userId=&cache=v2" alt="Image 9" />
                  </div>
                  <div className="image-card">
                     <img src="https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2Fb2acb8fa-6443-46ee-86a2-273a39052de0%2FUntitled.png?table=block&id=bd3796d2-fdcc-4ac9-a332-df1afcae5f67&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=2000&userId=&cache=v2" alt="Image 10" />
                  </div>
                  <div className="image-card">
                     <img src="https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2F3b662448-ca27-45ef-9d17-a4b5027bc5db%2FUntitled.png?table=block&id=bccefaca-50cf-4ba6-8f40-f38c3561b0b5&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=1020&userId=&cache=v2" alt="Image 11" />
                  </div>
                  <div className="image-card">
                     <img src="https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2F8d4778b9-ed18-4713-92a0-2b103a6132fb%2FUntitled.png?table=block&id=d49c90c4-479b-479f-ac52-976832cde6ca&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=1420&userId=&cache=v2" alt="Image 12" />
                  </div>
                  <div className="image-card">
                    <img src="https://persistventure.notion.site/image/https%3A%2F%2Fwww.youtube.com%2Fs%2Fdesktop%2F4feff1e2%2Fimg%2Ffavicon_144x144.png?table=block&id=09c3d574-9bd9-4e5b-a18c-7924656752ce&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&userId=&cache=v2" alt="image 13" />
                  </div>
                  
                </Slider>
            </div>
        </div>
    );
};
export default Body;