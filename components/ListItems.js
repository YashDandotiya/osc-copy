import * as React from "react"
import PropTypes from "prop-types"
import Link from "next/link"
import styles from "./ListItemLink.module.css"

export function ListItemLink(props) {
    const { icon, primary, to } = props

    return (
        <div className={styles.listItem}>
            <Link href={to} passHref>
                <div className={styles.listLink}>
                    {icon ? <div className={styles.listIcon}>{icon}</div> : null}
                    <span className={styles.listText}>{primary}</span>
                </div>
            </Link>
        </div>
    )
}

ListItemLink.propTypes = {
    icon: PropTypes.element,
    primary: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
}
