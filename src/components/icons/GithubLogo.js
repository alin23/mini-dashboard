import * as React from 'react'

function GithubLogo({ width = 64, height = 63, ...props }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 64 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M31.818.323C14.592.323.624 14.643.624 32.307c0 14.131 8.938 26.12 21.332 30.35 1.56.295 2.131-.694 2.131-1.54 0-.762-.029-3.281-.042-5.954-8.678 1.935-10.51-3.774-10.51-3.774-1.418-3.697-3.463-4.68-3.463-4.68-2.83-1.985.213-1.944.213-1.944 3.133.226 4.782 3.296 4.782 3.296 2.782 4.89 7.298 3.476 9.078 2.659.28-2.067 1.088-3.478 1.98-4.277-6.928-.809-14.212-3.551-14.212-15.806 0-3.492 1.219-6.346 3.214-8.585-.324-.806-1.392-4.059.302-8.464 0 0 2.62-.86 8.58 3.278 2.49-.709 5.158-1.064 7.809-1.076 2.65.012 5.321.367 7.814 1.076 5.954-4.138 8.57-3.278 8.57-3.278 1.698 4.405.63 7.658.306 8.464 2 2.24 3.21 5.093 3.21 8.585 0 12.284-7.297 14.989-14.243 15.78 1.119.993 2.115 2.94 2.115 5.923 0 4.28-.036 7.724-.036 8.778 0 .85.562 1.848 2.143 1.534 12.388-4.234 21.314-16.218 21.314-30.345C63.011 14.642 49.045.323 31.818.323"
        fill="#1D1D1D"
      />
      <path
        d="M12.53 46.025c-.068.158-.312.205-.534.097-.225-.103-.352-.318-.279-.476.067-.162.311-.207.536-.099.227.104.355.32.277.478M13.792 47.456c-.149.14-.439.075-.636-.146-.204-.22-.242-.516-.091-.658.153-.14.434-.075.639.146.203.224.243.517.088.658M15.02 49.28c-.191.135-.503.008-.696-.273-.191-.282-.191-.62.004-.755.193-.135.5-.014.696.266.19.286.19.624-.005.762M16.701 51.042c-.17.191-.534.14-.8-.121-.272-.256-.348-.618-.177-.81.173-.191.538-.137.806.122.27.255.353.62.171.809M19.021 52.065c-.075.248-.425.361-.778.256-.352-.109-.582-.4-.511-.65.073-.25.425-.367.78-.255.351.109.582.397.51.65M21.57 52.255c.008.261-.29.478-.661.483-.372.008-.673-.203-.678-.46 0-.264.293-.479.665-.485.37-.007.673.203.673.462M23.94 51.844c.045.255-.212.517-.58.587-.361.067-.696-.09-.742-.343-.045-.261.217-.523.578-.59.368-.066.698.088.745.346"
        fill="#161514"
      />
    </svg>
  )
}

export default GithubLogo