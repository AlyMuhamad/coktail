'use client';

import Image from 'next/image';
import styles from './page.module.css';
import { useState } from 'react';
import { SlPhone } from 'react-icons/sl';
import { FaRegClock } from 'react-icons/fa';
import { CiCalendarDate } from 'react-icons/ci';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { AiOutlineHeart } from 'react-icons/ai';
import { GoStar } from 'react-icons/go';
import { IoChatbubbleOutline } from 'react-icons/io5';
import { BsPeople } from 'react-icons/bs';
import { BsArrowsAngleExpand, BsArrowsAngleContract } from 'react-icons/bs';
import image1 from './(assets)/5.jpg';
import image2 from './(assets)/1.jpg';
import image3 from './(assets)/2.jpg';
import image4 from './(assets)/3.jpg';
import image5 from './(assets)/4.jpg';
import image6 from './(assets)/6.jpg';

function Expand() {
  return (
    <BsArrowsAngleExpand className={`${styles.sizeArrow} ${styles.expand}`} />
  );
}

function Contract() {
  return (
    <BsArrowsAngleContract
      className={`${styles.sizeArrow} ${styles.contract}`}
    />
  );
}

export default function Home() {
  const [cardOnFocus, setCardOnFocus] = useState(1);
  return (
    <div className={styles.cards}>
      {cardsData.map(card => (
        <div
          className={`${styles.card} ${
            cardOnFocus == card.id
              ? card.id == 3
                ? styles.cardOnFocusThird
                : card.id == 6
                ? styles.cardOnFocusSixth
                : styles.cardOnFocus
              : styles.cardOffFocus
          }`}
          onClick={() => setCardOnFocus(card.id)}
          key={card.id}
        >
          <div className={styles.head}>
            <div className={styles.pictureWrapper}>
              <Image
                src={card.image}
                alt="a person image"
                className={styles.profilePic}
                priority
                sizes="100vw"
                style={{
                  width: '60%',
                  height: 'auto',
                }}
              />
              <p
                className={`${styles.status} ${
                  !card.available
                    ? card.busy
                      ? styles.busy
                      : styles.statusOff
                    : styles.statusOn
                }`}
              >
                .
              </p>
            </div>
            <div>
              <div className={styles.nameDetails}>
                <p
                  className={
                    cardOnFocus == card.id
                      ? styles.nameOnFocus
                      : styles.nameOffFocus
                  }
                >
                  {card.name}, {card.age}
                </p>
                <p className={styles.gender}>{card.gender}</p>
              </div>
              <div className={styles.avail}>
                <FaRegClock className={styles.clock} />
                <p
                  className={`${styles.availText} ${
                    card.available ? styles.availTextOn : styles.availTextOff
                  }`}
                >
                  {card.availability}
                </p>
              </div>
            </div>
            {card.attachedIcon}
          </div>
          <div className={styles.labels}>
            {card.labels.map(label => (
              <p key={label}>{label}</p>
            ))}
          </div>
          <div>
            <p
              className={
                cardOnFocus == card.id
                  ? styles.descOnFocus
                  : styles.descNotOnFocus
              }
            >
              {cardOnFocus == card.id
                ? card.desc
                : `${card.desc.slice(0, 90)} ......`}
            </p>
          </div>
          {cardOnFocus == card.id ? <Contract /> : <Expand />}
          {cardOnFocus == card.id && (
            <div>
              <div className={styles.stats}>
                {card.stats.map(col => (
                  <div className={styles.statsCol} key={col.id}>
                    {col.icon}
                    <p className={styles.colLabel}>{col.label}</p>
                    <p className={styles.colNum}>{col.value}</p>
                  </div>
                ))}
              </div>
              <div>
                <div className={styles.datesHead}>
                  <CiCalendarDate className={styles.calender} />
                  <p>Available</p>
                </div>
                <div className={styles.dates}>
                  {card.schedule.map(date => (
                    <p key={date}>{date}</p>
                  ))}
                </div>
              </div>
              <div>
                <p className={styles.langsHead}>Languages</p>
                <div className={styles.langs}>
                  {card.languages.map(lang => (
                    <p key={lang}>{lang}</p>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

const cardsData = [
  {
    id: 1,
    image: image1,
    name: 'Michael',
    age: 28,
    gender: 'Male',
    availability: 'Available now',
    available: true,
    busy: false,
    attachedIcon: <SlPhone className={styles.contactIcon} />,
    labels: ['anxiety', 'work-stress', 'family-issues'],
    desc: 'Compassionate listener with a multicultural background. I help people navigate identity issues and relationship challenge',
    stats: [
      {
        id: 1,
        icon: <GoStar className={styles.statsIcon} />,
        label: 'Rating',
        value: '4.9 / 5',
      },
      {
        id: 2,
        icon: <IoChatbubbleOutline className={styles.statsIcon} />,
        label: 'Sessions',
        value: '250+',
      },
      {
        id: 3,
        icon: <AiOutlineHeart className={styles.statsIcon} />,
        label: 'Helped',
        value: '180+',
      },
      {
        id: 4,
        icon: <BsPeople className={styles.statsIcon} />,
        label: 'Return Rate',
        value: '85%',
      },
    ],
    schedule: [
      'Mon: 9AM-5PM',
      'Tue: 9AM-5PM',
      'Wed: 9AM-5PM',
      'Thu: 9AM-5PM',
      'Fri: 9AM-5PM',
    ],
    languages: ['English', 'French', 'Arabic'],
  },
  {
    id: 2,
    image: image2,
    name: 'Carlos',
    age: 40,
    gender: 'Male',
    availability: 'Wednesday, 10 AM - 4 PM EST',
    available: false,
    busy: false,
    attachedIcon: <IoIosNotificationsOutline className={styles.bellIcon} />,
    labels: ['anxiety', 'work-stress', 'family-issues'],
    desc: 'Dedicated Psychologist with over 6 years of experience in providing cognitive behavioral therapy and mental health assessments.',
    stats: [
      {
        id: 1,
        icon: <GoStar className={styles.statsIcon} />,
        label: 'Rating',
        value: '4.9 / 5',
      },
      {
        id: 2,
        icon: <IoChatbubbleOutline className={styles.statsIcon} />,
        label: 'Sessions',
        value: '250+',
      },
      {
        id: 3,
        icon: <AiOutlineHeart className={styles.statsIcon} />,
        label: 'Helped',
        value: '180+',
      },
      {
        id: 4,
        icon: <BsPeople className={styles.statsIcon} />,
        label: 'Return Rate',
        value: '85%',
      },
    ],
    schedule: [
      'Mon: 9AM-5PM',
      'Mon: 9AM-5PM',
      'Mon: 9AM-5PM',
      'Mon: 9AM-5PM',
      'Mon: 9AM-5PM',
    ],
    languages: ['English', 'French', 'Arabic'],
  },
  {
    id: 3,
    image: image4,
    name: 'Sarah',
    age: 37,
    gender: 'Female',
    availability: 'Available now',
    available: true,
    busy: false,
    attachedIcon: <SlPhone className={styles.contactIcon} />,
    labels: ['anxiety', 'work-stress', 'family-issues'],
    desc: 'Compassionate listener with a multicultural background. I help people navigate identity issues and relationship challenge',
    stats: [
      {
        id: 1,
        icon: <GoStar className={styles.statsIcon} />,
        label: 'Rating',
        value: '4.9 / 5',
      },
      {
        id: 2,
        icon: <IoChatbubbleOutline className={styles.statsIcon} />,
        label: 'Sessions',
        value: '250+',
      },
      {
        id: 3,
        icon: <AiOutlineHeart className={styles.statsIcon} />,
        label: 'Helped',
        value: '180+',
      },
      {
        id: 4,
        icon: <BsPeople className={styles.statsIcon} />,
        label: 'Return Rate',
        value: '85%',
      },
    ],
    schedule: [
      'Mon: 9AM-5PM',
      'Mon: 9AM-5PM',
      'Mon: 9AM-5PM',
      'Mon: 9AM-5PM',
      'Mon: 9AM-5PM',
    ],
    languages: ['English', 'French', 'Arabic'],
  },
  {
    id: 4,
    image: image6,
    name: 'Aisha',
    age: 42,
    gender: 'Female',
    availability: 'Saturday, 11 AM - 7 PM EST',
    available: false,
    busy: true,
    attachedIcon: <IoIosNotificationsOutline className={styles.bellIcon} />,
    labels: ['anxiety', 'work-stress', 'family-issues'],
    desc: 'Specializing in cognitive behavioral therapy and trauma-informed care. Proven track record of developing individualized treatment plans.',
    stats: [
      {
        id: 1,
        icon: <GoStar className={styles.statsIcon} />,
        label: 'Rating',
        value: '4.9 / 5',
      },
      {
        id: 2,
        icon: <IoChatbubbleOutline className={styles.statsIcon} />,
        label: 'Sessions',
        value: '250+',
      },
      {
        id: 3,
        icon: <AiOutlineHeart className={styles.statsIcon} />,
        label: 'Helped',
        value: '180+',
      },
      {
        id: 4,
        icon: <BsPeople className={styles.statsIcon} />,
        label: 'Return Rate',
        value: '85%',
      },
    ],
    schedule: [
      'Sat: 9AM-5PM',
      'Sun: 9AM-5PM',
      'Mon: 9AM-5PM',
      'Tue: 9AM-5PM',
      'Wed: 9AM-5PM',
    ],
    languages: ['English', 'French', 'Arabic'],
  },
  {
    id: 5,
    image: image3,
    name: 'George',
    age: 34,
    gender: 'Male',
    availability: 'Available now',
    available: true,
    busy: false,
    attachedIcon: <SlPhone className={styles.contactIcon} />,
    labels: ['anxiety', 'work-stress', 'family-issues'],
    desc: 'Compassionate listener with a multicultural background. I help people navigate identity issues and relationship challenge',
    stats: [
      {
        id: 1,
        icon: <GoStar className={styles.statsIcon} />,
        label: 'Rating',
        value: '4.9 / 5',
      },
      {
        id: 2,
        icon: <IoChatbubbleOutline className={styles.statsIcon} />,
        label: 'Sessions',
        value: '250+',
      },
      {
        id: 3,
        icon: <AiOutlineHeart className={styles.statsIcon} />,
        label: 'Helped',
        value: '180+',
      },
      {
        id: 4,
        icon: <BsPeople className={styles.statsIcon} />,
        label: 'Return Rate',
        value: '85%',
      },
    ],
    schedule: ['Mon: 9AM-5PM', 'Tue: 9AM-5PM', 'Wed: 9AM-5PM', 'Thu: 9AM-5PM'],
    languages: ['English', 'French', 'Arabic'],
  },
  {
    id: 6,
    image: image5,
    name: 'Emma',
    age: 39,
    gender: 'Female',
    availability: 'Friday, 1 PM - 7 PM GMT',
    available: false,
    busy: true,
    attachedIcon: <IoIosNotificationsOutline className={styles.bellIcon} />,
    labels: ['anxiety', 'work-stress', 'family-issues'],
    desc: 'Compassionate listener with a multicultural background. I help people navigate identity issues and relationship challenge',
    stats: [
      {
        id: 1,
        icon: <GoStar className={styles.statsIcon} />,
        label: 'Rating',
        value: '4.5 / 5',
      },
      {
        id: 2,
        icon: <IoChatbubbleOutline className={styles.statsIcon} />,
        label: 'Sessions',
        value: '150+',
      },
      {
        id: 3,
        icon: <AiOutlineHeart className={styles.statsIcon} />,
        label: 'Helped',
        value: '200+',
      },
      {
        id: 4,
        icon: <BsPeople className={styles.statsIcon} />,
        label: 'Return Rate',
        value: '80%',
      },
    ],
    schedule: [
      'Sat: 9AM-5PM',
      'Sun: 9AM-5PM',
      'Mon: 9AM-5PM',
      'Tue: 9AM-5PM',
      'Wed: 9AM-5PM',
    ],
    languages: ['English', 'French', 'Arabic', 'Spanish'],
  },
];
