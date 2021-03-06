import React from 'react';

export default function Top(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" width={64} height={64} {...props}>
      <g fill="#4d5357">
        <path d="m32 2l-16 16h10v15h12v-15h10z" />
        <path d="m32 62c-3.3 0-6-2.8-6-6.3v-9.3c0-3.5 2.7-6.3 6-6.3s6 2.8 6 6.3v9.3c0 3.5-2.7 6.3-6 6.3m0-18.6c-1.7 0-3 1.3-3 3v9.3c0 1.6 1.3 3 3 3s3-1.3 3-3v-9.3c0-1.7-1.3-3-3-3" />
        <path d="m22 40h-12v3h4.5v19h3v-19h4.5z" />
        <path d="m48 40h-6v22h3v-9.3h3c3.3 0 6-2.8 6-6.3 0-3.6-2.7-6.4-6-6.4m0 9.3h-3v-5.9h3c1.7 0 3 1.3 3 3s-1.3 2.9-3 2.9" />
      </g>
    </svg>
  );
}
