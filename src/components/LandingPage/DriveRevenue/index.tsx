import Link from 'next/link';
import Image from 'next/image';
import revenueImg from '@/public/images/revenue.png'
import styles from './driveRevenue.module.scss';

function DriveRevenue() {
    return(
        <div className="whiteBox">
            <h2>How We Drive Revenue</h2>
            <p>By offering custom omnichannel marketing strategies, led by experts and backed by data, Agreed Technologies can help your business hit your revenue goals. Stop juggling multiple agencies and start working with a top-rated agency that will drive results.</p>
            <ul className={styles.tabs}>
                {tabData && tabData.map((data, index) => {
                    return(
                        <li key={index}>
                            <span className={styles.iconWrap}>
                                <Image 
                                    src={data.icon}
                                    alt="..."
                                    width={54}
                                    height={54}
                                    layout='responsive'
                                />
                            </span>
                        {data.title}
                    </li>
                    )
                })}
               
            </ul>

            <div className={styles.infoWrap}>
                <div className={styles.infoWrapLhs}>
                    <h2>Become the number-one 
                    choice for local customers</h2>
                    <ul>
                        <li>Optimize your Google Business Profile </li>
                        <li>Automatically list your business in the top local directories </li>
                        <li>Improve online reputation</li>
                        <li>Monitor your performance and get local intel</li>
                    </ul>
                    <Link href="#" className='btn btn-blue'>Try Local</Link>
                </div>
                <div className={styles.infoWrapRhs}>
                    <Image 
                        src={revenueImg}
                        alt="..."
                        className={styles.logoImage}
                        width={677}
                        height={530}
                        layout='responsive'
                    />
                </div>
            </div>
        </div>
    )
}

const tabData = [
    {
        id: '1',
        icon: '/images/seo.png',
        title: "SEO"
    },
    {
        id: '2',
        icon: '/images/local-seo.png',
        title: "Local Seo"
    },
    {
        id: '3',
        icon: '/images/ppc.png',
        title: "PPC (Pay Per Click)"
    },
    {
        id: '4',
        icon: '/images/googlead.png',
        title: "Google Ads"
    },
    {
        id: '5',
        icon: '/images/devlopment.png',
        title: "Web Development"
    },
    {
        id: '6',
        icon: '/images/localMarket.png',
        title: "Local Marketing"
    }
]

export default DriveRevenue