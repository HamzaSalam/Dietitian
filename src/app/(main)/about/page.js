import React from "react";

const About = () => {
  return (
    <>
      <section className='container px-4 md:px-24 flex justify-center items-center p-4 bg-secondary/10'>
        <div className='bg-transparent p-4 md:p-8 rounded-lg flex flex-col md:flex-row'>
          {/* Image Section */}
          <div className='w-full md:w-1/2 mb-8 md:mb-0 md:mr-8 flex justify-center'>
            <img
              src='https://placehold.co/1080x1080'
              alt='A woman sitting at a desk, smiling, wearing a colorful dress and headscarf'
              className='rounded-lg w-full h-auto max-w-[480px] md:max-w-[1080px]'
            />
          </div>
          {/* Text Section */}
          <div className='w-full md:w-1/2'>
            <h1 className='text-2xl md:text-4xl font-bold text-orange-500 mb-4'>
              Hello!
            </h1>
            <p className='text-base md:text-lg mb-4'>
              I'm Maham Naveed, your dietitian and Founder of “Diet_Planner”. I
              am Currently Working for Awareness in Community Regarding Health
              and as a Nutrition activist & Lifestyle Influencer. We provide
              online Customized Diet Plans and Home-Based workouts for services
              like: Weight Loss, Weight Gain, PCOD, Thyroid Management,
              Gastrointestinal disorders, Diabetes, Diet for Nursing &
              Post-Partum mothers and other Chronic disease management.
            </p>
            <p className='text-base md:text-lg mb-4'>
              I’m going to teach you how to maintain weight and get flawless
              skin through better eating habits. I am extremely passionate to
              empower people so that they can build a positive behavior with
              food and carry this healthy lifestyle with them in the long run.
              My motto is clear and sound: “Don’t eat less, eat right instead.”
            </p>
            <p className='text-base md:text-lg mb-4'>
              I always wanted to play my part in society and make a positive
              change in people’s health by giving the best available nutrition
              advice on food and diet and by providing dietary management and
              counseling programs.
            </p>
            <p className='text-base md:text-lg'>
              I also want to clear the misconceptions people have related to
              diet and nutrition so that people can take it as a lifestyle and
              not a torture to themselves.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
