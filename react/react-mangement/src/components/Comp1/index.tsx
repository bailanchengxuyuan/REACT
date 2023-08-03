/* import "./comp1.scss" */ /* 全局引入不推荐 会影响其他组件 */
/* 模块化引入 */
import styles from "./comp1.module.scss"

const Comp=()=>{
    return(
        <div className={styles.box}>
            <p>这是comp1的内容</p>

        </div>
    )
}
export default Comp