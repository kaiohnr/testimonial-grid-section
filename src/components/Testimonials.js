import React from 'react';

import styles from './Testimonials.module.css';

import quoteImage from '../assets/images/bg-pattern-quotation.svg';
import person1Image from '../assets/images/image-daniel.jpg';
import person2Image from '../assets/images/image-jonathan.jpg';
import person3Image from '../assets/images/image-jeanette.jpg';
import person4Image from '../assets/images/image-kira.jpg';
import person5Image from '../assets/images/image-patrick.jpg';

const Testimonials = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.testimonials}>
        <li className={styles.testimonials__item}>
          <div className={styles.person__info}>
            <img
              className={styles['person__info--image']}
              src={person1Image}
              alt="person"
            />

            <div>
              <h1 className={styles['person__info--name']}>Daniel Clifford</h1>
              <p className={styles['person__info--position']}>Verified Graduate</p>
            </div>
          </div>

          <h2 className={styles['testimonials__item--title']}>
            I received a job offer mid-course, and the subjects I learned were
            current, if not more so, in the company I joined. I honestly feel I got
            every penny’s worth.
          </h2>

          <p className={styles['testimonials__item--description']}>
            “ I was an EMT for many years before I joined the bootcamp. I’ve been
            looking to make a transition and have heard some people who had an
            amazing experience here. I signed up for the free intro course and found
            it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was
            the best - and most grueling - time of my life. Since completing the
            course, I’ve successfully switched careers, working as a Software
            Engineer at a VR startup.”
          </p>
        </li>

        <li className={styles.testimonials__item}>
          <div className={styles.person__info}>
            <img
              className={styles['person__info--image']}
              src={person2Image}
              alt="person"
            />

            <div>
              <h1 className={styles['person__info--name']}>Jonathan Walters</h1>
              <p className={styles['person__info--position']}>Verified Graduate</p>
            </div>
          </div>

          <h2 className={styles['testimonials__item--title']}>
            The team was very supportive and kept me motivated
          </h2>

          <p className={styles['testimonials__item--description']}>
            “ I started as a total newbie with virtually no coding skills. I now work
            as a mobile engineer for a big company. This was one of the best
            investments I’ve made in myself. ”
          </p>
        </li>

        <li className={styles.testimonials__item}>
          <div className={styles.person__info}>
            <img
              className={styles['person__info--image']}
              src={person3Image}
              alt="person"
            />

            <div>
              <h1 className={styles['person__info--name']}>Jeanette Harmon </h1>
              <p className={styles['person__info--position']}>Verified Graduate</p>
            </div>
          </div>

          <h2 className={styles['testimonials__item--title']}>
            An overall wonderful and rewarding experience
          </h2>

          <p className={styles['testimonials__item--description']}>
            “ Thank you for the wonderful experience! I now have a job I really
            enjoy, and make a good living while doing something I love. ”
          </p>
        </li>

        <li className={styles.testimonials__item}>
          <div className={styles.person__info}>
            <img
              className={styles['person__info--image']}
              src={person5Image}
              alt="person"
            />

            <div>
              <h1 className={styles['person__info--name']}>Patrick Abrams</h1>
              <p className={styles['person__info--position']}>Verified Graduate</p>
            </div>
          </div>

          <h2 className={styles['testimonials__item--title']}>
            Awesome teaching support from TAs who did the bootcamp themselves.
            Getting guidance from them and learning from their experiences was easy.
          </h2>

          <p className={styles['testimonials__item--description']}>
            “ The staff seem genuinely concerned about my progress which I find
            really refreshing. The program gave me the confidence necessary to be
            able to go out in the world and present myself as a capable junior
            developer. The standard is above the rest. You will get the personal
            attention you need from an incredible community of smart and amazing
            people. ”
          </p>
        </li>

        <li className={styles.testimonials__item}>
          <div className={styles.person__info}>
            <img
              className={styles['person__info--image']}
              src={person4Image}
              alt="person"
            />

            <div>
              <h1 className={styles['person__info--name']}>Kira Whittle</h1>
              <p className={styles['person__info--position']}>Verified Graduate</p>
            </div>
          </div>

          <h2 className={styles['testimonials__item--title']}>
            Such a life-changing experience. Highly recommended!
          </h2>

          <p className={styles['testimonials__item--description']}>
            “ Before joining the bootcamp, I’ve never written a line of code. I
            needed some structure from professionals who can help me learn
            programming step by step. I was encouraged to enroll by a former student
            of theirs who can only say wonderful things about the program. The entire
            curriculum and staff did not disappoint. They were very hands-on and I
            never had to wait long for assistance. The agile team project, in
            particular, was outstanding. It took my learning to the next level in a
            way that no tutorial could ever have. In fact, I’ve often referred to it
            during interviews as an example of my developent experience. It certainly
            helped me land a job as a full-stack developer after receiving multiple
            offers. 100% recommend! ”
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Testimonials;
