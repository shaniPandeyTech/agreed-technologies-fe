import Link from 'next/link';
import Image from 'next/image';
import logoWhite from '@/public/images/logoWhite.png';
import cLogo1 from '@/public/images/clutch.png';
import cLogo2 from '@/public/images/shopity.png';
import cLogo3 from '@/public/images/bseoco.png';
import cLogo4 from '@/public/images/featiredCust.png';
import {footerList} from '@/src/utils/constants';
import SubscribeNewsLetter from '@/src/components/SubscribeNewsletter';
import styles from './footer.module.scss';

function Footer() {
    return(
        <footer className='container'>
            <div className={`container ${styles.wrapper}`}>
                <div className={styles.logoWrap}>
                    <a href='#' className={styles.logoWrapLhs}>
                        <Image
                            src={logoWhite}
                            alt='agreedtechnologies'
                            width={250}
                            height={76}
                            layout='responsive'
                            priority
                        />
                    </a>
                    <div className={styles.logoWrapRhs}>
                        <a href='#'>
                            <Image
                                src={cLogo1}
                                alt='...'
                                width={152}
                                height={66}
                                layout='responsive'
                                priority
                            />
                        </a>
                        <a href='#'>
                            <Image
                                src={cLogo2}
                                alt='...'
                                width={237}
                                height={66}
                                layout='responsive'
                                priority
                            />
                        </a>
                        <a href='#'>
                            <Image
                                src={cLogo3}
                                alt='...'
                                width={336}
                                height={66}
                                layout='responsive'
                                priority
                            />
                        </a>
                       
                        <a href='#'>
                            <Image
                                src={cLogo4}
                                alt='...'
                                width={186}
                                height={66}
                                priority
                            />
                        </a>
                    </div>
                </div>
                <p>We improve the productivity of a business through their website. Nothing less. Nothing more! Feel like growing? Hit us up!</p>

                <div className={styles.content}>
                    {footerList.map((item, index) => (
                        item.category && item.links ? (
                        <div className={styles.contentItem} key={index}>
                            <h3>{item.category}</h3>
                            {item.links && (
                                <ul>
                                    {item.links.map((links, i) => (
                                        <li key={i}><Link href='/'>{links}</Link></li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        ) : null
                    ))}

                    <div className={`${styles.contentItem} ${styles.address}`}>
                        {footerList
                            .filter(item => item.address)
                            .flatMap(item => item.address.map((address, index) => (
                              <div className={styles.addressItem}  key={index}>
                                <h3>{address.office}</h3>
                                <p>{address.location}</p>
                              </div> 
                            )))
                        }
                    </div>

                    <SubscribeNewsLetter/>
                </div>
                <div className={styles.contectInfo}>
                    <div className={styles.contectInfoItem}>
                        <span><strong>Phone:</strong>+1-4085209754 , +1-4085209509</span>
                        <span><strong>Email:</strong>contact@agreedtechnologies.com</span>
                    </div>

                    <span className={styles.copyright}>Agreed Technologies © 2024 All rights reserved</span>
                </div>
            </div>
        </footer>
    );
}


export default Footer;