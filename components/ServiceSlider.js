// swiper reaact component
import { Swiper, SwiperSlide } from 'swiper/react';

// swiper style
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// require models
import { FreeMode, Pagination } from 'swiper';


// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
  RxCode,
} from "react-icons/rx";


// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Ms Office',
    description: 'Mengelola Dokumen Ms Word, Ms Excel & Ms Power Point secara efisien dan optimal',
  },
  {
    icon: <RxPencil2 />,
    title: 'Graphic Design',
    description: 'menciptakan desain visual yang menarik, optimal dan efektif bagi audiens',
  },
  {
    icon: <RxCode />,
    title: 'Web Development',
    description: 'Membangun website responsif dengan performa dan fungsi optimal',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Menulis konten persuasif untuk menarik perhatian audiens dan konversi.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Meningkatkan trafik organik dengan optimasi pencarian berbasis data.',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className='h-[240px] sm:h-[340px]'
    >
      {
        serviceData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
                {/* icon */}
                <div className='text-4xl text-accent mb-4 '> {item.icon} </div>
                {/* title & desc */}
                <div className='mb-8'>
                  <div className='mb-2 text-lg'> {item.title} </div>
                  <p className='max-w-[350px] leading-normal'> {item.description} </p>
                </div>
                {/* arrow */}
                <div className='text-3xl'>
                  <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
                </div>
              </div>
            </SwiperSlide>
          );
        })
      }
    </Swiper>
  );
};

export default ServiceSlider;
