
import Image2 from './assets/images/image2.png';
import Image3 from './assets/images/image3.jpg';
import './body.css';

function Body() {
  return (
    <div>
    <section class="hero">
    <div class="box p-2 object-left-bottom">
        <h1 class="text-white text-4xl font-inter font-medium p-3">We Crush Your Competitors, Goals, And Sales Recors - Without The B.S.</h1>
        <button class=" btn1 bg-orange-500 text-white p-2">GET THE CONCLUSION</button>
    </div>
</section>

<section id="frame1" class="px-50">
        <div class="row w-5/6 basis-1/2 object-center">
            <div class="column w-1/3">
                <img class="frameimg" src={Image3} alt="image3" />
            </div>
            <div class="column p-10 w-1/2 pt-20">
                <h1 class="text-3xl text-violet-700 font-semibold">Web & Mobile App Development</h1>
                <p>Your web and mobile Apps are pieces of the puzzle to grow your business. We use 
                frameworks which tailor content and engagement methods to respond to different intents shown 
                by your potential customers who interact with your business online.</p>
                <button class="btn1">Learn More</button>
            </div>
        </div>
</section>


<section id="frame2" class="px-50">
    <div class="row w-5/6 basis-1/2 object-center">
        <div class="column p-10 w-1/2 pt-20">
            <h1 class="text-3xl text-violet-700 font-semibold">Digital Strategy Consulting</h1>
            <p>Your digital strategy should complement the overall marketing strategy of the company. In online marketing, 
                each component will never work in isolation and every business needs a different mix. We provide a clear concept 
                and strategic overview to find the most efficient model for your business.</p>
            <button class="btn1"> Learn More</button>
        </div>
        <div class="column w-1/3">
            <img class="frameimg" src={Image2} alt="image2" />
        </div>
    </div>
</section>
</div>
  );
}

export default Body;
