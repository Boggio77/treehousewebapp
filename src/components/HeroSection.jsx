import React from 'react'
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import './Testimonials.css'

function HeroSection() {

  return (
    <div className='hero-container'>
        {/* <video src='/videos/video-1.mp4' autoPlay loop muted />  */}
        <h1>Relaxation Awaits</h1>
        <p>What are you waiting for?</p>
        <div className='hero-btns'>
            <Button
            className='btns' 
            buttonStyle='btn--outline' 
            buttonSize='btn--large'
            >
                BOOK NOW
            </Button>
            <Button
            className='btns' 
            buttonStyle='btn--primary' 
            buttonSize='btn--large'
            >
                Watch Video <i className='far fa-play-circle' />
            </Button>
        </div>
    </div>
  )
  
// let items = document.querySelectorAll('.slider .item');
// let next = document.getElementById('next');
// let prev = document.getElementById('prev');

// let active = 10;
// function loadShow(){
//     let stt = 0;
//     items[active].style.transform = `none`;
//     items[active].style.zIndex = 1;
//     items[active].style.filter = 'none';
//     items[active].style.opacity = 1;
//     for(var i = active + 1; i < items.length; i++){
//         stt++;
//         items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
//         items[i].style.zIndex = -stt;
//         items[i].style.filter = 'blur(5px)';
//         items[i].style.opacity = stt > 2 ? 0 : 0.6;
//     }
//     stt = 0;
//     for(var i = active - 1; i >= 0; i--){
//         stt++;
//         items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
//         items[i].style.zIndex = -stt;
//         items[i].style.filter = 'blur(5px)';
//         items[i].style.opacity = stt > 2 ? 0 : 0.6;
//     }
// }
// loadShow();
// next.onclick = function(){
//     active = active + 1 < items.length ? active + 1 : active;
//     loadShow();
// }
// prev.onclick = function(){
//     active = active - 1 >= 0 ? active - 1 : active;
//     loadShow();
// }

// function Testimonials() {
//   return (
//   <div class="Testimonials">
//       <div class="slider">
//           <div class="item">
//               <h2>Rachel</h2>
//                   <p>I can't say enough good things about our stay at the treehouse. We were truly sad to go. We were actually so excited to come, I didn't realize that we arrived an entire day early- and Karen was very understanding about it (lucky for us no one ended up being there thank goodness!). The quality materials they used to build the treehouse shine through, and they really thought of every detail including all of the plugs for gadgets. They thoughtfully left a bottle of wine and beers in the fridge. They have great recommendations, and the atmosphere is 10/10. We would definitely stay here again- I would actually probably live there. Just book it!</p>
//           </div>
//           <div class="item">
//               <h2>Kristi</h2>
//                   <p>We chose the "Treehouse" for our elopement wedding. We were looking for a quiet, secluded location that had beautiful scenery for pictures and the Treehouse was exactly what we were looking for. Karen added small touches to the Treehouse in honor of our special weekend...champagne, a "Mr. & Mrs" decoration and access to their entire property for any photos we wanted to take. The Treehouse was exceptionally clean, well stocked with coffee, refreshments, towels and everything you could ever need in a short stay. Karen went above and beyond to make sure all of our needs were met during our stay. Everything was absolutely perfect and we can't wait to return next year to celebrate our one year anniversary. Thank you, Karen!</p>
//           </div>
//           <div class="item">
//               <h2>Benjamin</h2>
//               <p>My wife and I stayed here for an anniversary trip and we had the most wonderful time. The treehouse is peaceful and serene. We loved waking up to watch the birds out over the marsh. The inside is so nice, you can tell they put a lot of thought into it. Karen and Bobby were wonderful hosts. They went above and beyond to make our stay as comfortable as possible. They even shipped us some of our things we forgot which was more than we could have expected! We will 100% be back!</p>
//           </div>
//           <div class="item">
//               <h2>Alesia</h2>
//               <p>Cannot say enough great things about this treehouse stay! My husband and I stayed with our baby here and it was amazing! So peaceful! They even had a pack and play and clean blankets and sheets set up for our baby! Coffee in the morning sunrise was breathtaking! We came just as a hurricane came through and Karen was so nice to update us every day of the local area, even sending videos and photos to keep us informed! All the little touches throughout the house were adorable! Loved that even the toilet paper was made to look like a sell boat! Even all the glassware matched in the cabinets to the whole house! Beds were super comfy and loved all the “smart” features in the home such as different color lighting etc, And the bathroom is incredible! Thank you for such an amazing time! We feel like we got 5 star hotel service in a private outdoorsy setting! Cannot beat it!</p>
//           </div>
//           <div class="item">
//               <h2>Mary</h2>
//               <p>We cannot say enough great things about our stay at the gorgeous Charleston Treehouse! So many extra special touches, that did not go unnoticed. AND the view!!!…such a treat!! Friendly hosts and such a fantastic location. The entire rental was pristine and perfect. We are already talking about when we can go back. Thank you so very much, Karen and Bobby!! We appreciate your southern hospitality more than words!! Semper Fi!!</p>
//           </div>
//           <div class="item">
//               <h2>Abby</h2>
//               <p>The treehouse and its setting are beautiful! It’s not too far from many Charleston excursions (we have littles and did a day at Whirlin Waters and a day at the Aquarium). Our girls loved walking down to the water several times a day to check on the crabs. The view from the living room is simply unbeatable. Karen was also always so kind and responsive when we had a question. We would definitely stay here again!</p> 
//           </div>
//           <div class="item">
//               <h2>Melissa</h2>
//               <p>Great stay & beautiful property! Wish we were staying longer than a few days. The space was impeccably clean and beds were extremely comfortable. And you can’t spend enough time enjoying the beautiful scenery from the patio. The owners were very accommodating and responsive. We hope to be back!</p> 
//           </div>
//           <div class="item">
//               <h2>Lara</h2>
//               <p>We loved our stay in the treehouse. The setting is even more beautiful and peaceful than the photos. I could truly sit out on the deck all day! Karen was a wonderful host, very welcoming and kind. The bed was comfortable and the views from inside the house absolutely gorgeous as well. I would definitely love to stay here again next time I’m back in the area.</p>
//           </div>
//           <div class="item">
//               <h2>Stu</h2>
//               <p>The moment we first contacted Karen, the thoughtful touches began, making the entire experience an absolute dream. Karen is a super host - warm, kind, courteous, and prompt to all of our inquires before, and during our stay - introducing us to some local muffins that were absolutely fabulous. Her treehouse was very clean, peaceful, and inviting.</p> 
//           </div>
//           <div class="item">
//               <h2>Kelly</h2>
//               <p>This was my favorite rental! It was so much better than the pictures, inside and out. The house is very beautiful and attention has been paid to every detail. As soon as I arrived I felt relaxed and right at home. And then there is the view!! This is the perfect place to escape to and still be very close to all of the restaurants, nature trails/parks, and shopping. Karen is an incredibly thoughtful, kind, and attentive host. She thought of every need from reservation to checkout. I will be coming back for sure!!</p>
//           </div>
//           <div class="item">
//               <h2>Corcelles</h2>
//               My husband, teenage daughter and I were in town for a wedding near Charleston Treehouse and picked the perfect place to stay for the weekend! From the minute we walked inside, we felt relaxed and at home. Karen was one of the most responsive and helpful hosts we have ever experienced. Her husband Bob was very knowledgeable about the wildlife in the marsh. We enjoyed morning coffee and happy hour beverages from the deck and the view is spectacular! The amenities were top notch and it was an extra bonus that Karen provided drinks, snacks and coffee! We had a great night of sleep on a super comfy mattress. Our teenager said it was the most luxurious place we have ever stayed. We wish we had been able to stay longer and hope that we can stay in the lovely Charleston Treehouse again. Thank you for your excellent hospitality! 
//           </div>
//           <div class="item">
//               <h2>Courtney</h2>
//               <p>Karen was a wonderful host and the Charleston Treehouse exceeded our expectations! The unique setting and attention to detail paid to every aspect of our stay made us feel incredibly welcomed and appreciated as guests. We have stayed in a lot of Airbnbs and this was by far our best experience. Highly recommend!</p>
//           </div>
//           <div class="item">
//               <h2>Dannie</h2>
//               <p>We loved our stay! It was great space for our family of four (2 littles). The main bedroom was big enough for us to use our pack and play and a toddler blowup bed with walking room (I like to have the kids in the room with us when traveling). We used the 2nd bedroom for our bags but it was great room too. The porch was great for the kids to run around and play. The sand area is small but was still enough for the kids to use beach toys and play during our down time. We were in town for a wedding and this space was helpful to relax but also entertain the kids between events. Karen was very helpful for anything we needed and quick to respond. Would highly recommend to anyone!</p>
//           </div>
//           <div class="item">
//               <h2>Tina</h2>
//               <p>Our stay at Karen and Bob’s treehouse was absolutely amazing! The view is stunning. The treehouse is gorgeous. We were speechless, when we turned on the chandelier and to our amazement it changed colors! It’s private, quiet but also close to everything. Karen and Bob are amazing hosts. They really care about you and your stay. We felt right at home and had everything we needed plus more. We loved sitting on deck just watching the tide go in and out of the marsh. It was truly amazing. We can’t wait to stay again.</p>
//           </div>
//           <div class="item">
//               <h2>Beth</h2>
//               <p>The waterfront tree house was absolutely perfect. Everything from the location to Karen's restaurant recs, was spot on. We loved being able to get into downtown quickly, and also loved leaving the hustle and bustle for the serenity of the treehouse. Karen's furniture selection was super comfortable, and the king bed was luxurious, as was the well appointed bathroom. We had no problems at all, except for one question about the T.V., which Karen answered promptly. If you are trying to decide about this place, just book it! It was serene oasis that we will most definitely return to on our next trip to Charleston!</p>
//           </div>
//           <div class="item">
//               <h2>Sarah</h2>
//               <p>Immaculate, beautiful place in a gorgeous setting. Loved all the windows including the one in the shower! Comfy furniture inside and on the expansive deck. Loved sitting on the deck in the afternoons/evenings. Kitchen was well equipped and organized. The whole property was just so thoughtfully appointed. I look forward to staying here again.</p>
//           </div>
//           <div class="item">
//               <h2>Jack</h2>
//               <p>Karen was a fantastic host and made sure to stay in constant communication to ensure our stay was everything we hoped it would be. The accommodations were excellent! We were in town for our daughter’s wedding and wanted to stay somewhere close to the venue that was also remote and away from the congestion usually found in Charleston. Sitting on the spacious back deck with a nice view and plenty of privacy was exactly what we were looking for. We felt completely unplugged and relaxed! Thank you guys once again for being such awesome host!</p>
//           </div>
//           <div class="item">
//               <h2>Jen</h2>
//               <p>The Charleston Treehouse was the perfect getaway for my friend and I. It is centrally located between Charleston and Kiawah so we were able to explore both areas and found several amazing restaurants close by. Karen and Bob were great hosts and very responsive when I had questions. The space is immaculately clean and has high quality amenities with thoughtful details throughout. The deck area is fabulous both day and night. Beds are very comfortable. Would definitely recommend and stay again next time I’m in the Charleston area.</p>> 
//           </div>
//           <div class="item">
//               <h2>Michael</h2>
//               <p>Truly a five star experience, both because of the comfort and luxury of the home, but also because of the extraordinary quality of construction and building materials. The whimsical deck built around an enormous live oak, the dramatic views out of oversized windows, the exciting multi-hued chandelier in the great room, and the exquisite bathroom with walk-in tiled shower, large stand-alone tub, and massive solid wood pocket doors for privacy make a stay at the Tree House a unique gem.</p> 
//           </div>
//           <div class="item">
//               <h2>Zhengyuan</h2>
//               <p>The treehouse is beautifully renovated and decorated! We really loved the way the rooms look and the materials used. And the view of nature outside is so nice and peaceful. We really enjoyed listening to the birds chirping, and watching a Great Egret flying right by our back window! A great place to relax and enjoy nature! Karen and Bob were also very nice, offering to help with anything we needed.</p>
//           </div>
//           <div class="item">
//               <h2>Kendra</h2>
//               <p>Such a beautiful modern guest home with natural surroundings. Loved the beer and wine in the fridge, and the snacks waiting for us. Great restaurants on Johns Island too. About a 25 min drive to downtown Charleston with traffic and 15 min to Kiawah Island; 10 min to Angel Oak tree. No washer/dryer so plan ahead. Loved relaxing on the sunny deck by the marsh. Great place to come back to after a day out and about. Host was very responsive.</p> 
//           </div>
//           <button id="prev">&lt;</button>
//           <button id="next">&gt;</button>
//         </div>
//       </div>
//     )
//   }
}

export default HeroSection;