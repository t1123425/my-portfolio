import React, { memo } from 'react'

const Contract: React.FC = () => {
  return (
    <section>
      <h2>Contact Me</h2>
      <ul className="contactList">
        <li>
          <strong>t1123425@gmail.com</strong>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/tom-yuan-61433689"
            target="_blank"
          >
            Linkedln
          </a>
        </li>
      </ul>
    </section>
  )
}

export default memo(Contract)
