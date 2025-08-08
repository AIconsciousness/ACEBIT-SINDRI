import React, { useEffect, useState } from 'react';
import './homepage.css';
import './card.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import president from "../../assets/images/team 2k21/princemichal.jpg"
import vicePresident1 from "../../assets/images/team 2k21/Gautam.jpg"
import vicePresident2 from "../../assets/images/team 2k21/suman_topo.jpg"
import techhead from "../../assets/images/team 2k21/kunal.jpg";
import js1 from "../../assets/images/team 2k21/prabhat.jpg"
import js2 from "../../assets/images/team 2k21/LakshmiKumari.jpg";
import mh from "../../assets/images/team 2k21/SagarSaurabh.jpg";
import trsr from "../../assets/images/team 2k21/adityanand.jpg";
import jtrsr from "../../assets/images/team 2k21/anurag.jpg";
import ch from "../../assets/images/team 2k21/mehartalat.jpg"
import rd from "../../assets/images/team 2k21/abhipriya.jpg"
import gate from "../../assets/images/team 2k21/shivam.jpg"
import gate2 from "../../assets/images/team 2k21/sagarsaw.jpg"

import edtorl from "../../assets/images/team 2k21/khusboo.jpg"
import alumini from "../../assets/images/team 2k21/rudra.jpeg"
import alumini2 from "../../assets/images/team 2k21/rajshree.jpg"

import pro from "../../assets/images/team 2k21/amarnath.jpg"
import pro2 from "../../assets/images/team 2k21/vicky.jpg"

import sh from "../../assets/images/team 2k21/ashish_jha.jpg";
import sh2 from "../../assets/images/team 2k21/saurav.jpeg";

import eph from "../../assets/images/team 2k21/ayushi.jpg";
import eph2 from "../../assets/images/team 2k21/sanya_deo.jpg";
import sc from "../../assets/images/team 2k21/ajaymahato.jpeg";







