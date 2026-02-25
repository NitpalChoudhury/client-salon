import AutoScroller from "@/app/components/AutoScroller";

export default function Home() {
  return (
    <main className="bg-white text-black font-poppins"> {/* GLOBAL POPPINS */}

      {/* FOLLOW US SECTION */}
      <section className="py-10 px-6 md:px-20 text-center flex justify-center items-center gap-3 text-black">
        <img
          src="/instagram.png"
          alt="Instagram"
          className="w-8 h-8"
        />
        <h2 className="text-3xl font-bold tracking-wide text-black font-playfair">
          FOLLOW US <span className="text-pink-600">@looksunisexsalon</span>
        </h2>
      </section>

      {/* ABOUT / EXPLORE SECTION */}
      <section className="py-16 px-6 md:px-28 text-left max-w-5xl mx-auto text-black">
        <h2 className="text-4xl font-playfair font-bold mb-6 text-black">
          Explore the Realm of Beauty with Looks Salon
        </h2>

        <p className="mb-4 leading-7 text-lg text-black font-poppins">
          With over 162 branches nationally and internationally, Looks salon is a premium beauty salon
          for men and women who desire to look the best every day. Getting a makeover not only changes
          the appearance of a person but also brings back the lost confidence and Looks Salon would 
          take pride in being a part of it. From beauty to grooming services, we provide a tremendous
          range of facilities that touches every dimension of beauty and hair treatments. Our 
          repertoire of professional experts makes sure that all your beauty and hair questions are 
          answered, and you leave the salon with a big smile on your face.
        </p>

        <p className="mb-4 leading-7 text-lg text-black font-poppins">
          With over 6000 employees engaged in transforming your look, we make sure that all the 
          services provided at our salons meet the international standards. Through our advice and 
          solutions from the expertise in this array, we aim at giving the best services through our 
          state-of-art facilities. Our professional stylists and beauty experts are constantly updated 
          with the latest trends and fashion advice that help them to work efficiently and deliver 
          outstanding results!
        </p>

        <p className="leading-7 text-lg text-black font-poppins">
          Give us an opportunity to serve you once, we are sure you'll love to come back to us again 
          and be our esteemed customer forever. Fill the form or call us to book an appointment now!
        </p>
      </section>

      {/* SLIDER */}
      <AutoScroller />
    </main>
  );
}