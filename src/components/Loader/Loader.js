import Loader from "react-loader-spinner";
import styles from "./Loader.module.css"

const LoaderSpiner = () => (
    <div className={styles.wrapper}>
        <div className={styles.loader}>
                <Loader
                    type="BallTriangle"
                    color="#00BFFF"
                    height={80}
                    width={80}
                    className="conteiner"
                />
        </div>
    </div>

);
export default LoaderSpiner;