function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const gradientChoices = [
    'from-fuchsia-500/30 via-violet-500/10 to-indigo-500/30',
    'from-amber-500/30 via-orange-500/10 to-rose-500/30',
    'from-emerald-500/30 via-teal-500/10 to-cyan-500/30',
  ];

  const openModal = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    if (isModalOpen) {
      document.addEventListener('keydown', onKey);
    }
    return () => document.removeEventListener('keydown', onKey);
  }, [isModalOpen]);

  return (
    <>
    <section className="relative py-8 sm:py-12 md:py-16 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-900/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6 sm:mb-8">
          <h3 className="text-white text-2xl sm:text-3xl font-bold tracking-tight">
            Post Bearers
          </h3>
          <div className="hidden sm:flex items-center gap-2 text-xs text-white/60">
            <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500"></span>
            <span className="uppercase tracking-wider">Leadership</span>
          </div>
        </div>

        <Slider {...settings}>
          {data.map((d, index) => {
            const gradient = gradientChoices[index % gradientChoices.length];
            return (
              <div key={index} className="px-2 sm:px-3">
                <button
                  type="button"
                  onClick={() => openModal(d)}
                  className={`group relative w-full text-left rounded-2xl p-[2px] bg-gradient-to-br ${gradient} hover:shadow-[0_18px_40px_rgba(0,0,0,0.6)] transition-all duration-300 transform-gpu hover:-translate-y-1 hover:scale-[1.01]`}
                >
                  <div className="relative h-full rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-sm p-4 sm:p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_12px_28px_rgba(0,0,0,0.5)]">
                    <div className="relative mx-auto w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden ring-2 ring-white/30 group-hover:ring-white/60 transition">
                      <img src={d.img} alt={d.name} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <span className="pointer-events-none absolute -top-6 -left-6 w-1/2 h-1/2 bg-white/10 blur-xl rounded-full opacity-60"></span>
                    </div>

                    <div className="mt-4 text-center">
                      <div className="text-white text-base sm:text-lg font-semibold leading-snug">
                        {d.name}
                      </div>
                      <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r from-yellow-500 to-orange-500 shadow-md">
                        {d.review}
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-center gap-3">
                      {d.url && (
                        <a
                          href={d.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open LinkedIn profile of ${d.name}`}
                          className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/10 border border-white/20 text-white hover:text-blue-500 hover:bg-white/20 transition"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                      )}
                    </div>

                    <span className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  </div>
                </button>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>

    {isModalOpen && selectedMember && (
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4"
        onClick={closeModal}
        role="dialog"
        aria-modal="true"
        aria-label={`Profile image of ${selectedMember.name}`}
      >
        <div
          className="relative max-w-3xl w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={closeModal}
            className="absolute -top-10 right-0 text-white/80 hover:text-white text-sm"
            aria-label="Close image"
          >
            Close ✕
          </button>
          <img
            src={selectedMember.img}
            alt={selectedMember.name}
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
          <div className="mt-3 text-center text-white/80 text-sm">
            {selectedMember.name} — {selectedMember.review}
          </div>
        </div>
      </div>
    )}
    </>
  );
}

const data = [
  {
    name: `Prince Michael Milton `,
    img: (president),
    review: `President`,
    url: ('https://www.linkedin.com/in/prince-michael-1b822a25b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')
  },
  {
    name: `Gautam Kumar`,
    img: (vicePresident1),
    review: `Vice President`,
    url: ('http://www.linkedin.com/in/gautam-kumar-m20')
  },
  {
    name: `Suman Toppo `,
    img: (vicePresident2),
    review: `Vice President`,
    url: ('https://www.linkedin.com/in/suman-toppo-6676b723a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')
  },
  {
    name: `Ajay Mahato`,
    img: (sc),
    review: `Secretary`,
    url: ('https://www.linkedin.com/in/ajay-mahato-8a7446230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')
  },
  {
    name: `Prabhat Kumar Ravidas `,
    img: (js1),
    review: `Joint-Secretary`,
    url: ('https://www.linkedin.com/in/anurag-kumar-19722422b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')
  },
  {
    name: `Laxmi Kumari`,
    img: (js2),
    review: `Joint-Secretary`,
    url: ('https://www.linkedin.com/in/lakshmi-kumari-7461a5254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')
  },
  {
    name: `Aditya Anand `,
    img: (trsr),
    review: `Treasurer`,
    url: ('http://linkedin.com/in/aditya-anand-7529552a9')
  },
  {
    name: `Anurag Kumar`,
    img: (jtrsr),
    review: `Joint-Treasurer`,
    url: ('https://www.linkedin.com/in/anurag-kumar-19722422b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')
  },
  {
    name: `Kunal Kumar Ram `,
    img: (techhead),
    review: `Technical Head`,
    url: ('https://www.linkedin.com/in/kunal-kumar-8b84a7230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')
  },
  {
    name: `Sagar saurabh`,
    img: (mh),
    review: `Marketing-Head`,
    url: ('https://www.linkedin.com/in/saurabh-pratap-singh-9a154a23a?trk=contact-info')
  },

  {
    name: `Abhipriya`,
    img: (rd),
    review: `Research & Development Head`,
    url: ('https://www.linkedin.com/in/abhipriya-dubey-82b905230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')
  },
  {
    name: `Shivam Mishra`,
    img: (gate),
    review: `GATE & ESE Forum Head`,
    url: ('https://www.linkedin.com/in/shivam-mishra-3a5a5b28a')
  },
  {
    name: `Sagar kumar Saw`,
    img: (gate2),
    review: `GATE & ESE Forum Head`,
    url: ('https://in.linkedin.com/in/sagar-kumar-saw-794094268')
  },
  {
    name: `Rudra Pratap Sharma`,
    img: (alumini),
    review: `Alumni Relation & Joint PRO`,
    url: ('https://www.linkedin.com/in/rudra-pratap-0193b325a/')
  },
  {
    name: `Rajshree`,
    img: (alumini2),
    review: `Alumni Relation & Joint PRO`,
    url: ('https://www.linkedin.com/in/raj-shree-508709230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')
  },
  {
    name: `Khushboo Mehta`,
    img: (edtorl),
    review: `Editorial Head`,
    url: ('https://www.linkedin.com/in/khushboo-m-3a0160232?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')
  },
  {
    name: `Amarnath upadhyay `,
    img: (pro),
    review: `Public Relation Officer`,
    url: ('https://www.linkedin.com/in/amarnath-upadhyay-a4a113241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')
  },
  {
    name: `Vicky Kumar`,
    img: (pro2),
    review: `Public Relation Officer`,
    url: ('https://www.linkedin.com/in/vicky-kumar-969817239/')
  },
  {
    name: `Ashish Kumar Jha `,
    img: (sh),
    review: `Sports Head`,
    url: ('https://www.linkedin.com/in/ashish-kumar-jha-4baaa1231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')
  },
  {
    name: `Saurav Kumar Verma`,
    img: (sh2),
    review: `Sports Head`,
    url: ('https://www.linkedin.com/in/saurav-kumar-verma-38848923a/')
  },
  {
    name: `Ayushi Kumari `,
    img: (eph),
    review: ` Event and Program Head`,
    url: ('https://www.linkedin.com/in/ayushi-kumari-7a26b823a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')
  },
  {
    name: `SANYA DEO `,
    img: (eph2),
    review: ` Event and Program Head`,
    url: ('https://www.linkedin.com/in/sanya-deo-b61479236?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')
  },
  {
    name: `MEHAR TALAT `,
    img: (ch),
    review: `Creative Head`,
    url: ('https://www.linkedin.com/in/mehartalat/')
  },

];

export default App;
