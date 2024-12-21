// testimonial data
const testimonialData = [
  {
    image: '/profil.png',
    name: 'Muh. Octradilin, S.Pd',
    position: 'CEO Ideal Creative',
    message:
      'Taufiqurrahman combines web development, graphic design, and copywriting to create optimal solutions!',
  },
  {
    image: '/profil2.png',
    name: 'Ir. Rizal Syarifuddin, ST.MT.IPM',
    position: 'Vice Dean at UIM Makassar',
    message:
      'Taufiqurrahman is quite skilled in MS Office, web development, and SEO. His solutions are always efficient and practical.',
  },
  {
    image: '/profil3.png',
    name: 'Eko Saputra, S.H,M.H',
    position: 'CEO Badi & Bani Lawfirm',
    message:
      'Taufiqurrahman is very skilled in web development, copywriting, and SEO. His work results are always professional and on target.',
  },
];

// next image
import Image from 'next/image';

// import swiper react component
import { Swiper, SwiperSlide } from 'swiper/react';

// icon
import { FaQuoteLeft } from 'react-icons/fa';


// swiper style
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// require models
import { Navigation, Pagination } from 'swiper';



const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className='h-[400px]'
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16 '>
              {/* avatar, name, position */}
              <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
                <div className='flex flex-col justify-center text-center '>
                  {/* avatar */}
                  <div>
                    <Image
                      src={person.image}
                      width={100}
                      height={100}
                      alt=''
                      className='rounded-full mb-2 mx-auto'
                    />
                  </div>
                  {/* name */}
                  <div className='text-lg'> {person.name} </div>
                  {/* position */}
                  <div className='text-sm text-gray-400'>{person.position}</div>
                </div>
              </div>
              {/* Quote */}
              <div className='flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20  '>
                {/* Quote icon */}
                <div className='mb-4'>
                  <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0 ' />
                </div>
                {/* message */}
                <div className='xl:text-lg text-center md:text-left '> {person.message} </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })
      }
    </Swiper>
  );
};

export default TestimonialSlider;

