import Link from 'next/link';
import { CustomLink } from '@/src/components/Button';
import styles from './banner.module.scss';


export default function MainBanner() {
    return (
        <div className={`${styles.banner}`}>
            <div className={styles.bannerLhs}>
                <div className={styles.bannerLhsInfo}>
                    <span className={styles.tag}>Agreed Technologies</span>
                    <div className={styles.heading}>starting at just $500 for the 1st year!*</div>
                    <p>Boost your online presence with expert SEO, high-converting PPC campaigns, and stunning Web Design — all tailored to grow your brand.</p>
                    <CustomLink
                        href={'#'}
                        label="Get a Call"
                        className={styles.btnWhite}
                    />
                </div>
            </div>
            <div className={styles.bannerRhs}>
                <div>sddsd</div>
            </div>
        </div>
    );
}