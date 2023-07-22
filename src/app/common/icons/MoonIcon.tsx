import React from 'react'

const MoonIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="rgba(0, 0, 0, 1)"
        >
            <path d="M12 11.807A9.002 9.002 0 0110.049 2a9.942 9.942 0 00-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 002.735-5.119A9.003 9.003 0 0112 11.807z"></path>
        </svg>
    )
}

export default React.memo(MoonIcon)