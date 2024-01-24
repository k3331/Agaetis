import React from 'react'
import TopSection from '../components/TopSection'
import Cards from '../components/Cards'
import Posts from '../components/Posts'
import Comments from '../components/Comments'
import Footer from '../components/Footer'

function Bolg() {
  const blogPosts = [
    {
      title: 'Ayodhya Ram Mandir: A Symbol of Cultural Resurgence',
      subtitle: 'Ranjeet Singh',
      date: '1 Jan 2024',
      content: 'The Ayodhya Ram Mandir stands tall not just as a religious icon but as a profound symbol of cultural resurgence in India. The long-awaited completion of the temple is a testament to the enduring spirit of the Hindu community, reclaiming its cultural roots amidst the ebb and flow of history. The architectural grandeur of the Ram Mandir reflects the mastery of ancient craftsmanship, seamlessly blending tradition with modernity.' +
        'Beyond its religious significance, the temple serves as a cultural cornerstone, fostering a sense of unity and pride among millions. The meticulous carvings and intricate details narrate tales of India\'s rich heritage, inviting visitors to connect with the country\'s glorious past. As pilgrims and tourists converge to witness this marvel, the Ayodhya Ram Mandir emerges as a beacon, guiding the nation towards a renaissance of its cultural identity.'
    },
    {
      title: 'Ayodhya: Unraveling the Historical Tapestry',
      subtitle: 'Anjali Verma',
      date: '2 Jan 2024',
      content: 'Delve into the historical intricacies of Ayodhya, exploring the ancient city\'s cultural significance, architectural marvels, and the journey leading to the construction of the Ram Mandir. Unravel the layers of Ayodhya\'s rich heritage that extend beyond the recent developments.'
    },
    {
      title: 'Ayodhya\'s Cultural Renaissance: Beyond the Headlines',
      subtitle: 'Amit Patel',
      date: '3 Jan 2024',
      content: 'While the Ayodhya Ram Mandir takes center stage, this article delves into the broader cultural renaissance in Ayodhya. Explore the city\'s vibrant traditions, festivals, and the revitalization of its cultural identity amidst the ongoing developments.'
    },
    {
      title: 'Ayodhya\'s Architectural Marvels: Beyond the Ram Mandir',
      subtitle: 'Neha Sharma',
      date: '4 Jan 2024',
      content: 'Explore the diverse architectural marvels of Ayodhya, extending beyond the Ram Mandir. From ancient temples to historic structures, this article uncovers Ayodhya\'s hidden gems and their significance in the city\'s cultural landscape.'
    },
    {
      title: 'Ayodhya: Echoes of Faith and Harmony',
      subtitle: 'Rajiv Kumar',
      date: '5 Jan 2024',
      content: 'Delve into the spiritual tapestry of Ayodhya, exploring the coexistence of various faiths and the shared cultural heritage. This article reflects on the city\'s role as a symbol of religious harmony and the collective efforts to preserve its cultural legacy.'
    },
    // Add more blog posts as needed
  ];


  const archives = ['March 2014', 'February 2014', 'January 2014', 'March 2014', 'February 2014', 'January 2014', 'March 2014',];
  // Add more archive items as needed

  const navbarLinks = [
    'World', 'U.S.', 'Technology', 'Design', 'Culture', 'Business',
    'Politics', 'Opinion', 'Science', 'Health', 'Style', 'Travel',
  ];

  const carouselCards = [
    { title: 'Ayodhya', subtitle: ' Mark Mark', date: '1 jan 2014', content: 'Beautiful city', thumbnail: 'https://img.etimg.com/thumb/msid-107044128,width-300,height-225,imgsize-197010,resizemode-75/eds-image-via-cmo-ayodhya-ram-temple-being-decorated-with-flowers-on-the-e-.jpg' },
    { title: 'Ram Mandir', subtitle: ' Mark Mark', date: '1 jan 2014', content: 'Ram lala pran prathishta', thumbnail: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202401/ram-lalla-idol-in-ayodhya-ram-temple-232133440-16x9_0.jpg?VersionId=HHHb74WD7LEFYrDrpv_0q74.Cfyc3Iih&size=690:388' },
    { title: 'Maharashtra', subtitle: ' Mark Mark', date: '1 jan 2014', content: 'holiday on 22 feb', thumbnail: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202210/anirudh-ib3d1ux1llc-unsplash-sixteen_nine.jpg?VersionId=GEPaH83VLAAOE66QE0dwosAw.Lh5kOZw&size=690:388' },

  ];



  return (
    <>
      <div className="app-container">

        <TopSection navbarLinks={navbarLinks} />
        <Cards carouselCards={carouselCards} />
        <Posts blogPosts={blogPosts} archives={archives} />
        <Comments />
        <Footer />





      </div>
    </>
  )
}

export default Bolg